"use client";

import { createFileRoute, Link } from '@tanstack/react-router';
import { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Sun, Moon, Sparkles, UploadCloud, Loader2, Menu, Video, Film, Download,
  Image as ImageIcon, Wand2, ShieldCheck, Gauge, Frame, CheckCircle2, AlertTriangle, X, ChevronRight, Copy, FileArchive, Plus, ArrowRight,
  Type, FileText, Clapperboard, PlaySquare, Zap, Lock // ⬅️ FIXED: 'Type' icon imported here
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
// 🚀 SEO INTERNAL LINKING TABS (Tool Switcher - Fixed for Mobile)
// ─────────────────────────────────────────────────────────────
function ToolSwitcher({ current }: { current: 'image' | 'video' | 'text-to-image' | 'text-to-video' }) {
  return (
    <div className="flex justify-center mb-8 relative z-20 w-full px-3 sm:px-4">
      <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-1.5 lg:gap-1 p-1.5 bg-slate-200/50 dark:bg-white/5 rounded-2xl lg:rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md w-full lg:w-auto">
        
        {/* 1. Text to Video */}
        <Link to="/" className={`relative flex w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 rounded-xl lg:rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${current === 'text-to-video' ? 'bg-white dark:bg-purple-600 text-purple-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Clapperboard className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">Text to Video</span>
          <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 flex h-4 sm:h-5 items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-1 sm:px-1.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 animate-pulse">New</span>
        </Link>

        {/* 2. Text to Image */}
        <Link to="/text-to-image" className={`relative flex w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 rounded-xl lg:rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${current === 'text-to-image' ? 'bg-white dark:bg-pink-600 text-pink-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">Text to Image</span>
        </Link>

        {/* 3. Image Remover */}
        <Link to="/watermark-remover" className={`relative flex w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 rounded-xl lg:rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${current === 'image' ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">Image Remover</span>
        </Link>

        {/* 4. Video Remover (Active - Emerald Color Match) */}
        <Link to="/video-remover" className={`relative flex w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 rounded-xl lg:rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${current === 'video' ? 'bg-white dark:bg-emerald-600 text-emerald-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">Video Remover</span>
        </Link>
        
      </div>
    </div>
  );
}

// ==========================================
// 🌍 MULTI-LANGUAGE DICTIONARY (EN, ES, FR)
// ==========================================
const VIDEO_DICT = {
  en: {
    heroTitle: "Remove AI watermarks in",
    heroAccent: "one click",
    heroSub: "Professional-grade engine to seamlessly remove Veo and Gemini watermarks. Processed lightning-fast on our secure backend.",
    dropTitle: "Drop Video here or",
    dropBrowse: "browse",
    dropHint: "MP4, WebM, MOV — up to 100MB",
    processing: "Processing video on secure engine...",
    btnRemove: "Remove Watermark",
    btnCancel: "Cancel",
    badgePro: "100% FREE", 
    menuImage: "Image Watermark Remover",
    menuVideo: "Video Watermark Remover",
    menuTextToImage: "Text to Image Generator",
    menuTextToVideo: "Text to Video Generator",
    popupTitle: "New Feature",
    popupDesc: "Try our new AI Image generator for free!",
    hiwTag: "WORKFLOW",
    hiwTitle: "How it works",
    hiwSub: "Three steps. Absolute quality. Lightning speed.",
    s1Title: "Upload your video",
    s1Desc: "Drop an MP4, WebM, or MOV file. Any standard video format works perfectly.",
    s2Title: "Auto-magic processing",
    s2Desc: "Our powerful backend engine processes frames instantly without crashing your browser.",
    s3Title: "Download in high-res",
    s3Desc: "Get a crystal-clear, watermark-free video instantly without quality loss.",
    featTag: "WHY UNMARK VIDEO",
    featTitle: "Built for AI Video Creators",
    f1Title: "Rock-Solid Stability",
    f1Desc: "No more browser crashes or memory limits. Our server handles heavy AI videos effortlessly.",
    f2Title: "Completely Free",
    f2Desc: "No sneaky paywalls, no hidden limits, no signup required. Ever.",
    f3Title: "No quality loss",
    f3Desc: "Smart processing preserves the original framerate and resolution perfectly.",
    f4Title: "All video formats",
    f4Desc: "Works seamlessly with landscape (16:9) and portrait (9:16) AI generated formats.",
    faqTag: "FAQ",
    faqTitle: "Frequently asked questions",
    faq1q: "Is it really free?",
    faq1a: "Yes! We believe in accessible tools. You can process as many videos as you want, completely free.",
    faq2q: "Does it work with Google Veo and Gemini?",
    faq2a: "Absolutely! Our backend engine is mathematically calibrated to detect and perfectly remove watermarks from Veo and Gemini.",
    faq3q: "Does it reduce video quality or drop audio?",
    faq3a: "No, our smart engine removes the watermark while strictly copying your original audio and preserving the exact resolution."
  },
  es: {
    heroTitle: "Elimina marcas de agua de IA en",
    heroAccent: "un clic",
    heroSub: "Motor profesional para eliminar sin problemas las marcas de agua de Veo y Gemini. Procesado a la velocidad del rayo.",
    dropTitle: "Suelta el video aquí o",
    dropBrowse: "examina",
    dropHint: "MP4, WebM, MOV — hasta 100MB",
    processing: "Procesando video en el servidor...",
    btnRemove: "Eliminar Marca",
    btnCancel: "Cancelar",
    badgePro: "100% GRATIS",
    menuImage: "Eliminador de Marcas (Imagen)",
    menuVideo: "Eliminador de Marcas (Video)",
    menuTextToImage: "Generador Texto a Imagen",
    menuTextToVideo: "Generador Texto a Video",
    popupTitle: "Nueva Función",
    popupDesc: "¡Prueba nuestro nuevo generador de imágenes con IA gratis!",
    hiwTag: "FLUJO DE TRABAJO",
    hiwTitle: "Cómo funciona",
    hiwSub: "Tres pasos. Calidad absoluta. Velocidad de la luz.",
    s1Title: "Sube tu video",
    s1Desc: "Suelta un archivo MP4, WebM o MOV. Funciona con cualquier formato.",
    s2Title: "Procesamiento mágico",
    s2Desc: "Nuestro potente motor procesa los fotogramas al instante sin bloqueos.",
    s3Title: "Descarga en alta resolución",
    s3Desc: "Obtén un video nítido sin marcas de agua al instante sin perder calidad.",
    featTag: "POR QUÉ ELEGIRNOS",
    featTitle: "Construido para creadores de IA",
    f1Title: "Estabilidad Sólida",
    f1Desc: "Se acabaron los bloqueos. Nuestro servidor maneja videos pesados fácilmente.",
    f2Title: "Completamente Gratis",
    f2Desc: "Sin muros de pago engañosos, sin límites ocultos, sin necesidad de registro.",
    f3Title: "Sin pérdida de calidad",
    f3Desc: "Conserva la velocidad de fotogramas y la resolución original perfectamente.",
    f4Title: "Todos los formatos",
    f4Desc: "Funciona perfectamente con formatos horizontales (16:9) y verticales (9:16).",
    faqTag: "PREGUNTAS",
    faqTitle: "Preguntas frecuentes",
    faq1q: "¿Es realmente gratis?",
    faq1a: "¡Sí! Creemos en las herramientas accesibles. Puedes procesar tantos videos como quieras, totalmente gratis.",
    faq2q: "¿Funciona con Google Veo y Gemini?",
    faq2a: "¡Absolutamente! Calibrado matemáticamente para Veo y Gemini.",
    faq3q: "¿Reduce la calidad o elimina el audio?",
    faq3a: "No, conservamos el audio original y la resolución exacta."
  },
  fr: {
    heroTitle: "Supprimez les filigranes IA en",
    heroAccent: "un clic",
    heroSub: "Moteur professionnel pour supprimer facilement les filigranes Veo et Gemini. Traitement ultra-rapide.",
    dropTitle: "Déposez la vidéo ici ou",
    dropBrowse: "parcourir",
    dropHint: "MP4, WebM, MOV — jusqu'à 100 Mo",
    processing: "Traitement de la vidéo en cours...",
    btnRemove: "Supprimer le filigrane",
    btnCancel: "Annuler",
    badgePro: "100% GRATUIT",
    menuImage: "Suppresseur (Image)",
    menuVideo: "Suppresseur (Vidéo)",
    menuTextToImage: "Générateur Texte en Image",
    menuTextToVideo: "Générateur Texte en Vidéo",
    popupTitle: "Nouvelle Fonctionnalité",
    popupDesc: "Essayez notre nouveau générateur d'images IA gratuitement !",
    hiwTag: "FLUX DE TRAVAIL",
    hiwTitle: "Comment ça marche",
    hiwSub: "Trois étapes. Qualité absolue. Vitesse éclair.",
    s1Title: "Téléchargez votre vidéo",
    s1Desc: "Déposez un fichier MP4, WebM ou MOV. Fonctionne avec tout format.",
    s2Title: "Traitement magique",
    s2Desc: "Notre moteur backend puissant traite les images instantanément.",
    s3Title: "Téléchargement haute résolution",
    s3Desc: "Obtenez une vidéo claire instantanément sans perte de qualité.",
    featTag: "POURQUOI NOUS CHOISIR",
    featTitle: "Conçu pour les créateurs IA",
    f1Title: "Stabilité à toute épreuve",
    f1Desc: "Fini les plantages du navigateur. Notre serveur gère facilement les vidéos lourdes.",
    f2Title: "Totalement Gratuit",
    f2Desc: "Pas de péage sournois, pas de limites cachées, aucune inscription requise.",
    f3Title: "Aucune perte de qualité",
    f3Desc: "Préserve parfaitement la fréquence d'images et la résolution d'origine.",
    f4Title: "Tous les formats",
    f4Desc: "Fonctionne parfaitement avec les formats paysage (16:9) et portrait (9:16).",
    faqTag: "FAQ",
    faqTitle: "Questions fréquentes",
    faq1q: "Est-ce vraiment gratuit ?",
    faq1a: "Oui ! Nous croyons aux outils accessibles. Vous pouvez traiter autant de vidéos que vous le souhaitez, gratuitement.",
    faq2q: "Cela fonctionne-t-il avec Google Veo et Gemini ?",
    faq2a: "Absolument ! Calibré mathématiquement pour détecter Veo et Gemini.",
    faq3q: "Cela réduit-il la qualité ou supprime-t-il l'audio ?",
    faq3a: "Non, nous conservons votre audio d'origine et la résolution exacte."
  }
};

const getTranslation = (langCode: string | undefined) => {
  const safeLang = (langCode || "en").toLowerCase();
  return { ...VIDEO_DICT["en"], ...(VIDEO_DICT[safeLang as keyof typeof VIDEO_DICT] || {}) };
};

type WatermarkType = 'veo' | 'gemini';
interface VideoMeta { width: number; height: number; }

const UPCOMING_TOOLS = [
  { name: "Image to Text", icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Image to Video", icon: PlaySquare, color: "text-sky-500", bg: "bg-sky-500/10" },
  { name: "AI Image Enhancer", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "AI Video Enhancer", icon: Wand2, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
];

export const Route = createFileRoute('/video-remover')({
  head: () => ({
    meta: [
      { title: "Remove Gemini & Veo Video Watermarks | Free AI Video Eraser" },
      { name: "description", content: "Looking for a free AI video watermark remover? Seamlessly clean Google Gemini and Veo video watermarks in just one click. 100% free, private, and lightning-fast backend processing!" },
      { name: "keywords", content: "AI video watermark remover, remove Gemini video watermark, remove Veo watermark, free video watermark remover, clean AI video, Unmark AI video, remove logo from video, AI video eraser online" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "Unmark AI" },
      { property: "og:title", content: "Remove Gemini & Veo Video Watermarks | 100% Free AI Tool" },
      { property: "og:description", content: "Seamlessly clean Google Gemini and Veo video watermarks in just one click. 100% free, private, and lightning-fast!" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/video-remover" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Remove Gemini & Veo Video Watermarks | 100% Free AI Tool" },
      { name: "twitter:description", content: "Looking for a free AI video watermark remover? Seamlessly clean Google Gemini and Veo video watermarks in just one click." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.unmark-ai.com/video-remover" }
    ]
  }),
  component: VideoRemoverRoute,
});

function VideoRemoverRoute() {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Unmark AI Video Watermark Remover",
    "url": "https://www.unmark-ai.com/video-remover",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "description": "Free online tool to remove watermarks from AI-generated videos like Google Gemini and Veo.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
        <VideoRemoverPage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function VideoRemoverPage() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');
  
  const [file, setFile] = useState<File | null>(null);
  const [meta, setMeta] = useState<VideoMeta | null>(null);
  const [watermark, setWatermark] = useState<WatermarkType>('gemini');
  
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerSmartlink = () => {};

  const readMeta = (f: File): Promise<VideoMeta> =>
    new Promise((resolve, reject) => {
      const url = URL.createObjectURL(f);
      const v = document.createElement('video');
      v.muted = true;
      v.playsInline = true;
      v.preload = 'metadata';
      v.onloadedmetadata = () => {
        resolve({ width: v.videoWidth, height: v.videoHeight });
        URL.revokeObjectURL(url);
      };
      v.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Browser format error'));
      };
      v.src = url;
    });

  const acceptFile = async (f: File) => {
    setError(null);
    setResultUrl(null);
    if (!f.type.startsWith('video/')) {
      setError('Please choose a valid video file (MP4, MOV, WebM).'); return;
    }
    
    try {
      const m = await readMeta(f);
      setFile(f);
      setMeta(m);
      setVideoUrl(URL.createObjectURL(f));
      setStatus('idle');
      setUploadProgress(0);
    } catch (e: any) {
      setError(e.message || 'Failed to load video metadata.');
      setStatus('error');
    }
  };

  const triggerPicker = () => fileInputRef.current?.click();

  const reset = () => {
    triggerSmartlink();
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setFile(null);
    setMeta(null);
    setVideoUrl(null);
    setResultUrl(null);
    setError(null);
    setStatus('idle');
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const process = async () => {
    if (!file || !meta) return;
    setError(null);
    setResultUrl(null);
    setStatus('processing');
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('video', file);
    formData.append('watermark', watermark);
    formData.append('width', meta.width.toString());
    formData.append('height', meta.height.toString());

    try {
      const response = await axios.post(
        'https://tilioi-unmark-ai-engine.hf.space/process-video',
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

      const blob = response.data;
      setResultUrl(URL.createObjectURL(blob));
      setStatus('done');
      setUploadProgress(100);

    } catch (e: any) {
      console.error("Backend Error:", e);
      let errorMessage = "Server processing failed";
      
      if (e.response && e.response.data instanceof Blob) {
         errorMessage = await e.response.data.text();
      } else if (e.message) {
         errorMessage = e.message;
      }

      setError(`Server Error: ${errorMessage}. (Make sure backend is running)`);
      setStatus('error');
    }
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = `unmark-ai-clean.mp4`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    triggerSmartlink();
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

      {/* PROMO POPUP (Text to Image) */}
      <AnimatePresence>
        {showPromo && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 25, delay: 1.5 }} className="fixed bottom-6 right-6 z-[100] max-w-sm w-[calc(100%-3rem)]">
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 dark:bg-[#111] dark:border-white/10 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
              <button onClick={() => setShowPromo(false)} className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-400 transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-start gap-4 pr-6">
                <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/30">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">{vt.popupTitle}</span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug mb-3">{vt.popupDesc}</p>
                  <Link to="/text-to-image" className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors w-fit">
                    Try it now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🚀 PREMIUM HAMBURGER MENU (Updated Order) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] dark:bg-black/60"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl z-[70] shadow-2xl border-r border-slate-200 dark:border-white/10 flex flex-col"
            >
              <div className="flex shrink-0 items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/30">
                    <Film className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-bold tracking-tight">Unmark <span className="text-emerald-600 dark:text-emerald-500">AI</span></span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition">
                  <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <span className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Our Free Tools</span>
                <div className="flex flex-col gap-2">
                  
                  {/* 1. Text to Video */}
                  <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400"><Clapperboard className="h-4 w-4" /></div>
                      {vt.menuTextToVideo}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* 2. Text to Image */}
                  <Link to="/text-to-image" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400"><Type className="h-4 w-4" /></div>
                      {vt.menuTextToImage}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-pink-500 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* 3. Image Remover */}
                  <Link to="/watermark-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400"><ImageIcon className="h-4 w-4" /></div>
                      {vt.menuImage}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* 4. Video Remover (Active) */}
                  <Link to="/video-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"><Film className="h-4 w-4" /></div>
                      {vt.menuVideo}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </Link>

                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-between px-3 mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coming Soon</span>
                    <span className="flex h-5 items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 text-[9px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                      Future Tools
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {UPCOMING_TOOLS.map((tool) => (
                      <div key={tool.name} className="group flex items-center justify-between p-3 rounded-xl opacity-60 cursor-not-allowed hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-md ${tool.bg} ${tool.color}`}>
                            <tool.icon className="h-4 w-4" />
                          </div>
                          {tool.name}
                        </div>
                        <Lock className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="shrink-0 p-6 text-center border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
                 <div className="flex items-center justify-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Engineered for Privacy & Speed</span>
                 </div>
                 <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">100% Free Forever</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <header className="sticky top-4 z-40 px-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition"
            >
              <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </button>
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-500/30">
                <Film className="h-4 w-4" />
              </div>
              <span className="text-base font-bold tracking-tight">Unmark <span className="text-emerald-600 dark:text-emerald-500">Video</span></span>
              <span className="ml-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                {vt.badgePro}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-white/10 mx-1" />
            <button onClick={toggleTheme} className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
              <motion.span key={theme} initial={{ rotate: -90, opacity: 0, scale: 0.6 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} className="flex">
                {theme === "dark" ? <Sun className="h-4 w-4 text-slate-200" /> : <Moon className="h-4 w-4 text-slate-700" />}
              </motion.span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Hero Area */}
      <main className="relative mx-auto max-w-5xl px-4 pt-12 pb-24 sm:pt-20">
        
        <AdBanner728x90 />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Powered by Advanced AI
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {vt.heroTitle} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-700 bg-clip-text text-transparent">{vt.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg px-2">
            {vt.heroSub}
          </p>
        </motion.div>

        {/* 🚀 TOOL SWITCHER TABS 🚀 */}
        <ToolSwitcher current="video" />

        {/* 🚀 PREMIUM GLASSMORPHIC UPLOAD BOX 🚀 */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative z-10 max-w-4xl mx-auto mt-4">
          
          <AdNativeBanner />

          <input ref={fileInputRef} type="file" accept="video/mp4,video/webm,video/quicktime" className="hidden" onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) acceptFile(f);
          }} />

          {/* Premium Blur Wrapper Match Text-To-Image */}
          <div className="rounded-3xl border border-slate-200/60 bg-white/50 p-2 sm:p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111]/50 mt-6">
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files?.[0]; if (f) acceptFile(f); }}
              className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 dark:bg-[#0a0a0a] ${
                dragOver ? "border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/20" : "border-slate-100 dark:border-white/5"
              }`}
            >
              <div className="relative w-full flex flex-col items-center justify-center bg-slate-50/50 dark:bg-white/[0.02] p-4 sm:p-6 min-h-[300px] sm:min-h-[450px]">
                
                {(!file) && (
                  <button onClick={triggerPicker} className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white group">
                    <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#111] group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-3xl bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Film className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500" />
                    </div>
                    <div className="text-base sm:text-lg font-semibold">{vt.dropTitle} <span className="text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/30 underline-offset-4">{vt.dropBrowse}</span></div>
                    <div className="text-xs sm:text-sm flex items-center gap-2 text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-4 py-1.5 rounded-full">
                      <Video className="h-4 w-4" /> {vt.dropHint}
                    </div>
                  </button>
                )}

                {/* LIVE PROGRESS BAR */}
                {status === 'processing' && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-white/95 backdrop-blur-md dark:bg-[#0a0a0a]/95 px-6 sm:px-8">
                    <div className="relative flex items-center justify-center mb-2">
                      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 border-4 border-emerald-500/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                      <Loader2 className="h-8 w-8 sm:h-10 sm:w-10 animate-spin text-emerald-500 relative z-10" />
                    </div>
                    
                    <div className="w-full max-w-[250px] sm:max-w-[300px]">
                      <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">
                        <span>{uploadProgress < 100 ? 'Uploading securely...' : 'Removing Watermark...'}</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{uploadProgress}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-2 sm:h-3 mb-3 overflow-hidden shadow-inner">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-300 relative flex items-center justify-end pr-1"
                          style={{ width: `${uploadProgress}%` }}
                        >
                          <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_1.5s_infinite]" style={{ backgroundSize: '200% 100%' }}></div>
                        </div>
                      </div>
                      
                      <p className="text-[10px] sm:text-xs text-center text-slate-500 dark:text-slate-400 font-medium">
                        {uploadProgress < 100 
                          ? 'Please keep this tab open during upload.' 
                          : 'Our AI engine is processing your video...'}
                      </p>
                    </div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {videoUrl && !resultUrl && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center py-4">
                      <video src={videoUrl} controls playsInline className="max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] max-w-[95%] sm:max-w-[90%] rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 object-contain" />
                    </motion.div>
                  )}
                  
                  {resultUrl && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full flex flex-col items-center justify-center py-4 relative">
                      <div className="absolute top-2 left-2 sm:top-6 sm:left-6 z-20 flex items-center gap-1.5 sm:gap-2 bg-emerald-500/10 backdrop-blur-md text-emerald-700 dark:text-emerald-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border border-emerald-500/20 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/10">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> Cleaned by Unmark
                      </div>
                      <video src={resultUrl} controls playsInline className="max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] max-w-[95%] sm:max-w-[90%] rounded-xl sm:rounded-2xl shadow-2xl border border-emerald-500/30 object-contain" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 sm:mt-6 flex flex-col items-start gap-2 w-full rounded-2xl border border-red-500/30 bg-red-500/10 px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-red-700 dark:text-red-400 shadow-sm mx-2">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> Processing Interrupted
                </div>
                <span className="opacity-90 leading-relaxed">{error}</span>
              </motion.div>
            )}

            {/* Action Panel */}
            {file && !resultUrl && status !== 'processing' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 sm:mt-8 flex flex-col items-center gap-4 sm:gap-6 px-2 sm:px-0">
                <div className="flex flex-col items-center gap-2 sm:gap-3 w-full max-w-md">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Select AI Platform</span>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full p-1.5 bg-slate-100 dark:bg-[#111] rounded-2xl border border-slate-200 dark:border-white/10">
                    {(['veo', 'gemini'] as WatermarkType[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => setWatermark(t)}
                        className={`rounded-xl py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold capitalize transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 ${
                          watermark === t 
                          ? 'bg-white text-emerald-600 shadow-md dark:bg-emerald-600 dark:text-white ring-1 ring-black/5 dark:ring-white/10' 
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
                        }`}
                      >
                        {t === 'gemini' ? <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex w-full flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
                  <button
                    onClick={process}
                    className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.02] hover:shadow-emerald-600/40 active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Wand2 className="h-4 w-4 sm:h-5 sm:w-5" /> Process on Secure Server
                  </button>
                  <button
                    onClick={reset}
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {vt.btnCancel}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Download Panel */}
            {resultUrl && status !== 'processing' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center px-2 sm:px-0">
                <button
                  onClick={handleDownload}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-600/25 transition hover:scale-[1.02] hover:bg-emerald-500 active:scale-95"
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" /> Download Video
                </button>
                <button
                  onClick={reset}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5"
                >
                  Process Another
                </button>
              </motion.div>
            )}
          </div>
          
          {/* Banner Ad Below Tool */}
          <div className="mt-8 flex justify-center overflow-hidden">
             <AdBanner300x250 />
          </div>
        </motion.div>
      </main>
      
      {/* Mid Content Ad Slot */}
      <AdBanner728x90 />
      
      <VideoHowItWorks />
      <VideoFeatures />
      
      <SeoArticleSection />
      
      <VideoFAQ />
      
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENT: SEO CONTENT SECTION
// ─────────────────────────────────────────────────────────────
function SeoArticleSection() {
  return (
    <section className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/5">
      <div className="prose prose-slate dark:prose-invert max-w-none text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">The Ultimate AI Video Watermark Remover</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
          As AI video generation tools like <strong>Google Veo</strong> and <strong>Gemini</strong> become increasingly popular, creators are looking for ways to use these clips in professional projects. However, the embedded watermarks can disrupt the cinematic experience. Unmark Video is an online AI video eraser engineered specifically to <em>remove Veo watermarks</em> and clean Gemini-generated media without compromising on frame rate, audio sync, or visual fidelity.
        </p>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 mt-6 sm:mt-8">Why Ad-Supported Free Tools Win</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          We believe in keeping premium AI utilities accessible to everyone. By supporting our platform through non-intrusive advertisements, we can offer robust backend processing completely free of charge. No subscriptions, no hidden limits—just seamless <strong>AI video watermark removal</strong> directly in your browser.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// UI COMPONENTS
// ─────────────────────────────────────────────────────────────
function VideoHowItWorks() {
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  const steps = [
    { title: vt.s1Title, desc: vt.s1Desc, icon: UploadCloud },
    { title: vt.s2Title, desc: vt.s2Desc, icon: Wand2 },
    { title: vt.s3Title, desc: vt.s3Desc, icon: Download }
  ];
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16 text-center">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{vt.hiwTag}</span>
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{vt.hiwTitle}</h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-slate-500 dark:text-slate-400">{vt.hiwSub}</p>
      </motion.div>
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.15 }} className="group relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 transition-all hover:border-emerald-200 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20">
            <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 group-hover:scale-110 transition-transform">
              <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-500">STEP {i + 1}</div>
            <div className="text-lg sm:text-xl font-bold mb-2">{s.title}</div>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function VideoFeatures() {
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-transparent">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-16 text-center">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{vt.featTag}</span>
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{vt.featTitle}</h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-3 sm:grid-rows-2">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="sm:col-span-2 sm:row-span-2 group relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-emerald-50/50 p-6 sm:p-10 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.01]">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-lg shadow-emerald-500/30"><ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" /></div>
          <h3 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-bold tracking-tight">{vt.f1Title}</h3>
          <p className="mt-2 sm:mt-3 max-w-lg text-sm sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{vt.f1Desc}</p>
          <div aria-hidden className="pointer-events-none absolute -right-10 -bottom-10 sm:-right-20 sm:-bottom-20 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-emerald-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-3xl sm:rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.02] hover:shadow-lg transition-shadow">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"><Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" /></div>
          <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold">{vt.f2Title}</h3>
          <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">{vt.f2Desc}</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-3xl sm:rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.02] hover:shadow-lg transition-shadow">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"><Gauge className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500" /></div>
          <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold">{vt.f3Title}</h3>
          <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">{vt.f3Desc}</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="rounded-3xl sm:rounded-[2.5rem] border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.02] sm:col-span-3 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div>
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 mb-3 sm:mb-5"><Frame className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" /></div>
              <h3 className="text-lg sm:text-xl font-bold">{vt.f4Title}</h3>
              <p className="mt-1.5 sm:mt-2 max-w-xl text-sm sm:text-base text-slate-500 dark:text-slate-400">{vt.f4Desc}</p>
            </div>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {["MP4", "MOV", "WEBM"].map((r) => (<div key={r} className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 text-[10px] sm:text-xs font-bold text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">{r}</div>))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoFAQ() {
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  const faqs = [{ q: vt.faq1q, a: vt.faq1a }, { q: vt.faq2q, a: vt.faq2a }, { q: vt.faq3q, a: vt.faq3a }];
  return (
    <section className="relative mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 sm:mb-14 text-center">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{vt.faqTag}</span>
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{vt.faqTitle}</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="overflow-hidden rounded-3xl sm:rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
          {faqs.map((it, i) => (
            <AccordionItem key={it.q} value={`item-${i}`} className={i === faqs.length - 1 ? "border-0 px-4 sm:px-8 py-1 sm:py-2" : "border-b border-slate-200 px-4 sm:px-8 py-1 sm:py-2 dark:border-white/10"}>
              <AccordionTrigger className="text-sm sm:text-base font-bold hover:no-underline hover:text-emerald-600 transition-colors py-4 sm:py-5 text-left">{it.q}</AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-slate-500 dark:text-slate-400 pb-4 sm:pb-6 leading-relaxed">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}