import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { WatermarkRemover } from "@/components/watermark-remover";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      /* --- HIGHLY OPTIMIZED SEO TITLE (Kept exactly as requested) --- */
      { title: "Unmark - Gemini Watermark Remover | Free & No Sign-up" },

      /* --- POWERFUL DESCRIPTION FOR HIGHER CTR (Kept exactly as requested) --- */
      {
        name: "description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },

      /* --- HIGH-RANKING KEYWORDS --- */
      {
        name: "keywords",
        content:
          "Unmark AI, Gemini watermark remover, Nano Banana remover, free AI watermark eraser, remove logo online, no signup, unlimited",
      },

      /* --- SOCIAL MEDIA (OPEN GRAPH) TAGS --- */
      { property: "og:title", content: "Unmark - Gemini Watermark Remover | Free & No Sign-up" },
      {
        property: "og:description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/" },

      /* --- TWITTER CARDS (Added for maximum social reach) --- */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Unmark - Gemini Watermark Remover | Free & No Sign-up" },
      {
        name: "twitter:description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
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