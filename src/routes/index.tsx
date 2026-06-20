import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { WatermarkRemover } from "@/components/watermark-remover";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      /* --- HIGHLY OPTIMIZED SEO TITLE --- */
      { title: "Unmark - Gemini Watermark Remover | Free & No Sign-up" },
      
      /* --- POWERFUL DESCRIPTION FOR HIGHER CTR --- */
      {
        name: "description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },
      
      /* --- HIGH-RANKING KEYWORDS --- */
      { 
        name: "keywords", 
        content: "Unmark AI, Gemini watermark remover, Nano Banana remover, free AI watermark eraser, remove logo online, no signup, unlimited" 
      },

      /* --- SOCIAL MEDIA (OPEN GRAPH) TAGS --- */
      { property: "og:title", content: "Unmark - Gemini Watermark Remover (Free & Unlimited)" },
      {
        property: "og:description",
        content: "Instantly remove Gemini watermarks and Nano Banana logos with AI. No registration needed, completely free and unlimited.",
      },
    ],
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