import express from 'express';
import cors from 'cors';
import multer from 'multer';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';

// Setup FFmpeg native path
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const app = express();
app.use(cors());

// Ensure 'uploads' directory exists to prevent Multer crash on fresh servers
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// File upload setup
const upload = multer({ dest: uploadDir });

// Math Logic with Dual Ratios (Portrait & Landscape) - Strictly AI Tools
function computeRegions(type, W, H) {
  const portrait = H >= W;
  
  const clamp = (r) => {
    let x = Math.max(0, Math.floor(r.x));
    let y = Math.max(0, Math.floor(r.y));
    let w = Math.max(2, Math.floor(r.w));
    let h = Math.max(2, Math.floor(r.h));
    if (x + w >= W) w = W - x;
    if (y + h >= H) h = H - y;
    return { x, y, w, h };
  };

  switch (type) {
    case 'veo': {
      if (portrait) {
        // ✅ Perfected 9:16 Values
        const w = Math.round(W * 0.05);
        const h = Math.round(H * 0.01);
        return [clamp({ x: W - w - W * 0.01, y: H - h - H * 0.01, w, h })];
      } else {
        // ✅ 16:9 Landscape Values
        const w = Math.round(W * 0.03);
        const h = Math.round(H * 0.02);
        return [clamp({ x: W - w - W * 0.0095, y: H - h - H * 0.018, w, h })];
      }
    }
    case 'gemini': {
      if (portrait) {
        // ✅ Perfected 9:16 Values
        const w = Math.round(W * 0.07); 
        const h = Math.round(W * 0.07);
        return [clamp({ x: W - w - W * 0.13, y: H - h - H * 0.075, w, h })];
      } else {
        // ✅ 16:9 Landscape Values
        const w = Math.round(H * 0.067);
        const h = Math.round(H * 0.070);
        return [clamp({ x: W - w - W * 0.075, y: H - h - H * 0.133, w, h })];
      }
    }
    default:
      return [];
  }
}

// Helper function for safe and crash-free file deletion
const safeDelete = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error(`Failed to delete file ${filePath}:`, err.message);
  }
};

app.post('/process-video', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).send('No video uploaded.');

  const { watermark, width, height } = req.body;
  const W = parseInt(width);
  const H = parseInt(height);

  const inputPath = req.file.path;
  const outputPath = `${req.file.path}_processed.mp4`;

  // Strict Validation: Reject anything other than Veo or Gemini
  if (watermark !== 'veo' && watermark !== 'gemini') {
    safeDelete(inputPath);
    return res.status(400).send('Unsupported watermark type. Only Veo and Gemini are supported.');
  }

  console.log(`Processing ${watermark} watermark for video (${W}x${H})...`);

  const regions = computeRegions(watermark, W, H);
  
  if (regions.length === 0) {
    safeDelete(inputPath);
    return res.status(500).send('Failed to compute watermark regions.');
  }

  // show=0 explicitly applied for production
  const filterString = regions.map(r => `delogo=x=${r.x}:y=${r.y}:w=${r.w}:h=${r.h}:show=0`).join(',');

  ffmpeg(inputPath)
    // Scale filter ensures dimensions are even numbers
    .videoFilters(`${filterString},scale=trunc(iw/2)*2:trunc(ih/2)*2`)
    .videoCodec('libx264')
    // 🚀 THE FIX: Convert audio to AAC so browsers don't mute it! 🚀
    .audioCodec('aac') 
    .outputOptions([
      '-preset ultrafast',
      '-crf 23'
    ])
    .on('start', (cmd) => console.log('FFmpeg Started:', cmd))
    .on('end', () => {
      console.log('Processing Complete!');
      res.download(outputPath, 'unmark-processed.mp4', (err) => {
        // Cleanup files safely after user completes downloading
        safeDelete(inputPath);
        safeDelete(outputPath);
      });
    })
    .on('error', (err) => {
      console.error('FFmpeg Error:', err.message);
      // Ensure headers aren't sent twice if an error occurs mid-stream
      if (!res.headersSent) {
        res.status(500).send(`Engine Error: ${err.message}`);
      }
      safeDelete(inputPath);
      safeDelete(outputPath);
    })
    .save(outputPath);
});

// Process.env.PORT is standard practice for deploying on servers like Render/Heroku
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Unmark AI Backend Engine running on http://localhost:${PORT}`);
});