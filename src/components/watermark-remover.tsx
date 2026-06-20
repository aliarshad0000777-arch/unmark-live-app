import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Sparkles,
  Download,
  Copy,
  FileArchive,
  Plus,
  ArrowRight,
  UploadCloud,
  Loader2,
  Check,
} from "lucide-react";
import { useTheme } from "./theme-provider";
import { inpaintBottomRight, fileToImage } from "@/lib/inpaint";
import { HowItWorks, Features, FAQ, Footer, LanguageSwitcher } from "./landing-sections";
import { useI18n } from "@/lib/i18n";

type ProcessedImage = {
  beforeUrl: string;
  afterUrl: string;
  blob: Blob;
  name: string;
};

export function WatermarkRemover() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const [view, setView] = useState<"before" | "after">("after");
  const [image, setImage] = useState<ProcessedImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup object URLs.

  // Cleanup object URLs.
  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.beforeUrl);
        URL.revokeObjectURL(image.afterUrl);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image?.beforeUrl]);

  const handleFiles = useCallback(async (files: FileList | File[] | null) => {
    if (!files || files.length === 0) return;
    const file = Array.from(files).find((f) => f.type.startsWith("image/"));
    if (!file) {
      setError("Please upload an image file.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const img = await fileToImage(file);
      const result = await inpaintBottomRight(img);
      const beforeUrl = img.src; // already an object URL
      const afterUrl = URL.createObjectURL(result.blob);
      setImage((prev) => {
        if (prev) {
          URL.revokeObjectURL(prev.beforeUrl);
          URL.revokeObjectURL(prev.afterUrl);
        }
        return { beforeUrl, afterUrl, blob: result.blob, name: file.name };
      });
      setView("after");
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : "Processing failed");
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = () => {
    if (image) {
      URL.revokeObjectURL(image.beforeUrl);
      URL.revokeObjectURL(image.afterUrl);
    }
    setImage(null);
    setView("after");
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const triggerPicker = () => fileInputRef.current?.click();

  const handleDownload = () => {
    if (!image) return;
    const a = document.createElement("a");
    a.href = image.afterUrl;
    a.download = "gemini-watermark-removed.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleCopy = async () => {
    if (!image) return;
    try {
      await navigator.clipboard.write([new ClipboardItem({ "image/png": image.blob })]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
      setError("Clipboard access denied by browser.");
    }
  };

  const handleDownloadZip = () => {
    // Single-image ZIP would require a lib; for now just download the PNG.
    handleDownload();
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 transition-colors">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: theme === "dark" ? "#1f2937" : "#cbd5e1",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full blur-[120px] bg-blue-500/10 dark:bg-blue-500/20"
      />

      {/* Navbar */}
      <header className="sticky top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_30px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight">Unmark</span>
            <span className="ml-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t.nav.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.span>
            </button>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-4xl px-4 pt-12 pb-20 sm:pt-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              {t.hero.accent}
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500 dark:text-slate-400">
            {t.hero.subtitle}
          </p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {/* Image / Dropzone container */}
        <div className="relative">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFiles(e.dataTransfer.files);
            }}
            className={`relative overflow-hidden rounded-3xl border bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] transition dark:bg-white/[0.02] dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ${
              dragOver
                ? "border-blue-500 ring-4 ring-blue-500/20"
                : "border-slate-200 dark:border-white/10"
            }`}
          >
            <div className="relative aspect-[16/10] w-full">
              {!image && !loading && (
                <button
                  onClick={triggerPicker}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
                    <UploadCloud className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-medium">
                    {t.dropzone.title}{" "}
                    <span className="text-blue-600 dark:text-blue-400">{t.dropzone.browse}</span>
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">
                    {t.dropzone.hint}
                  </div>
                </button>
              )}

              {loading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-sm dark:bg-black/60">
                  <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.dropzone.loading}
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {image && (
                  <motion.img
                    key={view + image.beforeUrl}
                    src={view === "before" ? image.beforeUrl : image.afterUrl}
                    alt={view}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 h-full w-full object-contain bg-slate-100 dark:bg-black/40"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Floating Before/After toggle */}
          {image && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
              <div className="relative flex items-center rounded-full border border-slate-200 bg-white/80 p-1 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                {(["before", "after"] as const).map((option) => (
                  <button
                    key={option}
                    onClick={() => setView(option)}
                    className="relative z-10 w-24 rounded-full px-4 py-2 text-xs font-medium transition-colors"
                  >
                    <span
                      className={
                        view === option
                          ? "relative z-10 text-white"
                          : "relative z-10 text-slate-600 dark:text-slate-300"
                      }
                    >
                      {option === "before" ? t.toggle.before : t.toggle.after}
                    </span>
                    {view === option && (
                      <motion.span
                        layoutId="pill-active"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-900 to-slate-800 dark:from-blue-500 dark:to-blue-600"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={handleDownload}
            disabled={!image}
            className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-blue-600/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Download className="h-4 w-4" />
            {t.btn.download}
          </button>
          <button
            onClick={handleCopy}
            disabled={!image}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.08]"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            {copied ? t.btn.copied : t.btn.copy}
          </button>
          <button
            onClick={handleDownloadZip}
            disabled={!image}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.08]"
          >
            <FileArchive className="h-4 w-4" />
            {t.btn.zip}
          </button>
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.08]"
          >
            <Plus className="h-4 w-4" />
            {t.btn.addMore}
          </button>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-xs text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            {t.btn.advanced}
            <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </main>

      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}
