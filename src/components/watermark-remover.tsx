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

// 1. 728x90 Banner
function AdBanner728x90() {
  return (
    <div className="hidden md:flex justify-center items-center w-full min-h-[90px] my-6">
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
        className="bg-slate-50/50 dark:bg-white/5 rounded-lg overflow-hidden"
      />
    </div>
  );
}

// 2. 300x250 Banner
function AdBanner300x250() {
  return (
    <div className="flex justify-center items-center w-full min-h-[250px] my-10">
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
        className="bg-slate-50/50 dark:bg-white/5 rounded-lg overflow-hidden"
      />
    </div>
  );
}

// 3. Native Banner
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
    <div className="w-full flex justify-center items-center my-12 px-4">
      <div id="container-b2f92a8142955a57ae630862cf29f00e" className="w-full max-w-4xl min-h-[100px] rounded-xl overflow-hidden shadow-sm" />
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

const UPCOMING_TOOLS = [
  { name: "Text to Image", icon: Type, color: "text-pink-500", bg: "bg-pink-500/10" },
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
    if (!image) return;
    const a = document.createElement("a");
    a.href = image.afterUrl;
    a.download = "unmark-gemini-clean.jpg";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleCopy = async () => {
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
    handleDownload(); // Falls back to standard download
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 transition-colors overflow-x-hidden">
      
      {/* AdSocialBar component call has been cleanly removed since it is now globally handled inside root index.tsx */}

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
        
        {/* ADSTERRA 728x90 LEADERBOARD BANNER */}
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

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/video-remover" className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40">
              <Film className="w-4 h-4" /> Try Video Watermark Remover
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative z-10 max-w-4xl mx-auto">
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFiles(e.target.files)} />

          <div onDragOver={(e) => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }} className={`relative overflow-hidden rounded-[2rem] border bg-white shadow-2xl transition-all duration-300 dark:bg-[#0a0a0a] ${dragOver ? "border-blue-500 ring-4 ring-blue-500/20 shadow-blue-500/20" : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"}`}>
            <div className="relative flex min-h-[400px] sm:min-h-[500px] w-full flex-col items-center justify-center bg-slate-50/50 p-6 sm:p-10 dark:bg-white/[0.02]">
              
              {!image && !loading && (
                <button type="button" onClick={triggerPicker} className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white group">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#111] group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <UploadCloud className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="text-lg font-semibold">{vt.dropTitle} <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">{vt.dropBrowse}</span></div>
                  <div className="text-sm flex items-center gap-2 text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-4 py-1.5 rounded-full"><ImageIcon className="h-4 w-4" /> {vt.dropHint}</div>
                </button>
              )}

              {loading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-white/95 backdrop-blur-md dark:bg-[#0a0a0a]/95 text-center">
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="absolute w-24 h-24 border-4 border-blue-500/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <Loader2 className="h-10 w-10 animate-spin text-blue-500 relative z-10" />
                  </div>
                  
                  <div className="w-full max-w-[300px]">
                    <div className="flex justify-between text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">
                      <span>{uploadProgress < 100 ? 'Uploading Image...' : 'Reconstructing Pixels...'}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-extrabold">{uploadProgress}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-3 mb-4 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-300 relative flex items-center justify-end pr-1"
                        style={{ width: `${uploadProgress}%` }}
                      >
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_1.5s_infinite]" style={{ backgroundSize: '200% 100%' }}></div>
                      </div>
                    </div>
                    
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {vt.processingSub}
                    </p>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {image && !loading && (
                  <motion.img key={view + image.beforeUrl} src={view === "before" ? image.beforeUrl : image.afterUrl} alt={view} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-h-[65vh] sm:max-h-[70vh] w-auto object-contain rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10" />
                )}
              </AnimatePresence>
            </div>
          </div>

          {image && !loading && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex justify-center">
              <div className="relative flex items-center rounded-full border border-slate-200/50 bg-white/80 p-1.5 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-[#111]/80">
                {(["before", "after"] as const).map((option) => (
                  <button type="button" key={option} onClick={() => setView(option)} className="relative z-10 w-32 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors">
                    <span className={view === option ? "relative z-10 text-white" : "relative z-10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}>{option === "before" ? vt.toggleBefore : vt.toggleAfter}</span>
                    {view === option && (<motion.span layoutId="image-pill-active" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md" />)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {error && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-col items-start gap-2 max-w-3xl mx-auto rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-700 dark:text-red-400 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-base"><AlertTriangle className="h-5 w-5 shrink-0" /> Error</div>
            <span className="opacity-90 leading-relaxed">{error}</span>
          </motion.div>
        )}

        {/* ======================================= */}
        {/* ACTION BUTTONS */}
        {/* ======================================= */}
        {image && !loading && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            
            <button type="button" onClick={handleDownload} className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 transition hover:scale-[1.02] hover:shadow-emerald-500/40 active:scale-95">
              <Download className="h-5 w-5" /> {vt.btnDownload}
            </button>
            
            <button type="button" onClick={handleCopy} className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5 active:scale-95">
              {copied ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5 text-blue-500" />} {copied ? vt.btnCopied : vt.btnCopy}
            </button>
            
            <button type="button" onClick={handleDownloadZip} className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5 active:scale-95">
              <FileArchive className="h-5 w-5 text-indigo-500" /> {vt.btnZip}
            </button>
            
            <button type="button" onClick={reset} className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5 active:scale-95">
              <Plus className="h-5 w-5" /> {vt.btnAddMore}
            </button>

          </motion.div>
        )}

        {/* ADSTERRA 300x250 MEDIUM RECTANGLE BANNER */}
        <AdBanner300x250 />

      </main>

      <ImageBeforeAfterSection />
      <ImageHowItWorks />
      <ImageFeatures />
      
      {/* ADSTERRA NATIVE BANNER */}
      <AdNativeBanner />

      <ImageFAQ />
      <Footer />
    </div>
  );
}

function ShowcaseCard({ title, icon, beforeSrc, afterSrc, delay }: { title: string, icon: React.ReactNode, beforeSrc: string, afterSrc: string, delay?: number }) {
  const [isRevealed, setIsRevealed] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, x: delay ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: delay || 0 }} className="flex flex-col gap-4 items-center">
      <div className="flex items-center gap-3 mb-2 w-full max-w-[300px] justify-center">{icon}<h3 className="text-xl font-bold">{title}</h3></div>
      <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 shadow-xl ring-4 ring-black/5 dark:ring-white/5 cursor-pointer select-none" onMouseEnter={() => setIsRevealed(true)} onMouseLeave={() => setIsRevealed(false)} onTouchStart={() => setIsRevealed(true)} onTouchEnd={() => setIsRevealed(false)} onTouchCancel={() => setIsRevealed(false)}>
        <img src={beforeSrc} alt={`${title} Before`} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 z-10 backdrop-blur-sm ${isRevealed ? "opacity-100" : "opacity-0"}`} />
        <img src={afterSrc} alt={`${title} After`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-20 pointer-events-none ${isRevealed ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center z-30 pointer-events-none ${isRevealed ? "opacity-100" : "opacity-0"}`}><div className={`flex flex-col items-center gap-2 transform transition-transform duration-500 ${isRevealed ? "translate-y-0" : "translate-y-4"}`}><div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg"><ImageIcon className="w-7 h-7" /></div><span className="font-bold text-white text-lg tracking-wide drop-shadow-md">Cleaned Locally</span></div></div>
      </div>
      <p className="text-sm text-center text-slate-500 font-medium mt-2"><span className="hidden sm:inline">Hover to reveal comparison</span><span className="inline sm:hidden">Press & hold to reveal</span></p>
    </motion.div>
  );
}

function ImageBeforeAfterSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 border-t border-slate-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.01]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16 text-center"><span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Image Magic</span><h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">Flawless Pixel Reconstruction</h2><p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">Interact with the images below to see how our local AI model seamlessly erases watermarks and intelligently repaints the missing background.</p></motion.div>
      <div className="grid md:grid-cols-2 gap-10"><ShowcaseCard title="Gemini Portrait Setup" icon={<div className="p-2 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg"><Sparkles className="w-5 h-5" /></div>} beforeSrc="/showcase/image-gemini-before.png" afterSrc="/showcase/image-gemini-after.png" /><ShowcaseCard title="Gemini Concept Image" icon={<div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-lg"><Wand2 className="w-5 h-5" /></div>} beforeSrc="/showcase/image-ai-before.png" afterSrc="/showcase/image-ai-after.png" delay={0.2} /></div>
    </section>
  );
}

function ImageHowItWorks() {
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  const steps = [{ title: vt.s1Title, desc: vt.s1Desc, icon: UploadCloud }, { title: vt.s2Title, desc: vt.s2Desc, icon: Wand2 }, { title: vt.s3Title, desc: vt.s3Desc, icon: Download }];
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center"><span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.hiwTag}</span><h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">{vt.hiwTitle}</h2><p className="mx-auto mt-4 max-w-md text-base text-slate-500 dark:text-slate-400">{vt.hiwSub}</p></motion.div>
      <div className="grid gap-6 sm:grid-cols-3">{steps.map((s, i) => (<motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.15 }} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 group-hover:scale-110 transition-transform"><s.icon className="h-6 w-6" /></div><div className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-500">STEP {i + 1}</div><div className="text-xl font-bold mb-2">{s.title}</div><p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p></motion.div>))}</div>
    </section>
  );
}

