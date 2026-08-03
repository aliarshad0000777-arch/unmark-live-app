"use client";

import { createFileRoute, Link } from '@tanstack/react-router';
import { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Sun, Moon, Sparkles, UploadCloud, Loader2, Menu, Video, Film, Download,
  Image as ImageIcon, Wand2, ShieldCheck, Gauge, Frame, CheckCircle2, AlertTriangle, X, ChevronRight, Copy, FileArchive, Plus, ArrowRight,
  Type, FileText, Clapperboard, PlaySquare, Zap, Lock
} from "lucide-react";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { Footer, LanguageSwitcher } from "@/components/landing-sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ==========================================
// 📢 ADSTERRA AD COMPONENTS (FULLY OPTIMIZED)
// ==========================================

// 1. 728x90 Banner - Made fully responsive for Mobile & Laptop
function AdBanner728x90() {
  return (
    <div className="flex justify-center items-center w-full min-h-[90px] my-6 overflow-hidden">
      <div className="max-w-full overflow-x-auto rounded-lg custom-scrollbar">
        <iframe
          title="Adsterra 728x90"
          width="728"
          height="90"
          frameBorder="0"
          scrolling="no"
          srcDoc={`
            <!DOCTYPE html>
            <html>
              <head>
                <style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style>
              </head>
              <body>
                <script type="text/javascript">
                  atOptions = {
                    'key' : '9b8822b87a33da031aa2351cb92a123d',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                  };
                </script>
                <script type="text/javascript" src="//www.highperformanceformat.com/9b8822b87a33da031aa2351cb92a123d/invoke.js"></script>
              </body>
            </html>
          `}
          className="bg-slate-50/50 dark:bg-white/5"
        />
      </div>
    </div>
  );
}

// 2. 300x250 Banner
function AdBanner300x250() {
  return (
    <div className="flex justify-center items-center w-full min-h-[250px] my-10 overflow-hidden">
      <div className="max-w-full overflow-hidden rounded-lg">
        <iframe
          title="Adsterra 300x250"
          width="300"
          height="250"
          frameBorder="0"
          scrolling="no"
          srcDoc={`
            <!DOCTYPE html>
            <html>
              <head>
                <style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style>
              </head>
              <body>
                <script type="text/javascript">
                  atOptions = {
                    'key' : '8334e8ec678967ec9dd522989d8d95ea',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                  };
                </script>
                <script type="text/javascript" src="//www.highperformanceformat.com/8334e8ec678967ec9dd522989d8d95ea/invoke.js"></script>
              </body>
            </html>
          `}
          className="bg-slate-50/50 dark:bg-white/5"
        />
      </div>
    </div>
  );
}

