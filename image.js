import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);
const router = express.Router();

const uploadDir = 'uploads/';
const outputDir = 'uploads/output/';
const uploadDisk = multer({ dest: uploadDir });

const safeDelete = (filePath) => {
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch (err) {
    console.error(`Failed to delete file ${filePath}:`, err.message);
  }
};

// 🔴 DEBUG MODE OFF (Production Ready)
const DEBUG_MODE = false; 

// 🚀 SCALABLE ASPECT RATIO MAPPING 🚀
const GEMINI_CONFIG = {
  // --- EXISTING PERFECTED VALUES ---
  portrait: {         // 9:16 Ratio
    boxSizePercent: 7,   
    paddingRight: 12.2,     
    paddingBottom: 6.8     
  },
  landscape: {        // 16:9 Ratio
    boxSizePercent: 4.5,   
    paddingRight: 6.5,
    paddingBottom: 11.7
  },
  square: {           // 1:1 Ratio
    boxSizePercent: 6,
    paddingRight: 8.7,
    paddingBottom: 8.7
  },

  // --- NEW RATIOS (TUNED AND LOCKED) ---
  portrait_4_5: {     // 4:5 Ratio
    boxSizePercent: 6.5, 
    paddingRight: 9.8,  
    paddingBottom: 8   
  },
  landscape_4_3: {    // 4:3 Ratio
    boxSizePercent: 5.0, 
    paddingRight: 7.6,
    paddingBottom: 10.1
  },
  landscape_3_2: {    // 3:2 Ratio
    boxSizePercent: 4.8,
    paddingRight: 7.2,
    paddingBottom: 10.65
  },
  ultrawide_21_9: {   // 21:9 Ratio
    boxSizePercent: 4.5,
    paddingRight: 5.38,
    paddingBottom: 12.5
  }
};

const AVAILABLE_RATIOS = [
  { name: 'portrait', val: 9/16 },        
  { name: 'portrait_4_5', val: 4/5 },     
  { name: 'square', val: 1/1 },           
  { name: 'landscape_4_3', val: 4/3 },    
  { name: 'landscape_3_2', val: 3/2 },    
  { name: 'landscape', val: 16/9 },       
  { name: 'ultrawide_21_9', val: 21/9 }   
];

router.post('/', uploadDisk.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).send('No image uploaded.');

  const inputPath = req.file.path;
  const imagePath = `${inputPath}.jpg`;
  const maskPath = `${inputPath}_mask.jpg`;

  try {
    fs.renameSync(inputPath, imagePath);

    const metadata = await sharp(imagePath).metadata();
    const W = metadata.width;
    const H = metadata.height;
    
    const targetRatio = W / H;
    
    let closestConfig = AVAILABLE_RATIOS[0].name;
    let minDiff = Infinity;

    for (const r of AVAILABLE_RATIOS) {
      const diff = Math.abs(targetRatio - r.val);
      if (diff < minDiff) {
        minDiff = diff;
        closestConfig = r.name;
      }
    }

    const configType = closestConfig;
    console.log(`Image Detected as: ${configType.toUpperCase()} (Exact Ratio: ${targetRatio.toFixed(3)})`);
    
    const config = GEMINI_CONFIG[configType];

    // Frontend values ko read karna (Agar koi custom value pass ho, warna default use karega)
    const finalBoxPercent = req.body.boxSize ? parseFloat(req.body.boxSize) : config.boxSizePercent;
    const finalPadRight = req.body.padRight ? parseFloat(req.body.padRight) : config.paddingRight;
    const finalPadBottom = req.body.padBottom ? parseFloat(req.body.padBottom) : config.paddingBottom;

    console.log(`Applying Box: ${finalBoxPercent}%, PadX: ${finalPadRight}%, PadY: ${finalPadBottom}%`);

    const boxSize = Math.floor(W * (finalBoxPercent / 100));
    const padX = Math.floor(W * (finalPadRight / 100));
    const padY = Math.floor(H * (finalPadBottom / 100));

    const finalX = Math.max(0, W - boxSize - padX);
    const finalY = Math.max(0, H - boxSize - padY);
    const finalW = boxSize;
    const finalH = boxSize;

    // 🔴 DEBUG MODE LOGIC
    if (DEBUG_MODE) {
      const svgDebug = `
        <svg width="${W}" height="${H}">
          <rect x="${finalX}" y="${finalY}" width="${finalW}" height="${finalH}" 
                fill="rgba(255, 0, 0, 0.5)" stroke="red" stroke-width="3"/>
        </svg>
      `;
      const debugBuffer = await sharp(imagePath)
        .composite([{ input: Buffer.from(svgDebug), top: 0, left: 0 }])
        .jpeg({ quality: 90 })
        .toBuffer();

      safeDelete(imagePath);
      res.set('Content-Type', 'image/jpeg');
      return res.send(debugBuffer);
    }

    // 🟢 NORMAL MODE
    const svgMask = `
      <svg width="${W}" height="${H}">
        <rect width="100%" height="100%" fill="black"/>
        <rect x="${finalX}" y="${finalY}" width="${finalW}" height="${finalH}" fill="white"/>
      </svg>
    `;
    
    await sharp(Buffer.from(svgMask)).toFile(maskPath);
    
    const command = `iopaint run --image ${imagePath} --mask ${maskPath} --output ${outputDir} --model lama`;
    await execPromise(command);
    
    const filesInOutput = fs.readdirSync(outputDir);
    const generatedFile = filesInOutput.find(f => f.includes(req.file.filename));
    
    if (!generatedFile) throw new Error("AI output file missing.");
    const actualOutputPath = path.resolve(outputDir, generatedFile);
    
    const optimizedBuffer = await sharp(actualOutputPath)
      .jpeg({ quality: 90, progressive: true, mozjpeg: true })
      .toBuffer();
    
    safeDelete(imagePath);
    safeDelete(maskPath);
    safeDelete(actualOutputPath);

    res.set('Content-Type', 'image/jpeg');
    res.set('Content-Length', optimizedBuffer.length.toString());
    res.send(optimizedBuffer);

  } catch (error) {
    console.error("Engine Error:", error.message);
    if (!res.headersSent) res.status(500).json({ error: "Processing Failed: " + error.message });
    
    safeDelete(inputPath);
    safeDelete(imagePath);
    safeDelete(maskPath);
  }
});

export default router;