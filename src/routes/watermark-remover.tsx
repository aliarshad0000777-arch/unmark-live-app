"use client";

import { createFileRoute, Link } from '@tanstack/react-router';
import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Sun, Moon, Sparkles, UploadCloud, Loader2, Menu, Video, Film, Download,
  Image as ImageIcon, Wand2, ShieldCheck, Frame, CheckCircle2, AlertTriangle, X, ChevronRight, Copy, Plus, ArrowRight,
  Type, FileText, Clapperboard, PlaySquare, Zap, Lock
} from "lucide-react";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { Footer, LanguageSwitcher } from "@/components/landing-sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ==========================================
// 📢 ADSTERRA AD COMPONENTS (SPA-SAFE & RESPONSIVE)
// ==========================================

function AdBanner728x90() {
  return (
    <div className="flex justify-center items-center w-full min-h-[90px] my-6 overflow-hidden">
      <div className="max-w-full overflow-x-auto rounded-lg custom-scrollbar flex justify-center">
        <iframe
          title="Adsterra 728x90"
          width="728"
          height="90"
          frameBorder="0"
          scrolling="no"
          srcDoc={`<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style></head><body><script type="text/javascript">atOptions = { 'key' : '9b8822b87a33da031aa2351cb92a123d', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };</script><script type="text/javascript" src="//www.highperformanceformat.com/9b8822b87a33da031aa2351cb92a123d/invoke.js"></script></body></html>`}
          className="bg-slate-50/50 dark:bg-white/5"
        />
      </div>
    </div>
  );
}

function AdBanner300x250() {
  return (
    <div className="flex justify-center items-center w-full min-h-[250px] my-10 overflow-hidden">
      <div className="max-w-full overflow-hidden rounded-lg flex justify-center">
        <iframe
          title="Adsterra 300x250"
          width="300"
          height="250"
          frameBorder="0"
          scrolling="no"
          srcDoc={`<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style></head><body><script type="text/javascript">atOptions = { 'key' : '8334e8ec678967ec9dd522989d8d95ea', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };</script><script type="text/javascript" src="//www.highperformanceformat.com/8334e8ec678967ec9dd522989d8d95ea/invoke.js"></script></body></html>`}
          className="bg-slate-50/50 dark:bg-white/5"
        />
      </div>
    </div>
  );
}