// 3. Native Banner (Perfect position above the tool)
function AdNativeBanner() {
  useEffect(() => {
    if (!document.getElementById("adsterra-native")) {
      const script = document.createElement("script");
      script.id = "adsterra-native";
      script.async = true;
      script.dataset.cfasync = "false";
      script.src = "//pl30342541.effectivecpmnetwork.com/b2f92a8142955a57ae630862cf29f00e/invoke.js";
      document.body.appendChild(script);
    }
  }, []);
  return (
    <div className="w-full flex justify-center items-center mt-8 mb-4 px-4 overflow-hidden">
      <div id="container-b2f92a8142955a57ae630862cf29f00e" className="w-full max-w-4xl min-h-[100px] rounded-xl overflow-hidden shadow-sm" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 🚀 SEO INTERNAL LINKING TABS (Tool Switcher)
// ─────────────────────────────────────────────────────────────
function ToolSwitcher({ current }: { current: 'image' | 'video' | 'text-to-image' }) {
  return (
    <div className="flex justify-center mb-8 relative z-20">
      <div className="inline-flex items-center flex-wrap justify-center gap-1 p-1.5 bg-slate-200/50 dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md">
        
        {/* Image Tool Link */}
        <Link
          to="/"
          className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
            current === 'image'
              ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
          }`}
        >
          <ImageIcon className="w-4 h-4" /> Image
        </Link>

        {/* Video Tool Link */}
        <Link
          to="/video-remover"
          className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
            current === 'video'
              ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
          }`}
        >
          <Film className="w-4 h-4" /> Video
        </Link>

        {/* Text-to-Image Tool Link */}
        <Link
          to="/text-to-image"
          className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
            current === 'text-to-image'
              ? 'bg-white dark:bg-pink-600 text-pink-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
          }`}
        >
          <Type className="w-4 h-4" /> Text to Image
          <span className="absolute -top-2 -right-2 flex h-5 items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-1.5 text-[9px] font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400 animate-pulse">
            New
          </span>
        </Link>
        
      </div>
    </div>
  );
}

// ==========================================
// 🌍 MULTI-LANGUAGE DICTIONARY
// ==========================================
const IMAGE_DICT = {
  en: {
    heroTitle: "Remove Gemini watermarks in",
    heroAccent: "one click",
    heroSub: "Professional-grade AI engine calibrated to seamlessly erase the Google Gemini star watermark. 100% private & processed directly in your browser.",
    dropTitle: "Drop Gemini Image here or",
    dropBrowse: "browse",
    dropHint: "PNG, JPG, WebP — High Resolution",
    processing: "Image Processing Please Wait",
    processingSub: "Image processing time depends on file size and network speed.",
    btnDownload: "Download Image",
    btnCopy: "Copy to Clipboard",
    btnCopied: "Copied!",
    btnZip: "Save as ZIP",
    btnAddMore: "Process Another",
    badgeFree: "100% FREE",
    menuImage: "Image Watermark Remover",
    menuVideo: "Video Watermark Remover",
    menuTextToImage: "Text to Image Generator",
    toggleBefore: "Original",
    toggleAfter: "Cleaned",
    hiwTag: "WORKFLOW",
    hiwTitle: "How it works",
    hiwSub: "Three steps. Pixel-perfect quality. Instant results.",
    s1Title: "Upload your image",
    s1Desc: "Drop a PNG, JPG, or WebP generated by Gemini. High-resolution textures are fully supported.",
    s2Title: "AI Inpainting Engine",
    s2Desc: "Our smart browser-based engine magically reconstructs the pixels hidden behind the Gemini star.",
    s3Title: "Save & Share",
    s3Desc: "Download your crystal-clear, watermark-free image instantly with zero quality degradation.",
    featTag: "WHY UNMARK AI",
    featTitle: "Engineered for Gemini Content",
    f1Title: "Flawless Pixel Refinement",
    f1Desc: "Our advanced algorithm doesn't just blur the corner; it intelligently reconstructs the authentic background details.",
    f2Title: "Completely Free",
    f2Desc: "No hidden subscription paywalls, no limits, no signup required. Enterprise power, completely free.",
    f3Title: "Absolute Privacy",
    f3Desc: "Your creative assets are processed entirely locally inside your browser cache. They never hit any external server.",
    f4Title: "All Image Formats",
    f4Desc: "Works seamlessly with vertical, square, and widescreen formats generated by modern AI structures.",
    faqTag: "FAQ",
    faqTitle: "Frequently asked questions",
    faq1q: "Is it really free?",
    faq1a: "Yes! We believe in open-access tools for creators. You can clean as many Gemini images as you want without paying a single cent.",
    faq2q: "How does the engine remove the star logo?",
    faq2a: "The tool utilizes a highly optimized browser-based local inpainting script that isolates the exact coordinates of the bottom-right star and heals the canvas.",
    faq3q: "Are my personal images safe?",
    faq3a: "Absolutely! Image inpainting is executed 100% locally on your machine's hardware via the browser client. Your data stays securely on your device.",
    popupTitle: "New Feature",
    popupDesc: "Try our new AI Video Watermark Remover for free!"
  },
  es: {
    heroTitle: "Elimina marcas de Gemini en",
    heroAccent: "un clic",
    heroSub: "Motor de IA profesional calibrado para borrar la marca de agua de la estrella de Google Gemini. 100% privado y procesado localmente.",
    dropTitle: "Suelta la imagen de Gemini aquí o",
    dropBrowse: "examina",
    dropHint: "PNG, JPG, WebP — Alta Resolución",
    processing: "Procesando imagen, por favor espere",
    processingSub: "El tiempo de procesamiento depende del tamaño del archivo y la velocidad de la red.",
    btnDownload: "Descargar Imagen",
    btnCopy: "Copiar al Portapapeles",
    btnCopied: "¡Copiado!",
    btnZip: "Guardar como ZIP",
    btnAddMore: "Procesar Otra",
    badgeFree: "100% GRATIS",
    menuImage: "Eliminador (Imagen)",
    menuVideo: "Eliminador (Video)",
    menuTextToImage: "Generador de Texto a Imagen",
    toggleBefore: "Original",
    toggleAfter: "Limpia",
    hiwTag: "FLUJO DE TRABAJO",
    hiwTitle: "Cómo funciona",
    hiwSub: "Tres pasos. Calidad perfecta de píxeles. Resultados instantáneos.",
    s1Title: "Sube tu imagen",
    s1Desc: "Suelta un archivo PNG, JPG o WebP de Gemini. Soporta texturas de alta resolución.",
    s2Title: "Motor de Inpainting IA",
    s2Desc: "Nuestro motor inteligente reconstruye mágicamente los píxeles ocultos detrás de la estrella.",
    s3Title: "Guarda y Comparte",
    s3Desc: "Descarga tu imagen nítida al instante sin perder resolución ni detalles.",
    featTag: "POR QUÉ ELEGIRNOS",
    featTitle: "Diseñado para Contenido Gemini",
    f1Title: "Inpainting Impecable",
    f1Desc: "Nuestro algoritmo no solo difumina la esquina, reconstruye de forma inteligente los detalles del fondo.",
    f2Title: "Completamente Gratis",
    f2Desc: "Sin muros de pago ocultos, sin límites engañosos y sin registro obligatorio.",
    f3Title: "Privacidad Absoluta",
    f3Desc: "Tus imágenes se procesan localmente en el navegador. Nunca se cargan en ningún servidor.",
    f4Title: "Todos los formatos",
    f4Desc: "Funciona perfectamente con formatos verticales, cuadrados y panorámicos.",
    faqTag: "PREGUNTAS",
    faqTitle: "Preguntas frecuentes",
    faq1q: "¿Es realmente gratis?",
    faq1a: "¡Sí! Creemos en las herramientas accesibles. Puedes procesar imágenes ilimitadas sin costo alguno.",
    faq2q: "¿Cómo elimina la estrella de agua?",
    faq2a: "Utiliza un script de inpainting local optimizado que aísla las coordenadas de la esquina inferior derecha.",
    faq3q: "¿Están seguras mis imágenes?",
    faq3a: "¡Por supuesto! El procesamiento ocurre al 100% en tu máquina. Tus datos permanecen privados.",
    popupTitle: "Nueva Función",
    popupDesc: "¡Prueba nuestro nuevo Eliminador de Marcas de Video con IA gratis!"
  },
  fr: {
    heroTitle: "Supprimez les filigranes Gemini en",
    heroAccent: "un clic",
    heroSub: "Moteur d'IA professionnel calibré pour effacer le filigrane de l'étoile Google Gemini. 100% privé et exécuté localement.",
    dropTitle: "Déposez l'image Gemini ici ou",
    dropBrowse: "parcourir",
    dropHint: "PNG, JPG, WebP — Haute Résolution",
    processing: "Traitement de l'image, veuillez patienter",
    processingSub: "Le temps de traitement dépend de la taille du fichier et de la vitesse du réseau.",
    btnDownload: "Télécharger l'image",
    btnCopy: "Copier",
    btnCopied: "Copié !",
    btnZip: "Enregistrer en ZIP",
    btnAddMore: "Traiter une autre",
    badgeFree: "100% GRATUIT",
    menuImage: "Suppresseur (Image)",
    menuVideo: "Suppresseur (Vidéo)",
    menuTextToImage: "Générateur de Texte en Image",
    toggleBefore: "Originale",
    toggleAfter: "Nettoyée",
    hiwTag: "FLUX DE TRAVAIL",
    hiwTitle: "Comment ça marche",
    hiwSub: "Trois étapes. Pixel-perfection. Résultats instantanés.",
    s1Title: "Téléchargez votre image",
    s1Desc: "Déposez un fichier Gemini PNG, JPG ou WebP. Haute résolution supportée.",
    s2Title: "Moteur d'Inpainting IA",
    s2Desc: "Notre script reconstruit intelligemment les pixels masqués sous l'étoile.",
    s3Title: "Sauvegardez",
    s3Desc: "Téléchargez votre image claire instantanément sans perte de qualité.",
    featTag: "POURQUOI NOUS CHOISIR",
    featTitle: "Conçu pour le contenu Gemini",
    f1Title: "Inpainting Parfait",
    f1Desc: "Notre système ne floute pas seulement le coin, il recrée intelligemment l'arrière-plan.",
    f2Title: "Totalement Gratuit",
    f2Desc: "Pas d'abonnement caché, pas de limites, aucune inscription requise.",
    f3Title: "Confidentialité Absolue",
    f3Desc: "Vos fichiers sont traités localement et ne quittent jamais votre navigateur.",
    f4Title: "Tous les formats",
    f4Desc: "Compatible avec tous les formats générés par les outils d'IA modernes.",
    faqTag: "FAQ",
    faqTitle: "Questions fréquentes",
    faq1q: "Est-ce vraiment gratuit ?",
    faq1a: "Oui ! Vous pouvez traiter autant d'images que vous le souhaitez, gratuitement.",
    faq2q: "Comment supprime-t-il le filigrane ?",
    faq2a: "Nous utilisons un algorithme d'inpainting intelligent pour reconstruire l'image.",
    faq3q: "Mes images sont-elles envoyées sur un serveur ?",
    faq3a: "Non ! Le traitement est 100% local dans votre navigateur.",
    popupTitle: "Nouvelle Fonctionnalité",
    popupDesc: "Essayez notre nouveau suppresseur de filigrane vidéo IA gratuitement !"
  }
};

const getTranslation = (langCode: string | undefined) => {
  const safeLang = (langCode || "en").toLowerCase();
  return { ...IMAGE_DICT["en"], ...(IMAGE_DICT[safeLang as keyof typeof IMAGE_DICT] || {}) };
};

type ProcessedImage = {
  beforeUrl: string;
  afterUrl: string;
  blob: Blob;
  name: string;
};

// Removed Text to Image from upcoming since it's active now
const UPCOMING_TOOLS = [
  { name: "Image to Text", icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Text to Video", icon: Clapperboard, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Image to Video", icon: PlaySquare, color: "text-sky-500", bg: "bg-sky-500/10" },
  { name: "AI Image Enhancer", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "AI Video Enhancer", icon: Wand2, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
];

export function WatermarkRemover() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <WatermarkRemoverPage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function WatermarkRemoverPage() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  
  const [view, setView] = useState<"before" | "after">("after");
  const [image, setImage] = useState<ProcessedImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [dragOver, setDragOver] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.beforeUrl);
        URL.revokeObjectURL(image.afterUrl);
      }
    };
  }, [image?.beforeUrl]);

  // ==========================================
  // 🚀 ADSTERRA SMARTLINK TEMPORARILY DISABLED FOR BETTER UX 
  // ==========================================
  const triggerSmartlink = () => {
    /*
    if (typeof window !== "undefined") {
      window.open("https://www.effectivecpmnetwork.com/wxpd3qmr1?key=2e44c931ff39db8328abbdb5a0862867", "_blank", "noopener,noreferrer");
    }
    */
  };

  const handleFiles = useCallback((files: FileList | File[] | null) => {
    if (!files || files.length === 0) return;
    const file = Array.from(files).find((f) => f.type.startsWith("image/"));
    if (!file) {
      setError("Please upload a valid image file.");
      return;
    }
    setError(null);
    setLoading(true);
    setUploadProgress(0);

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

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
          formData.append("watermark", "gemini");
          formData.append("width", width.toString());
          formData.append("height", height.toString());

          const API_URL = "https://tilioi-unmark-ai-engine.hf.space/process-image";

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
            const beforeUrl = URL.createObjectURL(file); 
            const afterUrl = URL.createObjectURL(cleanedBlob);

            setImage((prev) => {
              if (prev) {
                URL.revokeObjectURL(prev.beforeUrl);
                URL.revokeObjectURL(prev.afterUrl);
              }
             return { beforeUrl, afterUrl, blob: cleanedBlob, name: file.name };
            });
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
               } catch (jsonErr) {
                 // Fallback to text
               }
            } else if (e.message) {
               errorMessage = e.message;
            }

            setError(errorMessage);
          } finally {
            setLoading(false);
          }
        }, "image/jpeg", 0.85);

      } catch (e) {
        console.error(e);
        setError("Failed to process image locally.");
        setLoading(false);
      }
    };

    img.onerror = () => {
      setError("Failed to load image.");
      setLoading(false);
    };

    img.src = objectUrl;
  }, []);

  const reset = () => {
    triggerSmartlink(); // Function is disabled, safe to leave
    if (image) {
      URL.revokeObjectURL(image.beforeUrl);
      URL.revokeObjectURL(image.afterUrl);
    }
    setImage(null);
    setView("after");
    setError(null);
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const triggerPicker = () => fileInputRef.current?.click();

  const handleDownload = () => {
    triggerSmartlink(); // Function is disabled, safe to leave
    if (!image) return;
    const a = document.createElement("a");
    a.href = image.afterUrl;
    a.download = "unmark-gemini-clean.jpg";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleCopy = async () => {
    triggerSmartlink(); // Function is disabled, safe to leave
    if (!image) return;
    try {
      await navigator.clipboard.write([new ClipboardItem({ [image.blob.type]: image.blob })]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
      setError("Clipboard access denied by browser.");
    }
  };

  const handleDownloadZip = () => {
    triggerSmartlink(); // Function is disabled, safe to leave
    handleDownload(); // Falls back to standard download
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

      <AnimatePresence>
        {showPromo && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 25, delay: 1.5 }} className="fixed bottom-6 right-6 z-[100] max-w-sm w-[calc(100%-3rem)]">
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 dark:bg-[#111] dark:border-white/10 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              <button onClick={() => setShowPromo(false)} className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-400 transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-start gap-4 pr-6">
                <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                  <Film className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">{vt.popupTitle}</span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mb-3">{vt.popupDesc}</p>
                  <Link to="/video-remover" className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors w-fit">
                    Try it now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] dark:bg-black/60" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="fixed left-0 top-0 bottom-0 w-80 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl z-[70] shadow-2xl border-r border-slate-200 dark:border-white/10 flex flex-col">
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
                  <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-blue-700 dark:text-blue-400">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400"><ImageIcon className="h-4 w-4" /></div>{vt.menuImage}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  </Link>
                  <Link to="/video-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><Film className="h-4 w-4" /></div>{vt.menuVideo}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/text-to-image" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400"><Type className="h-4 w-4" /></div>{vt.menuTextToImage}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-pink-500 transition-transform group-hover:translate-x-1" />
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

                {/* Privacy & Speed text for Sidebar */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Engineered for privacy and speed
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <header className="sticky top-4 z-40 px-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
              <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </button>
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30"><Sparkles className="h-4 w-4" /></div>
              <span className="text-base font-bold tracking-tight">Unmark <span className="text-blue-600 dark:text-blue-500">Image</span></span>
              <span className="ml-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{vt.badgeFree}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-1" />
            <button onClick={toggleTheme} className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
              <motion.span key={theme} initial={{ rotate: -90, opacity: 0, scale: 0.6 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} className="flex">
                {theme === "dark" ? <Sun className="h-4 w-4 text-slate-200" /> : <Moon className="h-4 w-4 text-slate-700" />}
              </motion.span>
            </button>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 pt-16 pb-24 sm:pt-24">
        
        {/* ADSTERRA 728x90 LEADERBOARD BANNER - Top */}
        <AdBanner728x90 />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-blue-400 mb-6 shadow-sm">
            <ImageIcon className="w-3.5 h-3.5" /> High-Fidelity Local Processing
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {vt.heroTitle} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent">{vt.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">{vt.heroSub}</p>
        </motion.div>

        {/* 🚀 TAB SWITCHER 🚀 */}
        <ToolSwitcher current="image" />

        {/* UPLOAD / RESULT SECTION */}
        <div className="relative mx-auto max-w-4xl mt-4">
          
          {/* Native Ad Banner - Placed perfectly above tool */}
          <AdNativeBanner />

          <div className="rounded-3xl border border-slate-200/60 bg-white/50 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111]/50 mt-6">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-white/5">
              
              {error && (
                <div className="m-4 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-medium">{error}</p>
                  <button onClick={() => setError(null)} className="ml-auto"><X className="h-4 w-4" /></button>
                </div>
              )}

              {!image && !loading ? (
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                  onClick={triggerPicker}
                  className={`group flex min-h-[400px] cursor-pointer flex-col items-center justify-center border-2 border-dashed transition-all hover:bg-slate-50 dark:hover:bg-white/[0.02] ${dragOver ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10' : 'border-slate-200 dark:border-white/10'}`}
                >
                  <div className="mb-6 rounded-full bg-slate-100 p-4 group-hover:scale-110 transition-transform dark:bg-white/5">
                    <UploadCloud className="h-10 w-10 text-slate-400 dark:text-slate-500" />
                  </div>
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">{vt.dropTitle} <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-500/30 underline-offset-4">{vt.dropBrowse}</span></p>
                  <p className="mt-2 text-sm text-slate-500">{vt.dropHint}</p>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/jpeg,image/png,image/webp" onChange={(e) => handleFiles(e.target.files)} />
                </div>
              ) : loading ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
                  <Loader2 className="mb-6 h-12 w-12 animate-spin text-blue-600 dark:text-blue-500" />
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">{vt.processing}</p>
                  <p className="mt-2 max-w-sm text-sm text-slate-500">{vt.processingSub}</p>
                  <div className="mt-6 w-full max-w-xs overflow-hidden rounded-full bg-slate-100 dark:bg-white/10 h-2">
                    <div className="h-full bg-blue-600 transition-all duration-300 dark:bg-blue-500" style={{ width: `${uploadProgress}%` }} />
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-400">{uploadProgress}%</p>
                </div>
              ) : image ? (
                <div className="flex flex-col md:flex-row border-t border-slate-100 dark:border-white/5">
                  {/* Left: Image Viewer */}
                  <div className="flex-1 p-6 flex flex-col overflow-hidden">
                    <div className="mb-6 flex justify-center">
                      <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-white/5">
                        <button onClick={() => setView("before")} className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${view === "before" ? 'bg-white text-slate-900 shadow-sm dark:bg-[#222] dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>{vt.toggleBefore}</button>
                        <button onClick={() => setView("after")} className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${view === "after" ? 'bg-white text-blue-600 shadow-sm dark:bg-[#222] dark:text-blue-400' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>{vt.toggleAfter}</button>
                      </div>
                    </div>
                    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-black/50">
                      <img src={view === "before" ? image.beforeUrl : image.afterUrl} alt="Processed result" className="w-full h-auto object-contain max-h-[500px]" />
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-100 bg-slate-50/50 p-6 dark:border-white/5 dark:bg-black/20 flex flex-col gap-4">
                    <button onClick={handleDownload} className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40">
                      <Download className="h-5 w-5" /> {vt.btnDownload}
                    </button>
                    <button onClick={handleCopy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">
                      {copied ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                      {copied ? vt.btnCopied : vt.btnCopy}
                    </button>
                    <button onClick={handleDownloadZip} className="flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">
                      <FileArchive className="h-5 w-5" /> {vt.btnZip}
                    </button>
                    <div className="my-2 h-px w-full bg-slate-200 dark:bg-white/10" />
                    <button onClick={reset} className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3.5 text-sm font-bold text-slate-600 transition-all hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20">
                      <Plus className="h-5 w-5" /> {vt.btnAddMore}
                    </button>
                    
                    {/* Ad Banner inside results sidebar */}
                    <div className="mt-auto pt-4 flex justify-center w-full overflow-hidden">
                      <AdBanner300x250 />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* NEW AD PLACEMENT: Below Tool, Above How It Works               */}
        {/* ============================================================== */}
        <div className="mt-12 mb-8">
          <AdBanner728x90 />
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-16 border-t border-slate-200/50 pt-24 dark:border-white/5">
          <div className="mb-16 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.hiwTag}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{vt.hiwTitle}</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{vt.hiwSub}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: UploadCloud, title: vt.s1Title, desc: vt.s1Desc },
              { icon: Wand2, title: vt.s2Title, desc: vt.s2Desc },
              { icon: Download, title: vt.s3Title, desc: vt.s3Desc },
            ].map((step, i) => (
              <div key={i} className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111]">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"><step.icon className="h-6 w-6" /></div>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-32 rounded-3xl bg-slate-900 px-6 py-24 text-center sm:px-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at center, #3b82f6 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400">{vt.featTag}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{vt.featTitle}</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 text-left">
              {[
                { icon: Frame, title: vt.f1Title, desc: vt.f1Desc },
                { icon: Zap, title: vt.f2Title, desc: vt.f2Desc },
                { icon: ShieldCheck, title: vt.f3Title, desc: vt.f3Desc },
                { icon: ImageIcon, title: vt.f4Title, desc: vt.f4Desc },
              ].map((feat, i) => (
                <div key={i} className="flex gap-4 rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-sm">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400"><feat.icon className="h-6 w-6" /></div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{feat.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ - (728x90 Banner removed from here) */}
        <div className="mx-auto mt-32 max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.faqTag}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{vt.faqTitle}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-2 shadow-sm dark:border-white/10 dark:bg-[#111]">
            {[
              { q: vt.faq1q, a: vt.faq1a, val: "item-1" },
              { q: vt.faq2q, a: vt.faq2a, val: "item-2" },
              { q: vt.faq3q, a: vt.faq3a, val: "item-3" },
            ].map((faq) => (
              <AccordionItem key={faq.val} value={faq.val} className="border-b-slate-100 dark:border-b-white/5 last:border-0">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-6 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-6 leading-relaxed text-sm">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </main>
      <Footer />
    </div>
  );
}