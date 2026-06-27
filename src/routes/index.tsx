import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { WatermarkRemover } from "@/components/watermark-remover";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      /* --- HIGHLY OPTIMIZED SEO TITLE (Kept exactly as requested) --- */
      { title: "Gemini Watermark Remover | Free & No Sign-up" },

      /* --- POWERFUL DESCRIPTION FOR HIGHER CTR (Kept exactly as requested) --- */
      {
        name: "description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },

      /* --- ENHANCED HIGH-RANKING KEYWORDS (Added viral & search-heavy terms) --- */
      {
        name: "keywords",
        content:
          "Gemini watermark remover, Nano Banana Star Watermark Remover, free AI watermark remover, remove Star logo online, no signup, unlimited AI Watermark eraser, remove text from image free, clean watermark AI, picture object remover, AI image cleaner, erase logo from photo, 100% free watermark tool, Ai video Enhancer, Ai image enhancer, Text to image, Text to video, Image to video, Image to text, Google veo, Google Omni, Ai video generator, Unmark-ai",
      },

      /* --- AUTHOR & ADVANCED CRAWLER INSTRUCTIONS (Professional SEO Standards) --- */
      { name: "author", content: "Unmark AI" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

      /* --- SOCIAL MEDIA (OPEN GRAPH) TAGS --- */
      { property: "og:title", content: "Gemini Watermark Remover | Free & No Sign-up" },
      {
        property: "og:description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/" },
      { property: "og:site_name", content: "Unmark AI" },
      /* --- ADDED SOCIAL SHARE IMAGE (For WhatsApp, FB, LinkedIn Previews) --- */
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },

      /* --- TWITTER CARDS (Optimized for maximum social reach) --- */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gemini Watermark Remover | Free & No Sign-up" },
      {
        name: "twitter:description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },
    ],
    links: [
      /* --- EXPLICIT CANONICAL URL FOR HOMEPAGE (FIXES THE CLASH) --- */
      { rel: "canonical", href: "https://www.unmark-ai.com/" }
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <WatermarkRemover />
      </LanguageProvider>
    </ThemeProvider>
  );
}