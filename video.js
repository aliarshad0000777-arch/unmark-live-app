import express from 'express';
import multer from 'multer';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const router = express.Router();

const uploadDir = 'uploads/';
const uploadDisk = multer({ dest: uploadDir });

const safeDelete = (filePath) => {
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch (err) {
    console.error(`Failed to delete file ${filePath}:`, err.message);
  }
};

function computeVideoRegions(type, W, H) {
  const clamp = (r) => {
    let x = Math.max(0, Math.floor(r.x));
    let y = Math.max(0, Math.floor(r.y));
    let w = Math.max(2, Math.floor(r.w));
    let h = Math.max(2, Math.floor(r.h));
    if (x + w >= W) w = W - x;
    if (y + h >= H) h = H - y;
    return { x, y, w, h };
  };

  const portrait = H >= W; 

  switch (type) {
    case 'veo': {
      if (portrait) {
        const w = Math.round(W * 0.05);
        const h = Math.round(H * 0.01);
        return [clamp({ x: W - w - W * 0.01, y: H - h - H * 0.01, w, h })];
      } else {
        const w = Math.round(W * 0.03);
        const h = Math.round(H * 0.02);
        return [clamp({ x: W - w - W * 0.0095, y: H - h - H * 0.018, w, h })];
      }
    }
    case 'gemini': {
      if (portrait) {
        const w = Math.round(W * 0.07); 
        const h = Math.round(W * 0.07);
        return [clamp({ x: W - w - W * 0.13, y: H - h - H * 0.075, w, h })];
      } else {
        const w = Math.round(H * 0.067);
        const h = Math.round(H * 0.070);
        return [clamp({ x: W - w - W * 0.075, y: H - h - H * 0.133, w, h })];
      }
    }
    default:
      return [];
  }
}

router.post('/', uploadDisk.single('video'), (req, res) => {
  if (!req.file) return res.status(400).send('No video uploaded.');

  const { watermark, width, height } = req.body;
  const W = parseInt(width);
  const H = parseInt(height);
  const inputPath = req.file.path;
  
  // 🚀 OPTIMIZATION: Hum outputPath variable hi remove kar rahe hain. 
  // Ab file server par save hogi hi nahi, direct stream hogi!

  if (watermark !== 'veo' && watermark !== 'gemini') {
    safeDelete(inputPath);
    return res.status(400).send('Unsupported watermark type.');
  }

  console.log(`Processing ${watermark} watermark for video (${W}x${H})...`);
  const regions = computeVideoRegions(watermark, W, H);
  
  if (regions.length === 0) {
    safeDelete(inputPath);
    return res.status(500).send('Failed to compute watermark regions.');
  }

  const filterString = regions.map(r => `delogo=x=${r.x}:y=${r.y}:w=${r.w}:h=${r.h}:show=0`).join(',');

  // Headers set karein taake browser ko pata ho ke live video aa rahi hai
  res.set('Content-Type', 'video/mp4');
  res.set('Transfer-Encoding', 'chunked');

  ffmpeg(inputPath)
    .videoFilters(`${filterString},scale=trunc(iw/2)*2:trunc(ih/2)*2`)
    .videoCodec('libx264')
    .audioCodec('aac') 
    .outputFormat('mp4') // 🚀 Required for direct piping
    .outputOptions([
        '-preset ultrafast', 
        '-crf 30', 
        // 🚀 MASTERSTROKE: frag_keyframe+empty_moov allows MP4 to be streamed LIVE without saving!
        '-movflags frag_keyframe+empty_moov',
        '-threads 0',
        '-pix_fmt yuv420p'
    ])
    .on('start', (cmd) => console.log('FFmpeg Live Stream Started:', cmd))
    .on('end', () => {
      console.log('Video Stream Complete! Cleaning up input file...');
      safeDelete(inputPath); // Sirf input delete karna bacha hai
    })
    .on('error', (err) => {
      console.error('FFmpeg Error:', err.message);
      if (!res.headersSent) res.status(500).send(`Engine Error: ${err.message}`);
      safeDelete(inputPath);
    })
    // 🚀 THE MAGIC: Output seedha Express response (res) mein pipe kar diya
    .pipe(res, { end: true });
});

export default router;