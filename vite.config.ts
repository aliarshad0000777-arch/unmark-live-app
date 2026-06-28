import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    prerender: {
      // crawlLinks ko true karne se engine khud bhi links dhoondh kar HTML banata hai
      crawlLinks: true,
      
      // Yahan humne aapke tamam 4 pages ka exact rasta de diya hai
      routes: [
        '/',
        '/video-remover',
        '/privacy-policy',
        '/terms' 
      ],
    },
  },
});