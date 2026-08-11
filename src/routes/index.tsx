"use client";

import { createFileRoute, Link } from '@tanstack/react-router';
import { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Sun, Moon, Sparkles, UploadCloud, Loader2, Menu, Video, Film, Download,
  Image as ImageIcon, Wand2, ShieldCheck, Gauge, Frame, CheckCircle2, AlertTriangle, X, ChevronRight, Copy, FileArchive, Plus, ArrowRight,
  Type, FileText, Clapperboard, PlaySquare, Zap, Lock, RefreshCw, Server, Settings2, Clock, 
  BatteryCharging
} from "lucide-react";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { Footer, LanguageSwitcher } from "@/components/landing-sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ==========================================
// 📢 PROFESSIONAL GLOBAL AD INJECTOR
// ==========================================
const GlobalAdScripts = () => {
  useEffect(() => {
    // 1. ADSTERRA SOCIAL BAR AD SCRIPT
    const socialScriptSrc = "//pl30342756.effectivecpmnetwork.com/39/08/28/39082802d3120406758973a8b6e5b23b.js";
    if (!document.querySelector(`script[src="${socialScriptSrc}"]`)) {
      const socialScript = document.createElement("script");
      socialScript.type = "text/javascript";
      socialScript.src = socialScriptSrc;
      socialScript.async = true;
      document.body.appendChild(socialScript);
    }

    // 2. ADCASH MAIN LIBRARY SCRIPT (Engine)
    if (!document.getElementById("aclib")) {
      const aclibScript = document.createElement("script");
      aclibScript.id = "aclib";
      aclibScript.type = "text/javascript";
      aclibScript.src = "//acscdn.com/script/aclib.js";
      aclibScript.async = true;
      document.head.appendChild(aclibScript);
    }

    // 3. ADCASH VIDEO SLIDER & INTERSTITIAL TAGS
    if (!document.getElementById("adcash-tags")) {
      const adcashTags = document.createElement("script");
      adcashTags.id = "adcash-tags";
      adcashTags.type = "text/javascript";
      adcashTags.innerHTML = `
        window.aclib = window.aclib || [];
        // Trigger Video Slider Ad (Bottom Floating Video)
        aclib.runVideoSlider({ zoneId: '11799942' });
        // Trigger Interstitial Ad (Full Screen Overlay)
        aclib.runInterstitial({ zoneId: '11799974' });
      `;
      document.body.appendChild(adcashTags);
    }

    return () => {};
  }, []);

  return null;
};

// ==========================================
// 📢 LOCAL AD COMPONENTS
// ==========================================
function AdBanner728x90() {
  return (
    <div className="flex justify-center items-center w-full min-h-[90px] my-6 overflow-hidden">
      <div className="max-w-full overflow-x-auto rounded-lg custom-scrollbar flex justify-center">
        <iframe title="Adsterra 728x90" width="728" height="90" frameBorder="0" scrolling="no" className="bg-slate-50/50 dark:bg-white/5"
          srcDoc={`<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style></head><body><script type="text/javascript">atOptions = { 'key' : '9b8822b87a33da031aa2351cb92a123d', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };</script><script type="text/javascript" src="//www.highperformanceformat.com/9b8822b87a33da031aa2351cb92a123d/invoke.js"></script></body></html>`}
        />
      </div>
    </div>
  );
}

function AdBanner300x250() {
  return (
    <div className="flex justify-center items-center w-full min-h-[250px] my-4 overflow-hidden">
      <div className="max-w-full overflow-x-auto rounded-lg custom-scrollbar flex justify-center">
        <iframe title="Adsterra 300x250" width="300" height="250" frameBorder="0" scrolling="no" className="bg-slate-50/50 dark:bg-white/5"
          srcDoc={`<!DOCTYPE html><html><head><style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style></head><body><script type="text/javascript">atOptions = { 'key' : '8334e8ec678967ec9dd522989d8d95ea', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };</script><script type="text/javascript" src="//www.highperformanceformat.com/8334e8ec678967ec9dd522989d8d95ea/invoke.js"></script></body></html>`}
        />
      </div>
    </div>
  );
}

function AdNativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
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
      <div id="container-b2f92a8142955a57ae630862cf29f00e" className="w-full max-w-4xl min-h-[100px] rounded-xl overflow-hidden shadow-sm flex justify-center" />
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
        
        {/* 1. Text to Video (Homepage - Active) */}
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

        {/* 4. Video Remover */}
        <Link to="/video-remover" className={`relative flex w-full lg:w-auto items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2.5 rounded-xl lg:rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 ${current === 'video' ? 'bg-white dark:bg-emerald-600 text-emerald-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">Video Remover</span>
        </Link>
        
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 🌐 MULTI-LANGUAGE DICTIONARY (EN, ES, FR)
// ─────────────────────────────────────────────────────────────
const T2V_DICT: Record<string, any> = {
  en: {
    heroTitle: "Bring your ideas to life with",
    heroAccent: "Unmark Video Engine",
    heroSub: "Turn any text prompt into a stunning, high-definition cinematic video instantly. Powered by our next-gen enterprise AI cluster.",
    placeholder: "Describe your scene... e.g. A futuristic cyberpunk city street during a heavy rainstorm. Neon lights reflecting on wet asphalt...",
    processing: "Waking up Engine...",
    processingWait: "Connecting to Cloud Rendering cluster. Rendering video frames...",
    btnGenerate: "Generate Video",
    btnDownload: "Download MP4",
    btnAddMore: "Create Another",
    badgeFree: "FREE AI TOOL",
    hiwTag: "WORKFLOW",
    hiwTitle: "How it works",
    hiwSub: "Three simple steps to cinematic AI videos.",
    s1Title: "Enter your prompt",
    s1Desc: "Describe your scene in detail. Include lighting, camera angles, and action for the best results.",
    s2Title: "Cloud Rendering",
    s2Desc: "Our enterprise-grade servers process your prompt using an advanced 3D motion-aware model.",
    s3Title: "Ready to Download",
    s3Desc: "Get your AI generated content ready for professional use in seconds.",
    featTag: "FEATURES",
    featTitle: "Next-Gen Video AI",
    f1Title: "Lightning Fast Engine",
    f1Desc: "Your requests are processed instantly using our highly optimized cloud pipeline.",
    f2Title: "Hyper-Realistic Motion",
    f2Desc: "Utilizing deep learning models trained to understand accurate physics and cinematic movement.",
    f3Title: "Cinematic Quality",
    f3Desc: "Outputs are incredibly detailed, stable, and cinematic, perfect for any professional project.",
    f4Title: "100% Watermark Free",
    f4Desc: "Videos are completely clean and yours to use wherever you want without forced branding.",
    faqTag: "FAQ",
    faqTitle: "Frequently asked questions",
    faq1q: "Is it really free and do I need to sign up?",
    faq1a: "Yes! Unmark AI offers a seamless 'No Signup' experience. You get a daily limit of free generation credits automatically allocated to your browser.",
    faq2q: "Are there any watermarks on the final video?",
    faq2a: "Absolutely not. We believe in providing completely clean, watermark-free video downloads for all our users to use in their projects.",
    faq3q: "What makes a good prompt for the best video?",
    faq3a: "Be descriptive! Mention the subject, the environment, the lighting (e.g., cinematic, glowing, neon), and the camera style (e.g., slow pan, extreme close-up)."
  },
  es: {
    heroTitle: "Da vida a tus ideas con",
    heroAccent: "Unmark Video Engine",
    heroSub: "Convierte cualquier texto en un impresionante video cinematográfico de alta definición al instante.",
    placeholder: "Describe tu escena... ej. Una calle de una ciudad ciberpunk futurista durante una fuerte tormenta...",
    processing: "Despertando el motor...",
    processingWait: "Conectando al clúster en la nube. Renderizando cuadros de video...",
    btnGenerate: "Generar Video",
    btnDownload: "Descargar MP4",
    btnAddMore: "Crear Otro",
    badgeFree: "HERRAMIENTA IA GRATIS",
    hiwTag: "FLUJO DE TRABAJO",
    hiwTitle: "Cómo funciona",
    hiwSub: "Tres sencillos pasos para videos de IA cinematográficos.",
    s1Title: "Ingresa tu texto",
    s1Desc: "Describe tu escena en detalle. Incluye iluminación, ángulos de cámara y acción para mejores resultados.",
    s2Title: "Renderizado en la Nube",
    s2Desc: "Nuestros servidores procesan tu solicitud utilizando un modelo 3D avanzado.",
    s3Title: "Listo para Descargar",
    s3Desc: "Obtén tu contenido generado por IA listo para uso profesional en segundos.",
    featTag: "CARACTERÍSTICAS",
    featTitle: "IA de Video de Próxima Generación",
    f1Title: "Motor Ultrarrápido",
    f1Desc: "Tus solicitudes se procesan al instante usando nuestra canalización optimizada.",
    f2Title: "Movimiento Hiperrealista",
    f2Desc: "Modelos entrenados para entender la física precisa y el movimiento cinematográfico.",
    f3Title: "Calidad Cinematográfica",
    f3Desc: "Los resultados son detallados, estables y perfectos para cualquier proyecto profesional.",
    f4Title: "Sin Marcas de Agua",
    f4Desc: "Los videos están completamente limpios y son tuyos para usar donde quieras.",
    faqTag: "PREGUNTAS FRECUENTES",
    faqTitle: "Preguntas frecuentes",
    faq1q: "¿Es realmente gratis y necesito registrarme?",
    faq1a: "¡Sí! No se requiere registro. Obtienes un límite diario de créditos gratis.",
    faq2q: "¿Hay marcas de agua en el video final?",
    faq2a: "Absolutamente no. Proporcionamos descargas de video 100% limpias.",
    faq3q: "¿Qué hace que un texto genere el mejor video?",
    faq3a: "¡Sé descriptivo! Menciona el sujeto, el entorno, la iluminación y el estilo de cámara."
  },
  fr: {
    heroTitle: "Donnez vie à vos idées avec",
    heroAccent: "Unmark Video Engine",
    heroSub: "Transformez instantanément n'importe quel texte en une vidéo cinématographique haute définition.",
    placeholder: "Décrivez votre scène... par ex. Une rue futuriste cyberpunk sous une forte pluie...",
    processing: "Réveil du moteur...",
    processingWait: "Connexion au cluster de rendu. Génération des images vidéo...",
    btnGenerate: "Générer la Vidéo",
    btnDownload: "Télécharger MP4",
    btnAddMore: "Créer une autre",
    badgeFree: "OUTIL IA GRATUIT",
    hiwTag: "FONCTIONNEMENT",
    hiwTitle: "Comment ça marche",
    hiwSub: "Trois étapes simples pour des vidéos IA cinématographiques.",
    s1Title: "Entrez votre texte",
    s1Desc: "Décrivez votre scène en détail. Incluez l'éclairage et les angles de caméra.",
    s2Title: "Rendu Cloud",
    s2Desc: "Nos serveurs traitent votre requête à l'aide d'un modèle 3D avancé.",
    s3Title: "Prêt à Télécharger",
    s3Desc: "Obtenez votre contenu IA prêt pour un usage professionnel en quelques secondes.",
    featTag: "FONCTIONNALITÉS",
    featTitle: "IA Vidéo Nouvelle Génération",
    f1Title: "Moteur Ultra Rapide",
    f1Desc: "Vos requêtes sont traitées instantanément via notre pipeline cloud optimisé.",
    f2Title: "Mouvement Hyper Réaliste",
    f2Desc: "Des modèles entraînés pour comprendre la physique et le mouvement cinématographique.",
    f3Title: "Qualité Cinématographique",
    f3Desc: "Les résultats sont détaillés et parfaits pour tout projet professionnel.",
    f4Title: "100% Sans Filigrane",
    f4Desc: "Les vidéos sont propres et vous pouvez les utiliser où vous voulez.",
    faqTag: "FAQ",
    faqTitle: "Questions fréquemment posées",
    faq1q: "Est-ce vraiment gratuit et dois-je m'inscrire ?",
    faq1a: "Oui ! Aucune inscription n'est requise. Vous obtenez une limite quotidienne de crédits gratuits.",
    faq2q: "Y a-t-il des filigranes sur la vidéo finale ?",
    faq2a: "Absolument pas. Nous fournissons des vidéos 100% propres.",
    faq3q: "Qu'est-ce qui fait un bon texte pour la meilleure vidéo ?",
    faq3a: "Soyez descriptif ! Mentionnez le sujet, l'environnement, l'éclairage et le style de caméra."
  }
};

const getTranslation = (langCode: string | undefined) => {
  const safeLang = (langCode || "en").toLowerCase();
  return T2V_DICT[safeLang as keyof typeof T2V_DICT] || T2V_DICT["en"];
};

const UPCOMING_TOOLS = [
  { name: "Image to Text", icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Image to Video", icon: PlaySquare, color: "text-sky-500", bg: "bg-sky-500/10" },
  { name: "AI Image Enhancer", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
];

// ==========================================
// 🚀 DEDICATED HOMEPAGE SEO ROUTE SETUP
// ==========================================
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free AI Text to Video Generator | No Signup - Unmark AI" },
      {
        name: "description",
        content: "Instantly convert your text into high-definition, cinematic AI videos. 100% free to use, completely watermark-free, and absolutely no signup required. Try Unmark AI's fast cloud rendering engine today!",
      },
      {
        name: "keywords",
        content: "Free AI text to video generator, text to video AI no signup, free cinematic video generator, watermark free AI video maker, text to mp4 online, AI animation generator free, create AI video from text, Unmark AI, next-gen AI video engine",
      },
      { name: "author", content: "Unmark AI" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Free AI Text to Video Generator | No Signup" },
      {
        property: "og:description",
        content: "Instantly convert your text into high-definition cinematic AI videos. 100% free to use, zero watermarks, and absolutely no signup required.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/" },
      { property: "og:site_name", content: "Unmark AI" },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png", 
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free AI Text to Video Generator | No Signup" },
      {
        name: "twitter:description",
        content: "Instantly convert your text into high-definition cinematic AI videos. 100% free to use, zero watermarks, and absolutely no signup required.",
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.unmark-ai.com/" }
    ],
  }),
  component: Index,
});

// ==========================================
// 🚀 INDEX WRAPPER (Providers & Meta)
// ==========================================
function Index() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Unmark AI Text to Video",
    "alternateName": "Unmark Video Engine",
    "url": "https://www.unmark-ai.com/",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "description": "100% Free to use, no signup required."
    },
    "description": "Instantly convert text into high-definition cinematic AI videos. Watermark-free and no signup required."
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <GlobalAdScripts />
        <TextToVideoPage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

// ─────────────────────────────────────────────────────────────
// 🚀 TEXT TO VIDEO MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
function TextToVideoPage() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9"); 
  const [durationNum, setDurationNum] = useState(5); 
  
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusText, setStatusText] = useState(vt.processing);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false); // 🔥 NEW: Spinner state for download
  
  // 🚀 Credit System State
  const [videosLeft, setVideosLeft] = useState(5);
  const [credits, setCredits] = useState(1.00);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 🚀 ASYNC MODAL BASE URL
  const MODAL_BASE_URL = "https://aliarshad0000777--ltx2-19b-cinematic-engine-web-api.modal.run";

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const stored = localStorage.getItem("unmark_t2v_limits");
    
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.date === today) {
        setVideosLeft(parsed.videos);
        setCredits(parsed.credits);
      } else {
        localStorage.setItem("unmark_t2v_limits", JSON.stringify({ date: today, videos: 5, credits: 1.00 }));
        setVideosLeft(5);
        setCredits(1.00);
      }
    } else {
      localStorage.setItem("unmark_t2v_limits", JSON.stringify({ date: today, videos: 5, credits: 1.00 }));
    }
  }, []);

  const clearTimers = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
  };

  const generateVideo = async () => {
    if (videosLeft <= 0) {
      setError("You have reached your daily limit of 5 videos. Please come back tomorrow for a refill!");
      return;
    }

    if (!prompt.trim()) {
      setError("Please describe the video you want to generate.");
      return;
    }

    setError(null);
    setResultUrl(null);
    setLoading(true);
    setProgress(0);
    setStatusText(vt.processing);

    clearTimers();

    try {
      const response = await fetch(`${MODAL_BASE_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, aspect_ratio: aspectRatio, duration: durationNum.toString() }),
      });

      if (!response.ok) {
        throw new Error("Failed to get a ticket from the server.");
      }

      const data = await response.json();
      const jobId = data.jobId;

      if (!jobId) {
        throw new Error("Server didn't return a valid ticket ID.");
      }

      setStatusText(vt.processingWait);

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 98) return 98; 
          return prev + 1; 
        });
      }, 1000); 

      pollIntervalRef.current = setInterval(async () => {
        try {
          const statusRes = await fetch(`${MODAL_BASE_URL}/status/${jobId}`);
          if (!statusRes.ok) return; 
          
          const statusData = await statusRes.json();

          if (statusData.status === "completed") {
            let finalVideoUrl = statusData.videoUrl;
            if (finalVideoUrl && finalVideoUrl.startsWith("/")) {
              finalVideoUrl = `${MODAL_BASE_URL}${finalVideoUrl}`;
            }

            clearTimers();
            setResultUrl(finalVideoUrl);
            setProgress(100);
            setStatusText("Done!");
            setLoading(false);

            const newVideosCount = Math.max(0, videosLeft - 1);
            const newCreditsValue = Math.max(0, credits - 0.20);
            setVideosLeft(newVideosCount);
            setCredits(newCreditsValue);
            
            const today = new Date().toLocaleDateString();
            localStorage.setItem("unmark_t2v_limits", JSON.stringify({ date: today, videos: newVideosCount, credits: newCreditsValue }));

          } else if (statusData.status === "failed") {
            clearTimers();
            setError(statusData.error || "Generation failed on the server.");
            setLoading(false);
          }
        } catch (pollErr) {
          console.error("Polling error:", pollErr);
        }
      }, 5000);

    } catch (err: any) {
      console.error("API Error caught:", err);
      clearTimers();
      setError(err.message || "Failed to connect to the cloud server.");
      setLoading(false);
    }
  };

  const reset = () => {
    clearTimers();
    setResultUrl(null);
    setPrompt("");
    setError(null);
    setProgress(0);
  };

  // 🔥 FULLY OPTIMIZED MOBILE + DOUBLE-CLICK SAFE DOWNLOAD LOGIC
  const handleDownload = async () => {
    if (!resultUrl || isDownloading) return;
    
    try {
      setIsDownloading(true);
      
      const response = await fetch(resultUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      a.download = `unmark-video-${Date.now()}.mp4`;
      document.body.appendChild(a);
      
      a.click();
      
      setTimeout(() => {
        a.remove();
        window.URL.revokeObjectURL(blobUrl);
      }, 2000);
      
    } catch (error) {
      console.warn("Blob method failed, using instant fallback:", error);
      const fallbackAnchor = document.createElement("a");
      fallbackAnchor.href = resultUrl;
      fallbackAnchor.download = `unmark-video-${Date.now()}.mp4`;
      fallbackAnchor.target = "_blank"; 
      document.body.appendChild(fallbackAnchor);
      fallbackAnchor.click();
      fallbackAnchor.remove();
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, []);

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
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full blur-[150px] bg-purple-500/10 dark:bg-purple-600/20" />

      {/* 🚀 HAMBURGER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] dark:bg-black/60" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl z-[70] shadow-2xl border-r border-slate-200 dark:border-white/10 flex flex-col">
              <div className="flex shrink-0 items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-700 text-white shadow-lg shadow-purple-500/30"><Clapperboard className="h-4 w-4" /></div>
                  <span className="text-lg font-bold tracking-tight">Unmark <span className="text-purple-600 dark:text-purple-500">AI</span></span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition"><X className="w-5 h-5 text-slate-500 dark:text-slate-400" /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <span className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Our Free Tools</span>
                <div className="flex flex-col gap-2">
                  
                  {/* 1. Text to Video (Homepage) */}
                  <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-purple-700 dark:text-purple-400"><Clapperboard className="h-4 w-4 text-purple-600" /> Text to Video</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </Link>

                  {/* 2. Text to Image */}
                  <Link to="/text-to-image" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200"><Type className="h-4 w-4 text-pink-500" /> Text to Image</div>
                  </Link>

                  {/* 3. Image Remover (Gemini Watermark) */}
                  <Link to="/watermark-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200"><ImageIcon className="h-4 w-4 text-blue-500" /> Image Remover</div>
                  </Link>

                  {/* 4. Video Remover */}
                  <Link to="/video-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200"><Film className="h-4 w-4 text-emerald-500" /> Video Remover</div>
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

      {/* NAVBAR */}
      <header className="sticky top-4 z-40 px-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
              <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </button>
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30">
                <Clapperboard className="h-4 w-4" />
              </div>
              <span className="text-base font-bold tracking-tight">Unmark <span className="text-purple-600 dark:text-purple-500">Video</span></span>
              <span className="ml-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">{vt.badgeFree}</span>
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

      <main className="relative mx-auto max-w-6xl px-4 pt-12 pb-24 sm:pt-20">
        
        <AdBanner728x90 />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-xs font-semibold text-purple-700 dark:text-purple-400 mb-6 shadow-sm">
            <Server className="w-3.5 h-3.5" /> Fast Cloud Engine
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {vt.heroTitle} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">{vt.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg px-2">
            {vt.heroSub}
          </p>
        </motion.div>

        <ToolSwitcher current="text-to-video" />

        {/* 🚀 PREMIUM GLASSMORPHIC UI */}
        <div className="relative mx-auto max-w-6xl mt-4">
          <AdNativeBanner />

          {/* 🌟 DAILY LIMIT BANNER */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-purple-200 dark:border-purple-500/20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 p-1 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-5 py-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-black/50 shadow-sm border border-slate-200 dark:border-white/5">
                  <BatteryCharging className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Daily Video Limit</h4>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">Resets automatically every 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-black/40 px-4 py-2 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-inner w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Remaining</span>
                  <span className="text-sm sm:text-base font-black text-purple-600 dark:text-purple-400">{videosLeft} / 5 Videos</span>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Credits</span>
                  <span className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400">${credits.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/60 bg-white/50 p-3 sm:p-4 lg:p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/80">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              
              {/* LEFT PANEL: CONTROLS */}
              <div className="w-full lg:w-[420px] shrink-0 flex flex-col gap-4 sm:gap-6 rounded-2xl bg-white p-4 sm:p-6 border border-slate-100 shadow-sm dark:border-white/5 dark:bg-[#111]">
                
                {error && (
                  <div className="flex items-center gap-3 rounded-xl bg-red-50 p-3 sm:p-4 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    <p className="text-xs sm:text-sm font-medium">{error}</p>
                    <button onClick={() => setError(null)} className="ml-auto"><X className="h-4 w-4" /></button>
                  </div>
                )}

                <div className="space-y-3">
                  <label className="text-xs font-extrabold tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Type className="w-4 h-4 text-purple-500" /> VIDEO PROMPT
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={vt.placeholder}
                    className="w-full h-28 sm:h-32 resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-sm sm:text-base text-slate-900 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-white/10 dark:bg-black/50 dark:text-white dark:focus:border-purple-500 dark:focus:ring-purple-500/20 transition-all shadow-inner custom-scrollbar"
                  />
                </div>

                {/* ASPECT RATIO */}
                <div className="space-y-3">
                  <label className="text-xs font-extrabold tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Settings2 className="w-4 h-4 text-purple-500" /> ASPECT RATIO
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["16:9", "9:16", "1:1"].map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setAspectRatio(ratio)}
                        className={`w-full px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 border ${
                          aspectRatio === ratio
                            ? "bg-purple-50 border-purple-500 text-purple-600 shadow-sm dark:bg-purple-500/20 dark:border-purple-500/50 dark:text-purple-400"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-[#1a1a1a] dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5"
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 🔥 DYNAMIC DURATION SLIDER */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-500" /> DURATION
                    </label>
                    <span className="text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-200 dark:border-purple-500/20">
                      {durationNum} Seconds
                    </span>
                  </div>
                  
                  <input 
                    type="range" 
                    min="1" 
                    max="6" 
                    step="1"
                    value={durationNum}
                    onChange={(e) => setDurationNum(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-white/10 accent-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1">
                    <span>1s</span><span>2s</span><span>3s</span><span>4s</span><span>5s</span><span>6s</span>
                  </div>
                </div>

                <button 
                  onClick={generateVideo} 
                  disabled={loading || videosLeft <= 0}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-purple-500/25 transition-all hover:scale-[1.02] hover:shadow-purple-500/40 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {loading ? (
                    <><Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" /> Processing...</>
                  ) : videosLeft <= 0 ? (
                    <><Clock className="h-4 w-4 sm:h-5 sm:w-5" /> Limit Reached</>
                  ) : (
                    <><Sparkles className="h-4 w-4 sm:h-5 sm:w-5" /> {vt.btnGenerate} (-$0.20)</>
                  )}
                </button>
              </div>

              {/* RIGHT PANEL: VIDEO PLAYER */}
              <div className="flex-1 flex flex-col rounded-2xl bg-slate-50/50 border border-slate-200 dark:border-white/10 dark:bg-black/30 overflow-hidden relative min-h-[300px] sm:min-h-[450px] lg:min-h-[550px]">
                
                {!loading && !resultUrl && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-4 sm:p-6 text-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mb-4 sm:mb-6 rounded-3xl sm:rounded-[2rem] bg-purple-50 dark:bg-purple-500/5 flex items-center justify-center border border-purple-100 dark:border-purple-500/10 shadow-sm relative">
                      <Video className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 dark:text-purple-500/40" />
                      <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-indigo-500 text-white text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full border-2 border-white dark:border-[#0a0a0a]">PRO</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-300">Cinematic Canvas</h3>
                    <p className="mt-2 max-w-[250px] sm:max-w-sm text-xs sm:text-sm">Enter your prompt on the left and hit generate. Your AI generated video will be rendered live here.</p>
                  </div>
                )}

                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-white/60 dark:bg-black/60 backdrop-blur-md z-10">
                    <div className="relative mb-6 sm:mb-8">
                      <div className="absolute inset-0 rounded-full blur-xl bg-purple-500/20 animate-pulse" />
                      <Server className="h-10 w-10 sm:h-14 sm:w-14 animate-pulse text-purple-600 dark:text-purple-500 relative z-10" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-100">{statusText}</h3>
                    
                    <div className="mt-6 sm:mt-8 w-full max-w-[250px] sm:max-w-md">
                      <div className="flex justify-between text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">
                        <span>Cloud Rendering</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-2.5 sm:h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10 shadow-inner">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 ease-out rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>
                )}

                {resultUrl && (
                  <div className="flex flex-col h-full w-full">
                    <div className="flex-1 flex items-center justify-center p-3 sm:p-6 lg:p-8 relative bg-black/5 dark:bg-black/40">
                      {resultUrl.match(/\.(mp4|webm)$/i) || resultUrl.includes("/video/") || resultUrl.startsWith("data:video") ? (
                         <video src={resultUrl} autoPlay loop controls playsInline className="w-full h-auto max-h-[300px] sm:max-h-[600px] object-contain drop-shadow-2xl rounded-lg relative z-10" />
                      ) : (
                         <img src={resultUrl} alt="Generated Content" className="w-full h-auto max-h-[300px] sm:max-h-[600px] object-contain drop-shadow-2xl rounded-lg relative z-10" />
                      )}
                    </div>
                    
                    <div className="shrink-0 bg-white border-t border-slate-200 dark:bg-[#0a0a0a] dark:border-white/5 p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-between items-center">
                        <button 
                          onClick={handleDownload} 
                          disabled={isDownloading}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 sm:py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-purple-700 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                        >
                          {isDownloading ? <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" /> : <Download className="h-4 w-4 sm:h-5 sm:w-5" />} 
                          {isDownloading ? "Downloading..." : vt.btnDownload}
                        </button>
                        <button onClick={reset} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-3.5 sm:py-2.5 text-sm font-bold text-white transition-all hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-slate-200">
                          <Plus className="h-4 w-4 sm:h-5 sm:w-5" /> {vt.btnAddMore}
                        </button>
                      </div>

                      <div className="mt-4 sm:mt-6 flex justify-center w-full overflow-hidden rounded-xl">
                        <AdBanner300x250 />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 mb-8">
          <AdBanner728x90 />
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-12 sm:mt-16 border-t border-slate-200/50 pt-16 sm:pt-24 dark:border-white/5">
          <div className="mb-10 sm:mb-16 text-center">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">{vt.hiwTag}</span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{vt.hiwTitle}</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">{vt.hiwSub}</p>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-3">
            {[
              { icon: Type, title: vt.s1Title, desc: vt.s1Desc },
              { icon: Server, title: vt.s2Title, desc: vt.s2Desc },
              { icon: Download, title: vt.s3Title, desc: vt.s3Desc },
            ].map((step, i) => (
              <div key={i} className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-[#111]">
                <div className="mb-4 sm:mb-6 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"><step.icon className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-bold">{step.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-20 sm:mt-32 rounded-3xl bg-slate-900 px-4 py-16 sm:px-16 sm:py-24 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at center, #a855f7 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-purple-400">{vt.featTag}</span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">{vt.featTitle}</h2>
            <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-8 sm:grid-cols-2 text-left">
              {[
                { icon: Zap, title: vt.f1Title, desc: vt.f1Desc },
                { icon: Server, title: vt.f2Title, desc: vt.f2Desc },
                { icon: Frame, title: vt.f3Title, desc: vt.f3Desc },
                { icon: ShieldCheck, title: vt.f4Title, desc: vt.f4Desc },
              ].map((feat, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-4 rounded-2xl bg-white/5 p-5 sm:p-6 border border-white/10 backdrop-blur-sm">
                  <div className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400"><feat.icon className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                  <div>
                    <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-bold text-white">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO ARTICLE */}
        <section className="relative mx-auto max-w-4xl px-2 sm:px-4 mt-20 sm:mt-32 text-slate-600 dark:text-slate-400">
          <div className="prose prose-slate dark:prose-invert max-w-none text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Free AI Text to Video Generator Online (No Signup Required)</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Welcome to Unmark AI's latest masterpiece: a highly advanced, lightning-fast <strong>AI Text-to-Video generator</strong>. Designed for creators, marketers, and storytellers, our platform allows you to convert mere words into dynamic, cinematic video clips effortlessly. The best part? There is absolutely zero signup process to slow you down.
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 mt-6 sm:mt-8">Create Cinematic AI Videos Instantly</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Experience the true power of enterprise-grade video generation right from your browser. We leverage massive, heavily optimized cloud architectures to ensure your prompts are translated into stable, high-definition animations. Every video you create is completely free of annoying watermarks, giving you full control over your creative vision.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <div className="mx-auto mt-20 sm:mt-32 max-w-3xl">
          <div className="mb-8 sm:mb-12 text-center">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">{vt.faqTag}</span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{vt.faqTitle}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 bg-white px-4 sm:px-6 py-2 shadow-sm dark:border-white/10 dark:bg-[#111]">
            {[
              { q: vt.faq1q, a: vt.faq1a, val: "item-1" },
              { q: vt.faq2q, a: vt.faq2a, val: "item-2" },
              { q: vt.faq3q, a: vt.faq3a, val: "item-3" },
            ].map((faq) => (
              <AccordionItem key={faq.val} value={faq.val} className="border-b-slate-100 dark:border-b-white/5 last:border-0">
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4 sm:py-6 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-4 sm:pb-6 leading-relaxed text-xs sm:text-sm">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </main>
      <Footer />
    </div>
  );
}