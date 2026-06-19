import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { WatermarkRemover } from "@/components/watermark-remover";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unmark — AI Watermark Remover" },
      {
        name: "description",
        content:
          "Remove watermarks from images in one click with AI. Fast, free, pixel-perfect cleanup.",
      },
      { property: "og:title", content: "Unmark — AI Watermark Remover" },
      {
        property: "og:description",
        content: "AI-powered watermark removal that preserves every detail.",
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
