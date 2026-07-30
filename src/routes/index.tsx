import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { WatermarkRemover } from "@/components/watermark-remover";
import { LanguageProvider } from "@/lib/i18n";
import { useEffect } from "react";

// --- PROFESSIONAL GLOBAL AD INJECTOR FOR SPA ---
// Ye component ensure karega ke aapke sabhi ads safely inject hon 
// aur React hydration ya page routing ke doran crash na hon.
const GlobalAdScripts = () => {
  useEffect(() => {
    // ==========================================
    // 1. ADSTERRA SOCIAL BAR AD SCRIPT
    // ==========================================
    const socialScriptSrc = "//pl30342756.effectivecpmnetwork.com/39/08/28/39082802d3120406758973a8b6e5b23b.js";
    
    // Check agar Social script pehle se injected hai to dubara na kare
    if (!document.querySelector(`script[src="${socialScriptSrc}"]`)) {
      const socialScript = document.createElement("script");
      socialScript.type = "text/javascript";
      socialScript.src = socialScriptSrc;
      socialScript.async = true;
      document.body.appendChild(socialScript);
    }

    // ==========================================
    // 2. ADCASH MAIN LIBRARY SCRIPT (Engine)
    // ==========================================
    // Ye file dono Video Slider aur Interstitial ads ko chalane ke liye zaroori hai.
    // Isey hum <head> mein place kar rahe hain as per Adcash recommendation.
    if (!document.getElementById("aclib")) {
      const aclibScript = document.createElement("script");
      aclibScript.id = "aclib";
      aclibScript.type = "text/javascript";
      aclibScript.src = "//acscdn.com/script/aclib.js";
      aclibScript.async = true;
      document.head.appendChild(aclibScript);
    }

    // ==========================================
    // 3. ADCASH VIDEO SLIDER & INTERSTITIAL TAGS
    // ==========================================
    // Hum dono tags ko ek hi block mein run kar rahe hain for maximum performance.
    if (!document.getElementById("adcash-tags")) {
      const adcashTags = document.createElement("script");
      adcashTags.id = "adcash-tags";
      adcashTags.type = "text/javascript";
      
      // React mein inline JS chalane ka professional tareeqa
      adcashTags.innerHTML = `
        window.aclib = window.aclib || [];
        
        // Trigger Video Slider Ad (Bottom Floating Video)
        aclib.runVideoSlider({
            zoneId: '11799942',
        });

        // Trigger Interstitial Ad (Full Screen Overlay)
        aclib.runInterstitial({
            zoneId: '11799974',
        });
      `;
      // Ad execution script hamesha <body> mein aani chahiye
      document.body.appendChild(adcashTags);
    }

    return () => {};
  }, []);

  return null;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      /* --- HIGHLY OPTIMIZED SEO TITLE --- */
      { title: "Gemini Watermark Remover | Free & No Sign-up" },

      /* --- POWERFUL DESCRIPTION FOR HIGHER CTR --- */
      {
        name: "description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },

      /* --- ENHANCED HIGH-RANKING KEYWORDS --- */
      {
        name: "keywords",
        content:
          "Gemini watermark remover, Nano Banana Star Watermark Remover, free AI watermark remover, remove Star logo online, no signup, unlimited AI Watermark eraser, remove text from image free, clean watermark AI, picture object remover, AI image cleaner, erase logo from photo, 100% free watermark tool, Ai video Enhancer, Ai image enhancer, Text to image, Text to video, Image to video, Image to text, Google veo, Google Omni, Ai video generator, Unmark-ai",
      },

      /* --- AUTHOR & ADVANCED CRAWLER INSTRUCTIONS --- */
      { name: "author", content: "Unmark AI" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

      /* --- SOCIAL MEDIA (OPEN GRAPH) TAGS --- */
      { property: "og:title", content: "Gemini Watermark Remover | Free & No Sign-up" },
      {
        property: "og:description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.unmark-ai.com/" },
      { property: "og:site_name", content: "Unmark AI" },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },

      /* --- TWITTER CARDS --- */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gemini Watermark Remover | Free & No Sign-up" },
      {
        name: "twitter:description",
        content:
          "Easily remove Gemini watermarks, Nano Banana logos, and text from images online. 100% free, unlimited use, and no sign-up required. Try Unmark AI now!",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },
    ],
    links: [
      /* --- EXPLICIT CANONICAL URL --- */
      { rel: "canonical", href: "https://www.unmark-ai.com/" }
    ],
  }),
  component: Index,
});

function Index() {
  // 🚀 SEO: FORCE GOOGLE TO REGISTER YOUR BRAND NAME AS "UNMARK AI"
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Unmark AI",
    "alternateName": "Unmark",
    "url": "https://www.unmark-ai.com/"
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        
        {/* 🚀 JSON-LD SCHEMA INJECTION */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* Global Injector (Handles Adsterra Social Bar + Adcash Interstitial & Video Ads) */}
        <GlobalAdScripts />
        
        <WatermarkRemover />
      </LanguageProvider>
    </ThemeProvider>
  );
}