function ImageFeatures() {
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-transparent">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center"><span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.featTag}</span><h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">{vt.featTitle}</h2></motion.div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:grid-rows-2">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="sm:col-span-2 sm:row-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50/50 p-10 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.01]"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30"><ShieldCheck className="h-6 w-6" /></div><h3 className="mt-8 text-3xl font-bold tracking-tight">{vt.f1Title}</h3><p className="mt-3 max-w-lg text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{vt.f1Desc}</p><div aria-hidden className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" /></motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.02] hover:shadow-lg transition-shadow"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"><Sparkles className="h-5 w-5 text-indigo-500" /></div><h3 className="mt-5 text-xl font-bold">{vt.f2Title}</h3><p className="mt-2 text-base text-slate-500 dark:text-slate-400">{vt.f2Desc}</p></motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.02] hover:shadow-lg transition-shadow"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"><Gauge className="h-5 w-5 text-emerald-500" /></div><h3 className="mt-5 text-xl font-bold">{vt.f3Title}</h3><p className="mt-2 text-base text-slate-500 dark:text-slate-400">{vt.f3Desc}</p></motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.02] sm:col-span-3 hover:shadow-lg transition-shadow"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"><div><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 mb-5"><Frame className="h-5 w-5 text-blue-500" /></div><h3 className="text-xl font-bold">{vt.f4Title}</h3><p className="mt-2 max-w-xl text-base text-slate-500 dark:text-slate-400">{vt.f4Desc}</p></div><div className="flex gap-3 flex-wrap">{["PNG", "JPG", "WEBP"].map((r) => (<div key={r} className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">{r}</div>))}</div></div></motion.div>
      </div>
    </section>
  );
}

function ImageFAQ() {
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  const faqs = [{ q: vt.faq1q, a: vt.faq1a }, { q: vt.faq2q, a: vt.faq2a }, { q: vt.faq3q, a: vt.faq3a }];
  return (
    <section className="relative mx-auto max-w-4xl px-4 py-20 sm:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center"><span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.faqTag}</span><h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">{vt.faqTitle}</h2></motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
          {faqs.map((it, i) => (
            <AccordionItem key={it.q} value={`item-${i}`} className={i === faqs.length - 1 ? "border-0 px-8 py-2" : "border-b border-slate-200 px-8 py-2 dark:border-white/10"}><AccordionTrigger className="text-base font-bold hover:no-underline hover:text-blue-600 transition-colors py-5">{it.q}</AccordionTrigger><AccordionContent className="text-base text-slate-500 dark:text-slate-400 pb-6 leading-relaxed">{it.a}</AccordionContent></AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}