function AdNativeBanner() {
  // Native ad component (Optional loading logic here)
  return (
    <div className="w-full flex justify-center items-center mt-8 mb-4 px-4 overflow-hidden">
      <div id="container-b2f92a8142955a57ae630862cf29f00e" className="w-full max-w-4xl min-h-[100px] rounded-xl overflow-hidden shadow-sm" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 🚀 SEO INTERNAL LINKING TABS
// ─────────────────────────────────────────────────────────────
function ToolSwitcher({ current }: { current: 'image' | 'video' | 'text-to-image' | 'text-to-video' }) {
  return (
    <div className="flex justify-center mb-8 relative z-20 w-full overflow-x-auto px-4 py-2 custom-scrollbar">
      <div className="inline-flex items-center flex-nowrap justify-center gap-1 p-1.5 bg-slate-200/50 dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md min-w-max">
        
        <Link to="/" className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${current === 'text-to-video' ? 'bg-white dark:bg-purple-600 text-purple-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Clapperboard className="w-4 h-4" /> Text to Video
          <span className="absolute -top-2 -right-2 flex h-5 items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-1.5 text-[9px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 animate-pulse">New</span>
        </Link>
        <Link to="/text-to-image" className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${current === 'text-to-image' ? 'bg-white dark:bg-pink-600 text-pink-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Type className="w-4 h-4" /> Text to Image
        </Link>
        <Link to="/watermark-remover" className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${current === 'image' ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <ImageIcon className="w-4 h-4" /> Universal Remover
        </Link>
        <Link to="/video-remover" className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${current === 'video' ? 'bg-white dark:bg-emerald-600 text-emerald-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Film className="w-4 h-4" /> Video Remover
        </Link>
        
      </div>
    </div>
  );
}

// ==========================================
// 🌍 MULTI-LANGUAGE DICTIONARY (Universal Updates & SEO Keywords)
// ==========================================
const IMAGE_DICT = {
  en: {
    heroTitle: "Remove every image watermark in",
    heroAccent: "one click",
    heroSub: "The ultimate Universal Image Watermark Remover. Seamlessly erase logos, text, and date stamps. 100% free, unlimited, and no signup required.",
    dropTitle: "Drop Image here or",
    dropBrowse: "browse",
    dropHint: "PNG, JPG, WebP — High Resolution",
    processing: "Auto-Detecting & Cleaning...",
    processingSub: "Our AI is scanning the image to erase every image watermark perfectly.",
    btnProcess: "Auto Clean Image",
    btnCancel: "Cancel",
    btnDownload: "Download Free",
    btnCopy: "Copy",
    btnCopied: "Copied!",
    btnAddMore: "Clean Unlimited Images",
    badgeFree: "FREE & NO SIGNUP",
    menuImage: "Universal Watermark Remover",
    menuVideo: "Video Watermark Remover",
    menuTextToImage: "Text to Image Generator",
    menuTextToVideo: "Text to Video Generator",
    toggleBefore: "Original",
    toggleAfter: "Cleaned",
    hiwTag: "WORKFLOW",
    hiwTitle: "How it works",
    hiwSub: "Three simple steps. Unlimited free usage. Instant clean results.",
    s1Title: "Upload your image",
    s1Desc: "Drop any PNG, JPG, or WebP. No account or signup needed.",
    s2Title: "AI Auto-Detection",
    s2Desc: "Our universal AI engine scans and completely removes every image watermark automatically.",
    s3Title: "Save & Share",
    s3Desc: "Download your crystal-clear image instantly with zero quality loss.",
    featTag: "WHY UNMARK AI",
    featTitle: "Engineered for Universal Cleaning",
    f1Title: "Flawless Auto-Healing",
    f1Desc: "Our algorithm reconstructs background details seamlessly without blurring.",
    f2Title: "Free Unlimited Usage",
    f2Desc: "No subscriptions, no hidden limits, and absolutely no signup required.",
    f3Title: "Lightning Fast",
    f3Desc: "Powered by advanced cloud clusters to process images in seconds.",
    f4Title: "All Image Formats",
    f4Desc: "Works flawlessly with every aspect ratio and high-resolution format.",
    faqTag: "FAQ",
    faqTitle: "Frequently asked questions",
    faq1q: "Is it really free and do I need to sign up?",
    faq1a: "Yes! It is completely free and unlimited. You can remove every image watermark without ever signing up.",
    faq2q: "How does the engine find the watermark automatically?",
    faq2a: "Our universal system uses advanced AI to detect text and logos, then intelligently heals the background.",
    faq3q: "Does it ruin the quality of the image?",
    faq3a: "Absolutely not! We process your files at their original resolution to ensure pixel-perfect results.",
    popupTitle: "New Feature",
    popupDesc: "Try our new AI Video Generator completely free!"
  },
  es: {
    heroTitle: "Elimina cualquier marca de agua en",
    heroAccent: "un clic",
    heroSub: "El Eliminador de Marcas de Agua Universal. Borra logotipos y texto. 100% gratis, ilimitado y sin registro.",
    dropTitle: "Suelta la imagen aquí o",
    dropBrowse: "examina",
    dropHint: "PNG, JPG, WebP — Alta Resolución",
    processing: "Detectando y limpiando...",
    processingSub: "Nuestra IA está eliminando cada marca de agua perfectamente.",
    btnProcess: "Limpieza Automática",
    btnCancel: "Cancelar",
    btnDownload: "Descargar Gratis",
    btnCopy: "Copiar",
    btnCopied: "¡Copiado!",
    btnAddMore: "Procesar Ilimitado",
    badgeFree: "GRATIS Y SIN REGISTRO",
    menuImage: "Eliminador Universal",
    menuVideo: "Eliminador de Video",
    menuTextToImage: "Generador de Texto a Imagen",
    menuTextToVideo: "Generador de Texto a Video",
    toggleBefore: "Original",
    toggleAfter: "Limpia",
    hiwTag: "FLUJO DE TRABAJO",
    hiwTitle: "Cómo funciona",
    hiwSub: "Tres pasos. Calidad perfecta. Uso ilimitado gratis.",
    s1Title: "Sube tu imagen",
    s1Desc: "Suelta cualquier archivo. No se necesita cuenta ni registro.",
    s2Title: "Detección Automática IA",
    s2Desc: "Nuestro motor universal escanea y elimina cada marca de agua automáticamente.",
    s3Title: "Guarda y Comparte",
    s3Desc: "Descarga tu imagen nítida al instante sin perder resolución.",
    featTag: "POR QUÉ ELEGIRNOS",
    featTitle: "Diseñado para la Perfección",
    f1Title: "Restauración Impecable",
    f1Desc: "Nuestro algoritmo reconstruye los detalles sin simplemente difuminarlos.",
    f2Title: "Uso Ilimitado Gratis",
    f2Desc: "Sin muros de pago ocultos y sin necesidad de registro.",
    f3Title: "Velocidad de la luz",
    f3Desc: "Tus imágenes se procesan y limpian en solo unos segundos.",
    f4Title: "Todos los formatos",
    f4Desc: "Funciona perfectamente con todos los formatos de alta resolución.",
    faqTag: "PREGUNTAS",
    faqTitle: "Preguntas frecuentes",
    faq1q: "¿Es realmente gratis y sin registro?",
    faq1a: "¡Sí! Es completamente gratis e ilimitado sin registrarse.",
    faq2q: "¿Cómo encuentra el motor la marca de agua?",
    faq2a: "Utiliza IA de detección universal que escanea texto y logotipos automáticamente.",
    faq3q: "¿Se arruina la calidad de la imagen?",
    faq3a: "¡En absoluto! Procesamos las imágenes en su resolución original.",
    popupTitle: "Nueva Función",
    popupDesc: "¡Prueba nuestro Generador de Video IA gratis!"
  }
};

const getTranslation = (langCode: string | undefined) => {
  const safeLang = (langCode || "en").toLowerCase();
  return { ...IMAGE_DICT["en"], ...(IMAGE_DICT[safeLang as keyof typeof IMAGE_DICT] || {}) };
};

const UPCOMING_TOOLS = [
  { name: "Image to Text", icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Image to Video", icon: PlaySquare, color: "text-sky-500", bg: "bg-sky-500/10" },
  { name: "AI Image Enhancer", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
];

// ==========================================
// 🚀 DEDICATED SEO ROUTE SETUP
// ==========================================
export const Route = createFileRoute('/watermark-remover')({
  head: () => ({
    meta: [
      { title: "Free Universal Image Watermark Remover | Erase Every Image Watermark (No Signup)" },
      { name: "description", content: "Easily remove every image watermark, logos, and text online. 100% free, unlimited, and no signup required. Powered by AI." },
      { name: "keywords", content: "free universal image watermark remover, every image watermark, free unlimited no signup, erase logo online, AI watermark eraser, clean picture, Unmark AI" },
      { name: "author", content: "Unmark AI" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Free Universal Image Watermark Remover | Unmark AI" },
      { property: "og:description", content: "Remove every image watermark instantly. 100% free, unlimited, and no signup required." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/watermark-remover" },
      { property: "og:site_name", content: "Unmark AI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free Universal Image Watermark Remover" },
      { name: "twitter:description", content: "Remove every image watermark instantly. 100% free, unlimited, and no signup required." }
    ],
    links: [
      { rel: "canonical", href: "https://www.unmark-ai.com/watermark-remover" }
    ],
  }),
  component: WatermarkRemoverPageWrapper,
});

function WatermarkRemoverPageWrapper() {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Unmark AI Universal Image Watermark Remover",
    "url": "https://www.unmark-ai.com/watermark-remover",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "description": "Free unlimited tool to remove every image watermark with no signup."
    },
    "description": "Easily remove every image watermark, logos, and text online using advanced auto-detection AI."
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
        <WatermarkRemoverContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function WatermarkRemoverContent() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [dragOver, setDragOver] = useState(false);
  
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');
  
  const [file, setFile] = useState<File | null>(null);
  const [beforeUrl, setBeforeUrl] = useState<string | null>(null);
  const [afterUrl, setAfterUrl] = useState<string | null>(null);
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [view, setView] = useState<"before" | "after">("after");
  
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🚀 MODAL ENDPOINT FOR UNIVERSAL REMOVAL
  const API_URL = "https://ahmedlagend786--unmark-universal-watermark-remover-web-api.modal.run";

  // FIX: Removed the strict `useEffect` that was prematurely revoking object URLs 
  // causing the broken image icon issue on toggle. URL cleanup is now handled in `reset()`.

  const triggerSmartlink = () => {};

  const handleFiles = useCallback((files: FileList | File[] | null) => {
    if (!files || files.length === 0) return;
    const f = Array.from(files).find((f) => f.type.startsWith("image/"));
    if (!f) {
      setError("Please upload a valid image file.");
      return;
    }
    
    // Revoke old URLs before creating a new one to prevent memory leaks safely
    if (beforeUrl) URL.revokeObjectURL(beforeUrl);
    if (afterUrl) URL.revokeObjectURL(afterUrl);

    setError(null);
    setAfterUrl(null);
    setResultBlob(null);
    setFile(f);
    setBeforeUrl(URL.createObjectURL(f));
    setStatus('idle');
    setView('before');
    setUploadProgress(0);
  }, [beforeUrl, afterUrl]);

  const triggerPicker = () => fileInputRef.current?.click();

  const processImage = async () => {
    if (!file || !beforeUrl) return;
    
    setError(null);
    setAfterUrl(null);
    setStatus('processing');
    setUploadProgress(0);

    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const width = img.width;
        const height = img.height;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas error");
        
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(async (compressedBlob) => {
          if (!compressedBlob) throw new Error("Compression failed");

          const formData = new FormData();
          formData.append("image", compressedBlob, "upload.jpg");

          try {
            const response = await axios.post(
              API_URL, 
              formData,
              {
                responseType: 'blob',
                onUploadProgress: (progressEvent) => {
                  if (progressEvent.total) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                  }
                },
              }
            );

            const cleanedBlob = response.data;
            setResultBlob(cleanedBlob);
            setAfterUrl(URL.createObjectURL(cleanedBlob));
            
            setStatus('done');
            setView("after");
            setUploadProgress(100);

          } catch (e: any) {
            console.error("Backend Error:", e);
            let errorMessage = "Network or Server error.";
            
            if (e.response && e.response.data instanceof Blob) {
               errorMessage = await e.response.data.text();
               try {
                 const parsed = JSON.parse(errorMessage);
                 if (parsed.error) errorMessage = parsed.error;
               } catch (jsonErr) {}
            } else if (e.message) {
               errorMessage = e.message;
            }

            setError(errorMessage);
            setStatus('error');
          }
        }, "image/jpeg", 0.85);

      } catch (e) {
        console.error(e);
        setError("Failed to process image locally.");
        setStatus('error');
      }
    };

    img.onerror = () => {
      setError("Failed to load image.");
      setStatus('error');
    };

    img.src = beforeUrl;
  };

  const reset = () => {
    triggerSmartlink(); 
    // Secure URL cleanup
    if (beforeUrl) URL.revokeObjectURL(beforeUrl);
    if (afterUrl) URL.revokeObjectURL(afterUrl);
    
    setFile(null);
    setBeforeUrl(null);
    setAfterUrl(null);
    setResultBlob(null);
    setView("after");
    setError(null);
    setStatus('idle');
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDownload = async () => {
    if (!afterUrl || isDownloading) return;
    
    try {
      setIsDownloading(true);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = afterUrl;
      a.download = `unmark-universal-${Date.now()}.jpg`;
      document.body.appendChild(a);
      a.click();
      
      setTimeout(() => {
        a.remove();
      }, 2000);
      
    } catch (error) {
      window.open(afterUrl, "_blank");
    } finally {
      setIsDownloading(false);
      triggerSmartlink(); 
    }
  };

  const handleCopy = async () => {
    triggerSmartlink(); 
    if (!resultBlob) return;
    try {
      await navigator.clipboard.write([new ClipboardItem({ [resultBlob.type]: resultBlob })]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
      setError("Clipboard access denied by browser.");
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 transition-colors overflow-x-hidden">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: theme === "dark" ? "#1f2937" : "#cbd5e1",
          maskImage: "radial-gradient(ellipse at top center, black 40%, transparent 80%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full blur-[150px] bg-blue-500/10 dark:bg-blue-600/20" />

      {/* PROMO POPUP */}
      <AnimatePresence>
        {showPromo && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 25, delay: 1.5 }} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] max-w-sm w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)]">
            <div className="relative overflow-hidden rounded-2xl bg-white p-4 sm:p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 dark:bg-[#111] dark:border-white/10 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              <button onClick={() => setShowPromo(false)} className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-400 transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-start gap-4 pr-6">
                <div className="flex shrink-0 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                  <Clapperboard className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">{vt.popupTitle}</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mb-3">{vt.popupDesc}</p>
                  <Link to="/" className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors w-fit">
                    Try it now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚀 HAMBURGER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] dark:bg-black/60" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl z-[70] shadow-2xl border-r border-slate-200 dark:border-white/10 flex flex-col">
              <div className="flex shrink-0 items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30"><Sparkles className="h-4 w-4" /></div>
                  <span className="text-lg font-bold tracking-tight">Unmark <span className="text-blue-600 dark:text-blue-500">AI</span></span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition"><X className="w-5 h-5 text-slate-500 dark:text-slate-400" /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <span className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Our Free Tools</span>
                <div className="flex flex-col gap-2">
                  
                  {/* 1. Text to Video */}
                  <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400"><Clapperboard className="h-4 w-4" /></div>{vt.menuTextToVideo}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* 2. Text to Image */}
                  <Link to="/text-to-image" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400"><Type className="h-4 w-4" /></div>{vt.menuTextToImage}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-pink-500 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* 3. Image Remover (Active) */}
                  <Link to="/watermark-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-blue-700 dark:text-blue-400">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400"><ImageIcon className="h-4 w-4" /></div>{vt.menuImage}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  </Link>

                  {/* 4. Video Remover */}
                  <Link to="/video-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><Film className="h-4 w-4" /></div>{vt.menuVideo}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-between px-3 mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coming Soon</span>
                    <span className="flex h-5 items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 text-[9px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Future Tools</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {UPCOMING_TOOLS.map((tool) => (
                      <div key={tool.name} className="group flex items-center justify-between p-3 rounded-xl opacity-60 cursor-not-allowed hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-md ${tool.bg} ${tool.color}`}><tool.icon className="h-4 w-4" /></div>{tool.name}
                        </div>
                        <Lock className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Engineered for privacy and speed
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <header className="sticky top-2 sm:top-4 z-40 px-2 sm:px-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl sm:rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={() => setMenuOpen(true)} className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
              <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 dark:text-slate-200" />
            </button>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30"><Sparkles className="h-3 w-3 sm:h-4 sm:w-4" /></div>
              <span className="text-sm sm:text-base font-bold tracking-tight">Unmark <span className="text-blue-600 dark:text-blue-500">Universal</span></span>
              <span className="hidden sm:inline-flex ml-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{vt.badgeFree}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-white/10 mx-1" />
            <button onClick={toggleTheme} className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
              <motion.span key={theme} initial={{ rotate: -90, opacity: 0, scale: 0.6 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} className="flex">
                {theme === "dark" ? <Sun className="h-4 w-4 text-slate-200" /> : <Moon className="h-4 w-4 text-slate-700" />}
              </motion.span>
            </button>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 pt-8 pb-20 sm:pt-20 sm:pb-24">
        
        <AdBanner728x90 />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-400 mb-4 sm:mb-6 shadow-sm">
            <ImageIcon className="w-3.5 h-3.5" /> High-Fidelity Universal Processing
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            {vt.heroTitle} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent">{vt.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-lg px-2">
            {vt.heroSub}
          </p>
        </motion.div>

        {/* 🚀 TAB SWITCHER 🚀 */}
        <ToolSwitcher current="image" />

        {/* UPLOAD / RESULT SECTION */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative mx-auto max-w-4xl mt-4">
          
          <AdNativeBanner />

          <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFiles([f]);
          }} />

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/60 bg-white/50 p-2 sm:p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111]/50 mt-4 sm:mt-6">
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl border bg-white shadow-sm transition-all duration-300 dark:bg-[#0a0a0a] ${
                dragOver ? "border-blue-500 ring-4 ring-blue-500/20 shadow-blue-500/20" : "border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
              }`}
            >
              <div className="relative w-full flex flex-col items-center justify-center bg-slate-50/50 dark:bg-white/[0.02] p-4 sm:p-6 min-h-[250px] sm:min-h-[450px]">
                
                {(!file) && (
                  <button onClick={triggerPicker} className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white group">
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#111] group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <ImageIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                    </div>
                    <div className="text-sm sm:text-lg font-semibold">{vt.dropTitle} <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">{vt.dropBrowse}</span></div>
                    <div className="text-[10px] sm:text-sm flex items-center gap-1.5 sm:gap-2 text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-3 sm:px-4 py-1.5 rounded-full">
                      <Wand2 className="h-3 w-3 sm:h-4 sm:w-4" /> {vt.dropHint}
                    </div>
                  </button>
                )}

                {/* LIVE PROGRESS BAR */}
                {status === 'processing' && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 bg-white/95 backdrop-blur-md dark:bg-[#0a0a0a]/95 px-4 sm:px-8">
                    <div className="relative flex items-center justify-center mb-1 sm:mb-2">
                      <div className="absolute w-12 h-12 sm:w-20 sm:h-20 border-4 border-blue-500/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                      <Loader2 className="h-6 w-6 sm:h-10 sm:w-10 animate-spin text-blue-500 relative z-10" />
                    </div>
                    
                    <div className="w-full max-w-[200px] sm:max-w-[300px]">
                      <div className="flex justify-between text-[10px] sm:text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 sm:mb-3">
                        <span>{vt.processing}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-extrabold">{uploadProgress}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-1.5 sm:h-3 mb-2 sm:mb-3 overflow-hidden shadow-inner">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-300 relative flex items-center justify-end pr-1"
                          style={{ width: `${uploadProgress}%` }}
                        >
                          <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_1.5s_infinite]" style={{ backgroundSize: '200% 100%' }}></div>
                        </div>
                      </div>
                      
                      <p className="text-[9px] sm:text-xs text-center text-slate-500 dark:text-slate-400 font-medium leading-tight">
                        {vt.processingSub}
                      </p>
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {beforeUrl && !afterUrl && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center py-2 sm:py-4">
                      {/* FIXED RESPONSIVE IMAGE DISPLAY */}
                      <img src={beforeUrl} alt="Uploaded Original Image" className="max-h-[40vh] sm:max-h-[500px] w-auto max-w-full rounded-lg sm:rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 object-contain" />
                    </motion.div>
                  )}
                  
                  {afterUrl && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full flex flex-col items-center justify-center py-2 sm:py-4 relative">
                      <div className="absolute top-2 left-2 sm:top-6 sm:left-6 z-20 flex items-center gap-1 sm:gap-2 bg-blue-500/10 backdrop-blur-md text-blue-700 dark:text-blue-400 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-xl border border-blue-500/20 text-[10px] sm:text-sm font-bold shadow-lg shadow-blue-500/10">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" /> {vt.toggleAfter}
                      </div>
                      
                      <div className="absolute top-2 right-2 sm:top-6 sm:right-6 z-20">
                        <div className="inline-flex rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-md p-0.5 sm:p-1 border border-slate-200/50 dark:bg-black/60 dark:border-white/10 shadow-sm">
                          <button onClick={() => setView("before")} className={`rounded-md sm:rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-sm font-semibold transition-all ${view === "before" ? 'bg-white text-slate-900 shadow-sm dark:bg-[#222] dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>{vt.toggleBefore}</button>
                          <button onClick={() => setView("after")} className={`rounded-md sm:rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-sm font-semibold transition-all ${view === "after" ? 'bg-white text-blue-600 shadow-sm dark:bg-[#222] dark:text-blue-400' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>{vt.toggleAfter}</button>
                        </div>
                      </div>

                      {/* FIXED RESPONSIVE IMAGE DISPLAY WITH DYNAMIC SRC FIX */}
                      <img src={view === "before" ? (beforeUrl || "") : (afterUrl || "")} alt={view === "before" ? "Original Image" : "Processed Universal Result"} className="max-h-[40vh] sm:max-h-[500px] w-auto max-w-full rounded-lg sm:rounded-2xl shadow-xl border border-blue-500/30 object-contain" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 sm:mt-6 flex flex-col items-start gap-1.5 sm:gap-2 w-full rounded-xl sm:rounded-2xl border border-red-500/30 bg-red-500/10 px-3 py-2.5 sm:px-5 sm:py-4 text-[10px] sm:text-sm text-red-700 dark:text-red-400 shadow-sm">
                <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-base">
                  <AlertTriangle className="h-3.5 w-3.5 sm:h-5 sm:w-5 shrink-0" /> Processing Interrupted
                </div>
                <span className="opacity-90 leading-relaxed">{error}</span>
              </motion.div>
            )}

            {/* Action Panel */}
            {file && !afterUrl && status !== 'processing' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 sm:mt-8 flex flex-col items-center gap-3 sm:gap-6 px-1 sm:px-0">
                <div className="flex w-full flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                  <button
                    onClick={processImage}
                    className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 sm:px-10 sm:py-4 text-xs sm:text-base font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:shadow-blue-600/40 active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Wand2 className="h-3.5 w-3.5 sm:h-5 sm:w-5" /> {vt.btnProcess}
                  </button>
                  <button
                    onClick={reset}
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl border-2 border-slate-200 bg-white px-5 py-3 sm:px-10 sm:py-4 text-xs sm:text-base font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {vt.btnCancel}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Download Panel */}
            {afterUrl && status !== 'processing' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-1 sm:px-0">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-blue-600 px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:scale-[1.02] hover:bg-blue-500 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {isDownloading ? <Loader2 className="h-3.5 w-3.5 sm:h-5 sm:w-5 animate-spin" /> : <Download className="h-3.5 w-3.5 sm:h-5 sm:w-5" />} 
                  {isDownloading ? "Downloading..." : vt.btnDownload}
                </button>
                <div className="flex w-full sm:w-auto gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex flex-1 sm:flex-none sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl border-2 border-slate-200 bg-white px-3 py-3 sm:px-8 sm:py-4 text-xs sm:text-base font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {copied ? <CheckCircle2 className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 sm:h-5 sm:w-5" />}
                    {copied ? vt.btnCopied : vt.btnCopy}
                  </button>
                  <button
                    onClick={reset}
                    className="flex flex-1 sm:flex-none sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-slate-100 px-3 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-base font-bold text-slate-700 transition hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20"
                  >
                    <Plus className="h-3.5 w-3.5 sm:h-5 sm:w-5" /> {vt.btnAddMore}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Banner Ad Below Tool */}
          <div className="mt-6 sm:mt-8 flex justify-center overflow-hidden">
             <AdBanner300x250 />
          </div>
        </motion.div>

        <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
          <AdBanner728x90 />
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-10 sm:mt-16 border-t border-slate-200/50 pt-12 sm:pt-24 dark:border-white/5">
          <div className="mb-8 sm:mb-16 text-center">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.hiwTag}</span>
            <h2 className="mt-2 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{vt.hiwTitle}</h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-slate-600 dark:text-slate-400 px-4">{vt.hiwSub}</p>
          </div>
          <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-3">
            {[
              { icon: UploadCloud, title: vt.s1Title, desc: vt.s1Desc },
              { icon: Wand2, title: vt.s2Title, desc: vt.s2Desc },
              { icon: Download, title: vt.s3Title, desc: vt.s3Desc },
            ].map((step, i) => (
              <div key={i} className="relative rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm dark:border-white/10 dark:bg-[#111]">
                <div className="mb-3 sm:mb-6 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"><step.icon className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                <h3 className="mb-1.5 sm:mb-3 text-sm sm:text-lg font-bold">{step.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-16 sm:mt-32 rounded-2xl sm:rounded-3xl bg-slate-900 px-4 py-12 sm:px-16 sm:py-24 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at center, #3b82f6 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-400">{vt.featTag}</span>
            <h2 className="mt-2 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">{vt.featTitle}</h2>
            <div className="mt-8 sm:mt-16 grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 text-left">
              {[
                { icon: Frame, title: vt.f1Title, desc: vt.f1Desc },
                { icon: Zap, title: vt.f2Title, desc: vt.f2Desc },
                { icon: ShieldCheck, title: vt.f3Title, desc: vt.f3Desc },
                { icon: ImageIcon, title: vt.f4Title, desc: vt.f4Desc },
              ].map((feat, i) => (
                <div key={i} className="flex flex-row gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10 backdrop-blur-sm">
                  <div className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400"><feat.icon className="h-4 w-4 sm:h-6 sm:w-6" /></div>
                  <div>
                    <h3 className="mb-1 sm:mb-2 text-sm sm:text-lg font-bold text-white">{feat.title}</h3>
                    <p className="text-[10px] sm:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO ARTICLE */}
        <section className="relative mx-auto max-w-4xl px-2 sm:px-4 mt-16 sm:mt-32 text-slate-600 dark:text-slate-400">
          <div className="prose prose-sm sm:prose-base prose-slate dark:prose-invert max-w-none text-center sm:text-left">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Free Universal Image Watermark Remover Online (No Signup)</h2>
            <p className="mb-4 sm:mb-6 text-xs sm:text-base leading-relaxed">
              Welcome to Unmark AI, your premier destination for completely free, unlimited AI image cleaning. Whether you are dealing with intrusive logos, unwanted text, date stamps, or the classic stock overlay, our advanced <strong>Universal Image Watermark Remover</strong> is specifically engineered to erase <strong>every image watermark</strong> with a single click. Enjoy a flawless experience that is <strong>100% free, unlimited, and requires absolutely no signup.</strong>
            </p>
            <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 mt-6 sm:mt-8">Remove Every Image Watermark without Quality Loss</h3>
            <p className="text-xs sm:text-base leading-relaxed">
              Unlike generic eraser tools that simply blur the image, our specialized cloud inpainting engine uses state-of-the-art auto-detection to universally locate text and logos, then intelligently reconstructs the background pixels. Your privacy is our priority. Clean <strong>unlimited</strong> images instantly today without creating an account.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <div className="mx-auto mt-16 sm:mt-32 max-w-3xl">
          <div className="mb-6 sm:mb-12 text-center">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.faqTag}</span>
            <h2 className="mt-2 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{vt.faqTitle}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full rounded-xl sm:rounded-2xl border border-slate-200 bg-white px-3 sm:px-6 py-2 shadow-sm dark:border-white/10 dark:bg-[#111]">
            {[
              { q: vt.faq1q, a: vt.faq1a, val: "item-1" },
              { q: vt.faq2q, a: vt.faq2a, val: "item-2" },
              { q: vt.faq3q, a: vt.faq3a, val: "item-3" },
            ].map((faq) => (
              <AccordionItem key={faq.val} value={faq.val} className="border-b-slate-100 dark:border-b-white/5 last:border-0">
                <AccordionTrigger className="text-left text-xs sm:text-base font-semibold hover:no-underline py-3 sm:py-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-3 sm:pb-6 leading-relaxed text-[10px] sm:text-sm">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </main>
      <Footer />
    </div>
  );
}