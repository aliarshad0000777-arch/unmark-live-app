import express from 'express';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';

// Apni alag files ko import kar rahe hain
import imageRouter from './image.js';
import videoRouter from './video.js';

dotenv.config();

const app = express();
app.use(cors());

// ==========================================
// 1. STORAGE CONFIGURATIONS
// ==========================================
const uploadDir = 'uploads/';
const outputDir = 'uploads/output/';

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// ==========================================
// 2. ROUTE CONTROLLERS (Modular Architecture)
// ==========================================
// Jab "/process-image" hit hoga, toh code seedha "image.js" file ke paas jayega
app.use('/process-image', imageRouter);

// Jab "/process-video" hit hoga, toh code seedha "video.js" file ke paas jayega
app.use('/process-video', videoRouter);

// ==========================================
// 3. SERVER INITIALIZATION 
// ==========================================
const PORT = 7860;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Unmark AI Modular Backend running on http://0.0.0.0:${PORT}`);
});