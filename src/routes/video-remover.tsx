import { createFileRoute, Link } from '@tanstack/react-router';
import { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun, Moon, Sparkles, UploadCloud, Loader2, Menu, Video, Film, Download,
  Image as ImageIcon, Wand2, ShieldCheck, Gauge, Frame, CheckCircle2, AlertTriangle, X, ChevronRight, Play
} from "lucide-react";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { Footer, LanguageSwitcher } from "@/components/landing-sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ==========================================
// 🌍 MULTI-LANGUAGE DICTIONARY
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
    menuImage: "Suppresseur de Filigrane (Image)",
    menuVideo: "Suppresseur de Filigrane (Vidéo)",
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
    faq3a: "No, nous conservons votre audio d'origine et la résolution exacte."
  }
};

const getTranslation = (langCode: string | undefined) => {
  const safeLang = (langCode || "en").toLowerCase();
  return VIDEO_DICT[safeLang as keyof typeof VIDEO_DICT] || VIDEO_DICT["en"];
};

type WatermarkType = 'veo' | 'gemini';
interface VideoMeta { width: number; height: number; }

export const Route = createFileRoute('/video-remover')({
  head: () => ({
    meta: [
      /* --- HIGHLY OPTIMIZED SEO TITLE --- */
      { title: "Remove Gemini & Veo Video Watermarks | 100% Free AI Tool" },

      /* --- LONG, DETAILED & POWERFUL DESCRIPTION --- */
      {
        name: "description",
        content:
          "Looking for a free AI video watermark remover? Seamlessly clean Google Gemini and Veo video watermarks in just one click. 100% free, private, and lightning-fast!",
      },

      /* --- HIGH-RANKING KEYWORDS --- */
      {
        name: "keywords",
        content:
          "AI video watermark remover, remove Gemini video watermark, remove Veo watermark, free video watermark remover, clean AI video, Unmark AI video",
      },
      { name: "author", content: "Unmark AI" },

      /* --- Open Graph (Facebook, WhatsApp, LinkedIn) --- */
      { property: "og:title", content: "Remove Gemini & Veo Video Watermarks | 100% Free AI Tool" },
      {
        property: "og:description",
        content:
          "Looking for a free AI video watermark remover? Seamlessly clean Google Gemini and Veo video watermarks in just one click. 100% free, private, and lightning-fast!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/video-remover" },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },

      /* --- Twitter Cards --- */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Remove Gemini & Veo Video Watermarks | 100% Free AI Tool" },
      {
        name: "twitter:description",
        content:
          "Looking for a free AI video watermark remover? Seamlessly clean Google Gemini and Veo video watermarks in just one click. 100% free, private, and lightning-fast!",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },
      /* --- ROBOTS INSTRUCTION --- */
      { name: "robots", content: "index, follow" }
    ],
    links: [
      /* --- CANONICAL URL FOR VIDEO PAGE --- */
      { rel: "canonical", href: "https://www.unmark-ai.com/video-remover" }
    ]
  }),
  component: VideoRemoverRoute,
});

