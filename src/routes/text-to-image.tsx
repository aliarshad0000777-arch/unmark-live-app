"use client";

import { createFileRoute, Link } from '@tanstack/react-router';
import { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Sun, Moon, Sparkles, UploadCloud, Loader2, Menu, Film, Download,
  Image as ImageIcon, Wand2, ShieldCheck, Gauge, Frame, CheckCircle2, AlertTriangle, X, ChevronRight, Copy, FileArchive, Plus, ArrowRight,
  Type, FileText, Clapperboard, PlaySquare, Zap, Lock, RefreshCw, Palette
} from "lucide-react";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider, useI18n } from "@/lib/i18n";
import { Footer, LanguageSwitcher } from "@/components/landing-sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// 🚀 TANSTACK ROUTER REGISTRATION WITH HIGH-END SEO
export const Route = createFileRoute('/text-to-image')({
  head: () => ({
    meta: [
      { title: "Free AI Text to Image Generator | Unlimited Generation, No Sign-Up Needed" },
      { name: "description", content: "Transform your words into stunning, high-fidelity AI art with our free online text-to-image generator powered by advanced cloud engines. 100% free, unlimited, and private!" },
      { name: "keywords", content: "AI image generator, text to image AI, free AI art generator, generate images from text, Unmark AI, create AI art online, stable diffusion free, AI picture maker" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Unmark AI" },
      { property: "og:title", content: "Free AI Text to Image Generator | Unlimited Generation, No Sign-Up Needed" },
      { property: "og:description", content: "Turn your imagination into reality. Generate ultra-realistic AI images from text for free with zero limits." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/text-to-image" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free AI Text to Image Generator | Unlimited Generation, No Sign-Up Needed" },
      { name: "twitter:description", content: "Turn your imagination into reality. Generate ultra-realistic AI images from text for free with zero limits." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.unmark-ai.com/text-to-image" }
    ]
  }),
  component: TextToImage,
});

// ==========================================
// 📢 ADSTERRA AD COMPONENTS
// ==========================================

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

function AdBanner300x250() {
  return (
    <div className="flex justify-center items-center w-full min-h-[250px] my-4 overflow-hidden">
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

// ==========================================
// 🚀 SEO INTERNAL LINKING TABS
// ==========================================
function ToolSwitcher({ current }: { current: 'image' | 'video' | 'text-to-image' }) {
  return (
    <div className="flex justify-center mb-8 relative z-20">
      <div className="inline-flex items-center flex-wrap justify-center gap-1 p-1 sm:p-1.5 bg-slate-200/50 dark:bg-white/5 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md max-w-full overflow-x-auto custom-scrollbar">
        <Link to="/" className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${current === 'image' ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <ImageIcon className="w-4 h-4" /> Image
        </Link>
        <Link to="/video-remover" className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${current === 'video' ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Film className="w-4 h-4" /> Video
        </Link>
        <Link to="/text-to-image" className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${current === 'text-to-image' ? 'bg-white dark:bg-pink-600 text-pink-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'}`}>
          <Sparkles className="w-4 h-4 shrink-0" /> <span className="whitespace-nowrap">Text to Image</span>
          <span className="absolute -top-2 -right-1 sm:-right-2 flex h-5 items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-1.5 text-[9px] font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400 animate-pulse">New</span>
        </Link>
      </div>
    </div>
  );
}

// ==========================================
// 🌍 MULTI-LANGUAGE DICTIONARY (FULLY PROFESSIONAL)
// ==========================================
const TEXT_TO_IMAGE_DICT = {
  en: {
    heroTitle: "Transform your words into",
    heroAccent: "stunning AI art",
    heroSub: "Professional-grade Text-to-Image generator powered by our advanced cloud engine. Create ultra-realistic, high-fidelity images directly in your browser.",
    placeholder: "Describe what you want to see... e.g. A majestic lion sitting on a neon-lit cyberpunk street.",
    btnGenerate: "Generate Image",
    processing: "Generating AI Image...",
    processingSub: "Our neural network is painting your masterpiece. This usually takes 15-30 seconds.",
    btnDownload: "Download",
    btnCopy: "Copy",
    btnCopied: "Copied!",
    btnZip: "Save as ZIP",
    btnAddMore: "Create Another",
    badgeFree: "100% FREE",
    menuImage: "Image Watermark Remover",
    menuVideo: "Video Watermark Remover",
    menuTextToImage: "Text to Image Generator",
    hiwTag: "WORKFLOW",
    hiwTitle: "How it works",
    hiwSub: "Three simple steps. Limitless creativity. Instant results.",
    s1Title: "Enter Prompt",
    s1Desc: "Describe your imagination in detail. Our natural language processor will understand exactly what you need.",
    s2Title: "Cloud AI Generation",
    s2Desc: "Our advanced proprietary AI engine synthesizes your image in high definition matching your exact aspect ratio.",
    s3Title: "Save & Share",
    s3Desc: "Download your crystal-clear, uncompressed image instantly with zero quality degradation.",
    featTag: "ENGINEERED FOR CREATORS",
    featTitle: "Limitless AI Creativity",
    f1Title: "Smart Image Processing",
    f1Desc: "Our system intelligently interprets your prompts to guarantee stunning, high-resolution outputs every single time.",
    f2Title: "100% Free Forever",
    f2Desc: "No subscriptions, no hidden paywalls, and absolutely no limits on how many images you can generate.",
    f3Title: "Private & Secure",
    f3Desc: "Your text prompts and generated images are completely private and processed securely through our SSL architecture.",
    f4Title: "Perfect Aspect Ratios",
    f4Desc: "Natively generates square (1:1), cinematic (16:9), and mobile-friendly vertical (9:16) resolutions without stretching.",
    faqTag: "FAQ",
    faqTitle: "Frequently asked questions",
    faq1q: "Is it really free and unlimited?",
    faq1a: "Yes! We believe in accessible AI tools for creators. You can generate as many high-quality images as you need without any hidden fees or subscriptions.",
    faq2q: "How does the AI generation work?",
    faq2a: "Our advanced cloud-based AI engine analyzes your text prompt and synthesizes a unique, high-definition image from scratch in a matter of seconds.",
    faq3q: "Why does it take 15-30 seconds?",
    faq3a: "We process your images in ultra-high resolution without compressing the final output. This high-fidelity rendering requires a few extra seconds of processing time to ensure maximum quality.",
    popupTitle: "New Feature",
    popupDesc: "Try our new AI Video Watermark Remover for free!"
  },
  es: {
    heroTitle: "Transforma tus palabras en",
    heroAccent: "arte de IA impresionante",
    heroSub: "Generador profesional de Texto a Imagen impulsado por nuestro avanzado motor en la nube. Crea imágenes ultrarrealistas directamente en tu navegador.",
    placeholder: "Describe lo que quieres ver... ej. Un león majestuoso en una calle cyberpunk.",
    btnGenerate: "Generar Imagen",
    processing: "Generando Imagen con IA...",
    processingSub: "Nuestra red neuronal está pintando tu obra maestra. Esto suele tardar 15-30 segundos.",
    btnDownload: "Descargar",
    btnCopy: "Copiar",
    btnCopied: "¡Copiado!",
    btnZip: "Guardar ZIP",
    btnAddMore: "Crear Otra",
    badgeFree: "100% GRATIS",
    menuImage: "Eliminador (Imagen)",
    menuVideo: "Eliminador (Video)",
    menuTextToImage: "Generador de Texto a Imagen",
    hiwTag: "FLUJO DE TRABAJO",
    hiwTitle: "Cómo funciona",
    hiwSub: "Tres simples pasos. Creatividad ilimitada. Resultados instantáneos.",
    s1Title: "Ingresa tu Prompt",
    s1Desc: "Describe tu imaginación. Nuestro procesador de lenguaje entenderá exactamente lo que necesitas.",
    s2Title: "Generación en la Nube",
    s2Desc: "Nuestro motor de IA avanzado sintetiza tu imagen en alta definición coincidiendo con tu relación de aspecto.",
    s3Title: "Guarda y Comparte",
    s3Desc: "Descarga tu imagen nítida al instante sin perder resolución.",
    featTag: "DISEÑADO PARA CREADORES",
    featTitle: "Creatividad Ilimitada",
    f1Title: "Procesamiento Inteligente",
    f1Desc: "Nuestro sistema interpreta inteligentemente tus prompts para garantizar resultados impresionantes.",
    f2Title: "Completamente Gratis",
    f2Desc: "Sin suscripciones ni límites en la cantidad de imágenes que puedes generar.",
    f3Title: "Privado y Seguro",
    f3Desc: "Tus prompts e imágenes generadas son completamente privados.",
    f4Title: "Formatos Perfectos",
    f4Desc: "Genera resoluciones cuadradas (1:1), cinematográficas (16:9) y verticales (9:16) sin estiramientos.",
    faqTag: "PREGUNTAS",
    faqTitle: "Preguntas frecuentes",
    faq1q: "¿Es realmente gratis e ilimitado?",
    faq1a: "¡Sí! Creemos en la IA accesible para todos. Puedes generar tantas imágenes como necesites sin tarifas ocultas.",
    faq2q: "¿Cómo funciona la generación de IA?",
    faq2a: "Nuestro avanzado motor de IA en la nube analiza tu texto y sintetiza una imagen única en alta definición desde cero.",
    faq3q: "¿Por qué tarda 15-30 segundos?",
    faq3a: "Procesamos tus imágenes en ultra alta resolución sin comprimir. Este renderizado de alta fidelidad requiere unos segundos extra.",
    popupTitle: "Nueva Función",
    popupDesc: "¡Prueba nuestro nuevo Eliminador de Marcas de Video con IA gratis!"
  },
  fr: {
    heroTitle: "Transformez vos mots en",
    heroAccent: "art IA époustouflant",
    heroSub: "Générateur professionnel de Texte en Image propulsé par notre moteur cloud avancé. Créez des images ultra-réalistes directement dans votre navigateur.",
    placeholder: "Décrivez ce que vous voulez voir... ex: Un lion majestueux dans une rue cyberpunk.",
    btnGenerate: "Générer",
    processing: "Génération IA...",
    processingSub: "Notre réseau de neurones peint votre chef-d'œuvre. Cela prend généralement 15-30 secondes.",
    btnDownload: "Télécharger",
    btnCopy: "Copier",
    btnCopied: "Copié !",
    btnZip: "ZIP",
    btnAddMore: "Créer une autre",
    badgeFree: "100% GRATUIT",
    menuImage: "Suppresseur (Image)",
    menuVideo: "Suppresseur (Vidéo)",
    menuTextToImage: "Générateur Texte en Image",
    hiwTag: "FLUX DE TRAVAIL",
    hiwTitle: "Comment ça marche",
    hiwSub: "Trois étapes simples. Créativité illimitée.",
    s1Title: "Entrez votre Prompt",
    s1Desc: "Décrivez votre imagination. Notre processeur comprendra exactement ce dont vous avez besoin.",
    s2Title: "Génération Cloud IA",
    s2Desc: "Notre moteur IA avancé génère votre image en haute définition selon votre format.",
    s3Title: "Sauvegardez",
    s3Desc: "Téléchargez votre image instantanément sans perte de qualité.",
    featTag: "POUR LES CRÉATEURS",
    featTitle: "Créativité IA Illimitée",
    f1Title: "Traitement Intelligent",
    f1Desc: "Notre système interprète intelligemment vos textes pour des résultats garantis.",
    f2Title: "Totalement Gratuit",
    f2Desc: "Pas d'abonnement, pas de limites sur le nombre d'images.",
    f3Title: "Privé & Sécurisé",
    f3Desc: "Vos textes et images générées restent privés.",
    f4Title: "Formats Parfaits",
    f4Desc: "Génère des formats carrés (1:1), paysage (16:9) et portrait (9:16) sans déformation.",
    faqTag: "FAQ",
    faqTitle: "Questions fréquentes",
    faq1q: "Est-ce vraiment gratuit et illimité ?",
    faq1a: "Oui ! Nous croyons en une IA accessible à tous. Vous pouvez générer autant d'images que vous le souhaitez sans frais cachés.",
    faq2q: "Comment fonctionne la génération IA ?",
    faq2a: "Notre moteur IA avancé analyse votre texte et synthétise une image unique en haute définition en quelques secondes.",
    faq3q: "Pourquoi cela prend-il 15-30 secondes ?",
    faq3a: "Nous traitons vos images en très haute résolution sans compression. Ce rendu haute fidélité nécessite quelques secondes supplémentaires.",
    popupTitle: "Nouvelle Fonctionnalité",
    popupDesc: "Essayez notre nouveau suppresseur vidéo IA gratuitement !"
  }
};

const getTranslation = (langCode: string | undefined) => {
  const safeLang = (langCode || "en").toLowerCase();
  return { ...TEXT_TO_IMAGE_DICT["en"], ...(TEXT_TO_IMAGE_DICT[safeLang as keyof typeof TEXT_TO_IMAGE_DICT] || {}) };
};

const UPCOMING_TOOLS = [
  { name: "Image to Text", icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Text to Video", icon: Clapperboard, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Image to Video", icon: PlaySquare, color: "text-sky-500", bg: "bg-sky-500/10" },
  { name: "AI Image Enhancer", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "AI Video Enhancer", icon: Wand2, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
];

export function TextToImage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TextToImagePage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function TextToImagePage() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useI18n();
  const vt = getTranslation(lang);
  
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // 🚀 SMARTLINK TRIGGER
  const triggerSmartlink = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.effectivecpmnetwork.com/wxpd3qmr1?key=2e44c931ff39db8328abbdb5a0862867", "_blank", "noopener,noreferrer");
    }
  };

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError("Please describe what you want to see.");
      return;
    }

    setError(null);
    setResultUrl(null);
    setLoading(true);
    setProgress(0);

    const safeEnhancedPrompt = `${prompt.trim()}, highly detailed, 8k resolution`;

    let width = 1024, height = 1024;
    if (aspectRatio === '16:9') { width = 1024; height = 576; }
    if (aspectRatio === '9:16') { width = 576; height = 1024; }

    try {
      const payload = {
        prompt: safeEnhancedPrompt,
        params: {
          sampler_name: "k_euler", 
          cfg_scale: 7,
          width: width,
          height: height,
          steps: 25, 
        },
        nsfw: false,
        censor_nsfw: true,
        models: ["AlbedoBase XL (SDXL)"] 
      };

      const submitResponse = await fetch("https://stablehorde.net/api/v2/generate/async", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "0000000000"
        },
        body: JSON.stringify(payload)
      });

      if (!submitResponse.ok) {
        throw new Error("AI Servers are very busy. Please try again.");
      }

      const submitData = await submitResponse.json();
      const jobId = submitData.id;

      if (!jobId) throw new Error("Failed to initialize generation.");

      let currentProgress = 0;
      progressIntervalRef.current = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 8) + 2;
        if (currentProgress >= 95) currentProgress = 95;
        setProgress(currentProgress);
      }, 1000);

      let isDone = false;
      let attempts = 0;
      
      while (!isDone && attempts < 40) { 
        await new Promise(resolve => setTimeout(resolve, 3500));
        attempts++;

        const statusResponse = await fetch(`https://stablehorde.net/api/v2/generate/status/${jobId}`);
        const statusData = await statusResponse.json();

        if (statusData.faulted) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          throw new Error("The AI model failed to generate this image. Try another prompt.");
        }

        if (statusData.done || statusData.finished === 1) {
          isDone = true;
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          
          setProgress(100);
          setTimeout(() => {
            setResultUrl(statusData.generations[0].img);
            setLoading(false);
          }, 800);
          return;
        }
      }

      if (!isDone) {
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        throw new Error("Generation timed out. Server is too busy right now.");
      }

    } catch (e: any) {
      console.error(e);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setError(e.message || "Something went wrong with the AI Engine.");
      setLoading(false);
      setProgress(0);
    }
  };

  const reset = () => {
    triggerSmartlink();
    setResultUrl(null);
    setPrompt("");
    setError(null);
    setProgress(0);
  };

  // 🚀 FIXED: Download completes first, then Adsterra opens
  const handleDownload = async () => {
    if (!resultUrl) return;
    try {
      const response = await fetch(resultUrl);
      const blob = await response.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "unmark-ai-art.jpg";
      document.body.appendChild(a);
      a.click();
      a.remove();
      
      // Fire smartlink immediately after the download initiates
      triggerSmartlink();
    } catch (e) {
      console.error("Download failed", e);
    }
  };

  const handleCopy = async () => {
    if (!resultUrl) return;
    try {
      const response = await fetch(resultUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
      
      // Fire smartlink after copy completes
      triggerSmartlink();
    } catch (e) {
      setError("Clipboard access denied by browser.");
    }
  };

  const handleDownloadZip = () => {
    handleDownload(); // This naturally fires the smartlink as updated above
  };

  // 🚀 SEO: STRUCTURED DATA (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Unmark AI Text-to-Image Generator",
    "url": "https://www.unmark-ai.com/text-to-image",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "description": "Free online AI art generator that transforms text prompts into high-quality, ultra-realistic images using advanced cloud engines.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 transition-colors overflow-x-hidden">
      
      {/* 🚀 SEO: Inject Structured Data for Force Indexing */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: theme === "dark" ? "#1f2937" : "#cbd5e1",
          maskImage: "radial-gradient(ellipse at top center, black 40%, transparent 80%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full blur-[150px] bg-pink-500/10 dark:bg-pink-600/20" />

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
                  <Link to="/" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400"><ImageIcon className="h-4 w-4" /></div>{vt.menuImage}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/video-remover" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><Film className="h-4 w-4" /></div>{vt.menuVideo}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/text-to-image" onClick={() => setMenuOpen(false)} className="group flex items-center justify-between p-3 rounded-xl bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-pink-500/20 transition">
                    <div className="flex items-center gap-3 text-sm font-medium text-pink-700 dark:text-pink-400">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-pink-500/20 text-pink-600 dark:text-pink-400"><Sparkles className="h-4 w-4" /></div>{vt.menuTextToImage}
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
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

      <header className="sticky top-4 z-40 px-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition">
              <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </button>
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/30"><Sparkles className="h-4 w-4" /></div>
              <span className="text-base font-bold tracking-tight">Unmark <span className="text-pink-600 dark:text-pink-500">Image</span></span>
              <span className="ml-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">{vt.badgeFree}</span>
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

      <main className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 sm:pt-24">
        
        <AdBanner728x90 />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 text-xs font-semibold text-pink-700 dark:text-pink-400 mb-6 shadow-sm">
            <Wand2 className="w-3.5 h-3.5" /> High-Fidelity AI Image Generation
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {vt.heroTitle} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-700 bg-clip-text text-transparent">{vt.heroAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">{vt.heroSub}</p>
        </motion.div>

        <ToolSwitcher current="text-to-image" />

        {/* 🚀 OPTIMIZED FOR MOBILE: Fixed padding & layouts */}
        <div className="relative mx-auto max-w-6xl mt-4">
          <AdNativeBanner />

          <div className="rounded-3xl border border-slate-200/60 bg-white/50 p-3 sm:p-4 lg:p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/80 mt-6">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              
              {/* LEFT PANEL: CONTROLS */}
              <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-4 sm:gap-6 rounded-2xl bg-white p-4 sm:p-6 border border-slate-100 shadow-sm dark:border-white/5 dark:bg-[#111]">
                
                {error && (
                  <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">{error}</p>
                    <button onClick={() => setError(null)} className="ml-auto"><X className="h-4 w-4" /></button>
                  </div>
                )}

                <div className="space-y-3 flex-1">
                  <label className="text-xs font-extrabold tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-500" /> YOUR PROMPT
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={vt.placeholder}
                    className="w-full h-32 sm:h-40 resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-base text-slate-900 focus:border-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-500/10 dark:border-white/10 dark:bg-black/50 dark:text-white dark:focus:border-pink-500 dark:focus:ring-pink-500/20 transition-all shadow-inner custom-scrollbar"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-extrabold tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Frame className="w-4 h-4 text-pink-500" /> ASPECT RATIO
                  </label>
                  <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200 dark:bg-black/40 dark:border-white/10 w-full">
                    {(['1:1', '16:9', '9:16'] as const).map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setAspectRatio(ratio)}
                        className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${aspectRatio === ratio ? 'bg-white text-pink-600 shadow-sm dark:bg-white/10 dark:text-pink-400' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={generateImage} 
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 px-4 py-4 text-base font-bold text-white shadow-xl shadow-pink-500/25 transition-all hover:scale-[1.02] hover:shadow-pink-500/40 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {loading ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Generating...</>
                  ) : (
                    <><Sparkles className="h-5 w-5" /> {vt.btnGenerate}</>
                  )}
                </button>
              </div>

              {/* RIGHT PANEL: OUTPUT CANVAS */}
              <div className="flex-1 flex flex-col rounded-2xl bg-slate-50/50 border border-slate-200 dark:border-white/10 dark:bg-black/30 overflow-hidden relative min-h-[300px] sm:min-h-[400px] lg:min-h-[550px]">
                
                {!loading && !resultUrl && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-6 text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-[2rem] bg-pink-50 dark:bg-pink-500/5 flex items-center justify-center border border-pink-100 dark:border-pink-500/10 shadow-sm">
                      <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-pink-400 dark:text-pink-500/40" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">AI Canvas</h3>
                    <p className="mt-2 max-w-sm text-sm">Enter your prompt on the left and hit generate. Your masterpiece will appear here.</p>
                  </div>
                )}

                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center bg-white/60 dark:bg-black/60 backdrop-blur-md z-10">
                    <div className="relative mb-6 sm:mb-8">
                      <div className="absolute inset-0 rounded-full blur-xl bg-pink-500/20 animate-pulse" />
                      <RefreshCw className="h-12 w-12 sm:h-14 sm:w-14 animate-spin text-pink-600 dark:text-pink-500 relative z-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">{vt.processing}</h3>
                    
                    <div className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-md">
                      <div className="flex justify-between text-sm font-bold text-pink-600 dark:text-pink-400 mb-2">
                        <span>Generating Model</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10 shadow-inner">
                        <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-[1000ms] ease-out rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>
                )}

                {resultUrl && (
                  <div className="flex flex-col h-full w-full">
                    <div className="flex-1 flex items-center justify-center p-3 sm:p-8 relative">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
                        <img src={resultUrl} alt="background blur" className="w-full h-full object-cover blur-3xl" />
                      </div>
                      <img src={resultUrl} alt="Generated AI Art" className="w-full h-auto max-h-[450px] sm:max-h-[600px] object-contain drop-shadow-2xl rounded-lg relative z-10" />
                    </div>
                    
                    <div className="shrink-0 bg-white border-t border-slate-200 dark:bg-[#0a0a0a] dark:border-white/5 p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-between items-center">
                        <div className="flex flex-row w-full sm:w-auto justify-center gap-2 sm:gap-3">
                          <button onClick={handleDownload} className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-4 sm:px-5 py-3 sm:py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-pink-700">
                            <Download className="h-4 w-4" /> {vt.btnDownload}
                          </button>
                          <button onClick={handleCopy} className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 sm:px-5 py-3 sm:py-2.5 text-sm font-bold text-slate-700 border border-slate-200 transition-all hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">
                            {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                            {copied ? vt.btnCopied : vt.btnCopy}
                          </button>
                          <button onClick={handleDownloadZip} className="hidden sm:flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 border border-slate-200 transition-all hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10">
                            <FileArchive className="h-4 w-4" /> {vt.btnZip}
                          </button>
                        </div>
                        <button onClick={reset} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 sm:px-5 py-3 sm:py-2.5 text-sm font-bold text-white transition-all hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-slate-200">
                          <Plus className="h-4 w-4" /> {vt.btnAddMore}
                        </button>
                      </div>

                      <div className="mt-6 flex justify-center w-full overflow-hidden rounded-xl">
                        <AdBanner300x250 />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8">
          <AdBanner728x90 />
        </div>

        <div className="mt-16 border-t border-slate-200/50 pt-24 dark:border-white/5">
          <div className="mb-16 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-pink-600 dark:text-pink-400">{vt.hiwTag}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{vt.hiwTitle}</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{vt.hiwSub}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Sparkles, title: vt.s1Title, desc: vt.s1Desc },
              { icon: UploadCloud, title: vt.s2Title, desc: vt.s2Desc },
              { icon: Download, title: vt.s3Title, desc: vt.s3Desc },
            ].map((step, i) => (
              <div key={i} className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111]">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400"><step.icon className="h-6 w-6" /></div>
                <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 rounded-3xl bg-slate-900 px-6 py-24 text-center sm:px-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at center, #ec4899 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400">{vt.featTag}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{vt.featTitle}</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 text-left">
              {[
                { icon: Wand2, title: vt.f1Title, desc: vt.f1Desc },
                { icon: Zap, title: vt.f2Title, desc: vt.f2Desc },
                { icon: ShieldCheck, title: vt.f3Title, desc: vt.f3Desc },
                { icon: ImageIcon, title: vt.f4Title, desc: vt.f4Desc },
              ].map((feat, i) => (
                <div key={i} className="flex gap-4 rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-sm">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400"><feat.icon className="h-6 w-6" /></div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{feat.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SeoArticleSection />

        <div className="mx-auto mt-32 max-w-3xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-pink-600 dark:text-pink-400">{vt.faqTag}</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{vt.faqTitle}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-2 shadow-sm dark:border-white/10 dark:bg-[#111]">
            {[
              { q: vt.faq1q, a: vt.faq1a, val: "item-1" },
              { q: vt.faq2q, a: vt.faq2a, val: "item-2" },
              { q: vt.faq3q, a: vt.faq3a, val: "item-3" },
            ].map((faq) => (
              <AccordionItem key={faq.val} value={faq.val} className="border-b-slate-100 dark:border-b-white/5 last:border-0">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-6 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">{faq.q}</AccordionTrigger>
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

// ─────────────────────────────────────────────────────────────
// 🚀 COMPONENT: SEO CONTENT SECTION
// ─────────────────────────────────────────────────────────────
function SeoArticleSection() {
  return (
    <section className="relative mx-auto max-w-4xl px-4 mt-32 text-slate-600 dark:text-slate-400">
      <div className="prose prose-slate dark:prose-invert max-w-none text-center sm:text-left">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Best Free AI Text to Image Generator Online</h2>
        <p className="mb-6 leading-relaxed">
          Welcome to Unmark AI's latest innovation: a completely free, unlimited <strong>AI image generator</strong>. Whether you are an artist looking for inspiration, a marketer needing quick assets, or just a creator exploring the digital frontier, our tool empowers you to <em>generate images from text</em> effortlessly. Powered by the incredibly advanced <strong>AlbedoBase XL</strong> engine, we guarantee high-fidelity, photorealistic, and cinematic outputs that rival premium paid software.
        </p>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 mt-8">Create AI Art Instantly Without Limits</h3>
        <p className="leading-relaxed">
          Forget about daily credits, hidden paywalls, or restrictive subscriptions. Our <strong>text to image AI</strong> tool is supported by a community-driven network, allowing you to create stunning artwork in multiple aspect ratios (1:1, 16:9, and 9:16) completely free of charge. Experience the true power of an <em>unblocked AI image generator</em> and turn your imagination into high-resolution reality today.
        </p>
      </div>
    </section>
  );
}