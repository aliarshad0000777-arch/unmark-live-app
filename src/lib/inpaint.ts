// Micro-Scale & Trim watermark removal (Smart Centered Version).

export interface InpaintResult {
  canvas: HTMLCanvasElement;

  blob: Blob;

  dataUrl: string;
}

export async function inpaintBottomRight(source: HTMLImageElement): Promise<InpaintResult> {
  // 1. Always use naturalWidth/naturalHeight to preserve 100% Original HD Quality

  const W = source.naturalWidth;

  const H = source.naturalHeight;

  const canvas = document.createElement("canvas");

  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas 2D context unavailable");

  // 2. STRICTLY lock canvas size to original resolution

  canvas.width = W;

  canvas.height = H;

  // PRO FIX: Enable high-quality smoothing

  ctx.imageSmoothingEnabled = true;

  ctx.imageSmoothingQuality = "high";

  // 3. Aspect-ratio aware scaling

  const aspectRatio = W / H;

  let scale;

  if (aspectRatio > 1.5) {
    scale = 1.1; // Landscape
  } else if (aspectRatio < 0.8) {
    scale = 1.09; // Portrait
  } else {
    scale = 1.219; // Square & Standard (like 4:3)
  }

  // 4. Calculate scaled dimensions

  const scaledWidth = W * scale;

  const scaledHeight = H * scale;

  // 5. THE MAGIC FIX: Smart Offsetting (30% Top-Left, 70% Bottom-Right)

  // Instead of perfect 50% center (/ 2), this keeps subjects looking centered

  // but aggressively pushes the bottom-right watermark out of bounds!

  const offsetX = (W - scaledWidth) * 0.3;

  const offsetY = (H - scaledHeight) * 0.3;

  // 6. Draw scaled image from the smart offset

  ctx.drawImage(source, 0, 0, W, H, offsetX, offsetY, scaledWidth, scaledHeight);

  const blob: Blob = await new Promise((resolve, reject) =>
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("toBlob failed"))),

      "image/png",
    ),
  );

  const dataUrl = canvas.toDataURL("image/png");

  return { canvas, blob, dataUrl };
}

export function fileToImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);

    const img = new Image();

    img.onload = () => {
      // CRITICAL FIX: Removed URL.revokeObjectURL(url);

      // Now the "Before" image will stay visible in the React component!

      resolve(img);
    };

    img.onerror = () => {
      reject(new Error("Failed to decode image"));
    };

    img.src = url;
  });
}