function VideoRemoverRoute() {
  return (
    <ThemeProvider>
      <LanguageProvider>
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
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');
  
  const [file, setFile] = useState<File | null>(null);
  const [meta, setMeta] = useState<VideoMeta | null>(null);
  const [watermark, setWatermark] = useState<WatermarkType>('gemini');
  
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

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
    } catch (e: any) {
      setError(e.message || 'Failed to load video metadata.');
      setStatus('error');
    }
  };

  const triggerPicker = () => fileInputRef.current?.click();

  const reset = () => {
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setFile(null);
    setMeta(null);
    setVideoUrl(null);
    setResultUrl(null);
    setError(null);
    setStatus('idle');
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const process = async () => {
    if (!file || !meta) return;
    setError(null);
    setResultUrl(null);
    setStatus('processing');

    const formData = new FormData();
    formData.append('video', file);
    formData.append('watermark', watermark);
    formData.append('width', meta.width.toString());
    formData.append('height', meta.height.toString());

    try {
      const response = await fetch('https://unmark-backend.onrender.com/process-video', 
      {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || 'Server processing failed');
      }

      const blob = await response.blob();
      setResultUrl(URL.createObjectURL(blob));
      setStatus('done');
    } catch (e: any) {
      console.error("Backend Error:", e);
      setError(`Server Error: ${e.message}. (Make sure 'node server.js' is running in terminal)`);
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 transition-colors overflow-x-hidden">
      
      {/* Premium Background Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: theme === "dark" ? "#1f2937" : "#cbd5e1",
          maskImage: "radial-gradient(ellipse at top center, black 40%, transparent 80%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full blur-[150px] bg-blue-500/10 dark:bg-blue-600/20" />

      {/* 🚀 PREMIUM HAMBURGER MENU (SIDE DRAWER) 🚀 */}
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
              className="fixed left-0 top-0 bottom-0 w-80 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl z-[70] shadow-2xl border-r border-slate-200 dark:border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-bold tracking-tight">Unmark <span className="text-blue-600 dark:text-blue-500">AI</span></span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition">
                  <X className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-2">
                <span className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Our Free Tools</span>
                <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><ImageIcon className="h-4 w-4" /></div>
                    {vt.menuImage}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/video-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 transition">
                  <div className="flex items-center gap-3 text-sm font-medium text-blue-700 dark:text-blue-400">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400"><Film className="h-4 w-4" /></div>
                    {vt.menuVideo}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                </Link>
              </div>
              
              <div className="mt-auto p-6 text-center border-t border-slate-100 dark:border-white/5">
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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-base font-bold tracking-tight">Unmark <span className="text-blue-600 dark:text-blue-500">Video</span></span>
              <span className="ml-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {vt.badgePro}
              </span>
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

      {/* Main Hero Area */}
      <main className="relative mx-auto max-w-5xl px-4 pt-16 pb-24 sm:pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-blue-400 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Powered by Advanced AI
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {vt.heroTitle} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent">{vt.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            {vt.heroSub}
          </p>
        </motion.div>

        {/* Upload Box */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative z-10 max-w-3xl mx-auto">
          <input ref={fileInputRef} type="file" accept="video/mp4,video/webm,video/quicktime" className="hidden" onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) acceptFile(f);
          }} />

          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files?.[0]; if (f) acceptFile(f); }}
            className={`relative overflow-hidden rounded-[2rem] border bg-white shadow-2xl transition-all duration-300 dark:bg-[#0a0a0a] ${
              dragOver ? "border-blue-500 ring-4 ring-blue-500/20 shadow-blue-500/20" : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
            }`}
          >
            <div className="relative aspect-[16/9] w-full flex flex-col items-center justify-center bg-slate-50/50 dark:bg-white/[0.02] p-6">
              
              {(!file) && (
                <button onClick={triggerPicker} className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white group">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#111] group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Film className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="text-lg font-semibold">{vt.dropTitle} <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">{vt.dropBrowse}</span></div>
                  <div className="text-sm flex items-center gap-2 text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-4 py-1.5 rounded-full">
                    <Video className="h-4 w-4" /> {vt.dropHint}
                  </div>
                </button>
              )}

              {status === 'processing' && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-white/90 backdrop-blur-md dark:bg-[#0a0a0a]/90">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-24 h-24 border-4 border-blue-500/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                    <Loader2 className="h-10 w-10 animate-spin text-blue-500 relative z-10" />
                  </div>
                  <div className="text-base font-semibold text-slate-700 dark:text-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                    {vt.processing}
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {videoUrl && !resultUrl && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center py-4">
                    <video src={videoUrl} controls className="max-h-[80%] max-w-[90%] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10" />
                  </motion.div>
                )}
                
                {resultUrl && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full flex flex-col items-center justify-center py-4">
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-emerald-500/10 backdrop-blur-md text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-xl border border-emerald-500/20 text-sm font-bold shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-5 h-5" /> Cleaned by Unmark
                    </div>
                    <video src={resultUrl} controls className="max-h-[80%] max-w-[90%] rounded-2xl shadow-2xl border border-emerald-500/30" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-col items-start gap-2 max-w-3xl mx-auto rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-700 dark:text-red-400 shadow-sm">
            <div className="flex items-center gap-2 font-bold text-base">
              <AlertTriangle className="h-5 w-5 shrink-0" /> Processing Interrupted
            </div>
            <span className="opacity-90 leading-relaxed">{error}</span>
          </motion.div>
        )}

        {/* Action Panel */}
        {file && !resultUrl && status !== 'processing' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 flex flex-col items-center gap-8">
            
            <div className="flex flex-col items-center gap-3 w-full max-w-md">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Select AI Platform</span>
              <div className="grid grid-cols-2 gap-3 w-full p-1.5 bg-slate-200/50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
                {(['veo', 'gemini'] as WatermarkType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setWatermark(t)}
                    className={`rounded-xl py-3.5 text-sm font-bold capitalize transition-all duration-300 flex items-center justify-center gap-2 ${
                      watermark === t 
                      ? 'bg-white text-blue-600 shadow-md dark:bg-blue-600 dark:text-white ring-1 ring-black/5 dark:ring-white/10' 
                      : 'text-slate-600 hover:bg-slate-100/50 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
                    }`}
                  >
                    {t === 'gemini' ? <Sparkles className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={process}
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02] hover:shadow-blue-600/40 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Wand2 className="h-5 w-5" /> Process on Secure Server
              </button>
              <button
                onClick={reset}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-base font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5"
              >
                {vt.btnCancel}
              </button>
            </div>
          </motion.div>
        )}

        {/* Download Panel */}
        {resultUrl && status !== 'processing' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => {
                const a = document.createElement("a");
                a.href = resultUrl;
                a.download = `unmark-ai-clean.mp4`;
                document.body.appendChild(a);
                a.click();
                a.remove();
              }}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 py-4 text-base font-bold text-white shadow-xl shadow-emerald-600/25 transition hover:scale-[1.02] hover:bg-emerald-500 active:scale-95"
            >
              <Download className="h-5 w-5" /> Download Video
            </button>
            <button
              onClick={reset}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-base font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-[#111] dark:text-slate-200 dark:hover:bg-white/5"
            >
              Process Another
            </button>
          </motion.div>
        )}
      </main>

      {/* Premium Sections */}
      <BeforeAfterSection />
      <VideoHowItWorks />
      <VideoFeatures />
      <VideoFAQ />
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// NEW: SMART INTERACTIVE VIDEO CARD (Handles Hover & Touch)
// ─────────────────────────────────────────────────────────────
function ShowcaseVideoCard({ title, icon, beforeSrc, afterSrc, delay }: { title: string, icon: React.ReactNode, beforeSrc: string, afterSrc: string, delay?: number }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, x: delay ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: delay || 0 }} className="flex flex-col gap-4 items-center">
      <div className="flex items-center gap-3 mb-2 w-full max-w-[300px] justify-center">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      {/* Strict 9:16 Mobile Portrait Frame with Touch/Hover Logic */}
      <div 
        className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 shadow-xl ring-4 ring-black/5 dark:ring-white/5 cursor-pointer select-none"
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        onTouchStart={() => setIsRevealed(true)}
        onTouchEnd={() => setIsRevealed(false)}
        onTouchCancel={() => setIsRevealed(false)}
      >
        <video src={beforeSrc} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 z-10 ${isRevealed ? "opacity-100" : "opacity-0"}`} />
        <video src={afterSrc} autoPlay loop muted playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-20 pointer-events-none ${isRevealed ? "opacity-100" : "opacity-0"}`} />
        
        <div className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center z-30 pointer-events-none ${isRevealed ? "opacity-100" : "opacity-0"}`}>
          <div className={`flex flex-col items-center gap-2 transform transition-transform duration-500 ${isRevealed ? "translate-y-0" : "translate-y-4"}`}>
            <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg"><CheckCircle2 className="w-7 h-7" /></div>
            <span className="font-bold text-white text-lg tracking-wide drop-shadow-md">Watermark Removed</span>
          </div>
        </div>
      </div>
      
      {/* Smart Device-Aware Instruction Text */}
      <p className="text-sm text-center text-slate-500 font-medium mt-2">
        <span className="hidden sm:inline">Hover to see processed result</span>
        <span className="inline sm:hidden">Press & hold to see result</span>
      </p>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// UPDATED: BEFORE & AFTER SHOWCASE (Uses Smart Video Component)
// ─────────────────────────────────────────────────────────────
function BeforeAfterSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 border-t border-slate-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.01]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16 text-center">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">The Magic</span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">See it in action</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">Interact with the videos below to see how we perfectly detect and erase watermarks without degrading your masterpiece.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        
        <ShowcaseVideoCard 
          title="Google Gemini"
          icon={<div className="p-2 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg"><Sparkles className="w-5 h-5" /></div>}
          beforeSrc="/showcase/gemini-before.mp4"
          afterSrc="/showcase/gemini-after.mp4"
        />

        <ShowcaseVideoCard 
          title="Google Veo"
          icon={<div className="p-2 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg"><Video className="w-5 h-5" /></div>}
          beforeSrc="/showcase/veo-before.mp4"
          afterSrc="/showcase/veo-after.mp4"
          delay={0.2}
        />

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ENHANCED UI COMPONENTS
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
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.hiwTag}</span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">{vt.hiwTitle}</h2>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-500 dark:text-slate-400">{vt.hiwSub}</p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.15 }} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 group-hover:scale-110 transition-transform">
              <s.icon className="h-6 w-6" />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-500">STEP {i + 1}</div>
            <div className="text-xl font-bold mb-2">{s.title}</div>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
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
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.featTag}</span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">{vt.featTitle}</h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:grid-rows-2">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="sm:col-span-2 sm:row-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50/50 p-10 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.01]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30"><ShieldCheck className="h-6 w-6" /></div>
          <h3 className="mt-8 text-3xl font-bold tracking-tight">{vt.f1Title}</h3>
          <p className="mt-3 max-w-lg text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{vt.f1Desc}</p>
          <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.02] hover:shadow-lg transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"><Sparkles className="h-5 w-5 text-indigo-500" /></div>
          <h3 className="mt-5 text-xl font-bold">{vt.f2Title}</h3>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400">{vt.f2Desc}</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.02] hover:shadow-lg transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5"><Gauge className="h-5 w-5 text-emerald-500" /></div>
          <h3 className="mt-5 text-xl font-bold">{vt.f3Title}</h3>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400">{vt.f3Desc}</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.02] sm:col-span-3 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5 mb-5"><Frame className="h-5 w-5 text-blue-500" /></div>
              <h3 className="text-xl font-bold">{vt.f4Title}</h3>
              <p className="mt-2 max-w-xl text-base text-slate-500 dark:text-slate-400">{vt.f4Desc}</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {["MP4", "MOV", "WEBM"].map((r) => (<div key={r} className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">{r}</div>))}
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
    <section className="relative mx-auto max-w-4xl px-4 py-20 sm:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{vt.faqTag}</span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">{vt.faqTitle}</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Accordion type="single" collapsible className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
          {faqs.map((it, i) => (
            <AccordionItem key={it.q} value={`item-${i}`} className={i === faqs.length - 1 ? "border-0 px-8 py-2" : "border-b border-slate-200 px-8 py-2 dark:border-white/10"}>
              <AccordionTrigger className="text-base font-bold hover:no-underline hover:text-blue-600 transition-colors py-5">{it.q}</AccordionTrigger>
              <AccordionContent className="text-base text-slate-500 dark:text-slate-400 pb-6 leading-relaxed">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}