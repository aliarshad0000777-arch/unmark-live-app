import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    // @ts-ignore: TypeScript ko batane ke liye ke yeh valid Nitro property hai
    prerender: {
      // crawlLinks ko true karne se engine khud bhi links dhoondh kar HTML banata hai
      crawlLinks: true,
      
      // Yahan humne aapke tamam naye pages ka exact rasta de diya hai SEO ke liye
      routes: [
        '/',                     // Text to Video (Homepage)
        '/text-to-image',        // Text to Image Generator
        '/watermark-remover',    // Image Watermark Remover
        '/video-remover',        // Video Watermark Remover
        '/privacy-policy',       // Privacy Policy
        '/terms'                 // Terms & Conditions
      ],
    },
  },
});