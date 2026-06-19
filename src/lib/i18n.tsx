import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Lang = "EN" | "ES" | "FR";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "FR", label: "Français" },
];

type Dict = {
  nav: { badge: string };
  hero: { title: string; accent: string; subtitle: string };
  dropzone: { title: string; browse: string; hint: string; loading: string };
  toggle: { before: string; after: string };
  btn: {
    download: string;
    copy: string;
    copied: string;
    zip: string;
    addMore: string;
    advanced: string;
  };
  how: {
    tag: string;
    title: string;
    subtitle: string;
    step: string;
    steps: { title: string; desc: string }[];
  };
  features: {
    tag: string;
    title: string;
    privacy: { title: string; desc: string };
    free: { title: string; desc: string };
    quality: { title: string; desc: string };
    ratio: { title: string; desc: string };
  };
  faq: { tag: string; title: string; items: { q: string; a: string }[] };
  footer: {
    copy: string;
    privacy: string;
    terms: string;
    contact: string;
    github: string;
  };
  legal: {
    close: string;
    privacy: { title: string; body: string[] };
    terms: { title: string; body: string[] };
  };
};

const EN: Dict = {
  nav: { badge: "Pro App" },
  hero: {
    title: "Remove watermarks in",
    accent: "one click",
    subtitle:
      "AI-powered cleanup that preserves every pixel of detail. 100% private — runs in your browser.",
  },
  dropzone: {
    title: "Drop image here or",
    browse: "browse",
    hint: "PNG, JPG, WebP — processed locally",
    loading: "Reconstructing pixels…",
  },
  toggle: { before: "Before", after: "After" },
  btn: {
    download: "Free download",
    copy: "Copy image",
    copied: "Copied!",
    zip: "Download ZIP",
    addMore: "Add more",
    advanced: "Try advanced AI watermark removal",
  },
  how: {
    tag: "Workflow",
    title: "How it works",
    subtitle: "Three steps. No accounts. No uploads to a server.",
    step: "Step",
    steps: [
      { title: "Upload your image", desc: "Drop a PNG, JPG, or WebP — any aspect ratio works." },
      { title: "Auto-magic processing", desc: "Runs 100% locally with our smart micro-scaling engine." },
      { title: "Download in high-res", desc: "Get a pixel-perfect, watermark-free image instantly." },
    ],
  },
  features: {
    tag: "Why Unmark",
    title: "Built for creators who care",
    privacy: {
      title: "Absolute privacy",
      desc: "Every pixel is processed directly in your browser. Your images never leave your device — no uploads, no servers, no tracking.",
    },
    free: { title: "100% Free", desc: "No paywall, no limits, no signup." },
    quality: { title: "No quality loss", desc: "Smart micro-scaling preserves every pixel of detail." },
    ratio: {
      title: "Every aspect ratio",
      desc: "Portrait, landscape, square — the engine adapts automatically to give you a clean frame every time.",
    },
  },
  faq: {
    tag: "FAQ",
    title: "Frequently asked",
    items: [
      { q: "Is it really free?", a: "Yes — Unmark is 100% free forever. No signup, no credit card, no hidden limits." },
      { q: "Are my images safe?", a: "Absolutely. Everything runs locally in your browser. No data is sent to our servers — your images never leave your device." },
      { q: "Does it reduce image quality?", a: "No. We use a smart micro-scaling technique to preserve 100% of the original pixels while removing the watermark." },
    ],
  },
  footer: {
    copy: "© 2026 Unmark. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    github: "GitHub",
  },
  legal: {
    close: "Close",
    privacy: {
      title: "Privacy Policy",
      body: [
        "Last updated: June 19, 2026.",
        "Unmark is a fully client-side application. We do not collect, store, transmit, or share any of the images you process. All operations happen locally in your browser, and no data is ever uploaded to a remote server.",
        "We do not use cookies, analytics, or third-party trackers that personally identify you. Anonymous, aggregate performance metrics may be collected to improve the product.",
        "Because no personal data leaves your device, there is nothing for us to sell, share, or breach. If you have questions about this policy, please reach out through the Contact link.",
      ],
    },
    terms: {
      title: "Terms of Service",
      body: [
        "Last updated: June 19, 2026.",
        "By using Unmark, you agree to use the service responsibly and only on images you own or are authorized to modify. You are solely responsible for ensuring your use complies with applicable laws and platform terms.",
        "Unmark is provided “as is”, without warranties of any kind. We are not liable for any damages arising from the use of the tool or the processed images.",
        "We may update these terms at any time. Continued use after changes constitutes acceptance of the revised terms.",
      ],
    },
  },
};

const ES: Dict = {
  nav: { badge: "App Pro" },
  hero: {
    title: "Elimina marcas de agua en",
    accent: "un clic",
    subtitle:
      "Limpieza con IA que conserva cada detalle. 100% privado — se ejecuta en tu navegador.",
  },
  dropzone: {
    title: "Suelta la imagen aquí o",
    browse: "examina",
    hint: "PNG, JPG, WebP — procesado localmente",
    loading: "Reconstruyendo píxeles…",
  },
  toggle: { before: "Antes", after: "Después" },
  btn: {
    download: "Descarga gratis",
    copy: "Copiar imagen",
    copied: "¡Copiado!",
    zip: "Descargar ZIP",
    addMore: "Añadir más",
    advanced: "Prueba la eliminación con IA avanzada",
  },
  how: {
    tag: "Flujo",
    title: "Cómo funciona",
    subtitle: "Tres pasos. Sin cuentas. Sin subir archivos a un servidor.",
    step: "Paso",
    steps: [
      { title: "Sube tu imagen", desc: "Arrastra un PNG, JPG o WebP — cualquier proporción funciona." },
      { title: "Procesamiento automático", desc: "100% local con nuestro motor de micro-escalado inteligente." },
      { title: "Descarga en alta resolución", desc: "Obtén una imagen sin marca de agua, pixel-perfect, al instante." },
    ],
  },
  features: {
    tag: "Por qué Unmark",
    title: "Hecho para creadores exigentes",
    privacy: {
      title: "Privacidad absoluta",
      desc: "Cada píxel se procesa directamente en tu navegador. Tus imágenes nunca salen de tu dispositivo — sin subidas, sin servidores, sin rastreo.",
    },
    free: { title: "100% Gratis", desc: "Sin muros de pago, sin límites, sin registro." },
    quality: { title: "Sin pérdida de calidad", desc: "El micro-escalado conserva cada detalle." },
    ratio: {
      title: "Cualquier proporción",
      desc: "Retrato, paisaje, cuadrado — el motor se adapta automáticamente para darte un cuadro limpio cada vez.",
    },
  },
  faq: {
    tag: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Es realmente gratis?", a: "Sí — Unmark es 100% gratis para siempre. Sin registro, sin tarjeta, sin límites ocultos." },
      { q: "¿Mis imágenes están seguras?", a: "Totalmente. Todo se ejecuta en tu navegador. No enviamos datos a servidores — tus imágenes nunca salen de tu dispositivo." },
      { q: "¿Reduce la calidad de la imagen?", a: "No. Usamos micro-escalado inteligente para conservar el 100% de los píxeles originales." },
    ],
  },
  footer: {
    copy: "© 2026 Unmark. Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
    contact: "Contacto",
    github: "GitHub",
  },
  legal: {
    close: "Cerrar",
    privacy: {
      title: "Política de privacidad",
      body: [
        "Última actualización: 19 de junio de 2026.",
        "Unmark es una aplicación totalmente del lado del cliente. No recopilamos, almacenamos, transmitimos ni compartimos las imágenes que procesas. Todo ocurre localmente en tu navegador.",
        "No usamos cookies ni rastreadores de terceros que te identifiquen personalmente. Podríamos recopilar métricas anónimas de rendimiento para mejorar el producto.",
        "Como ningún dato personal sale de tu dispositivo, no hay nada que vender, compartir ni filtrar. Si tienes preguntas, contáctanos mediante el enlace de Contacto.",
      ],
    },
    terms: {
      title: "Términos del servicio",
      body: [
        "Última actualización: 19 de junio de 2026.",
        "Al usar Unmark aceptas hacerlo de forma responsable y solo con imágenes que te pertenezcan o que estés autorizado a modificar.",
        "Unmark se proporciona “tal cual”, sin garantías de ningún tipo. No somos responsables de los daños derivados del uso.",
        "Podemos actualizar estos términos en cualquier momento. El uso continuado tras los cambios implica su aceptación.",
      ],
    },
  },
};

const FR: Dict = {
  nav: { badge: "App Pro" },
  hero: {
    title: "Supprimez les filigranes en",
    accent: "un clic",
    subtitle:
      "Nettoyage par IA qui préserve chaque pixel. 100% privé — fonctionne dans votre navigateur.",
  },
  dropzone: {
    title: "Déposez l’image ici ou",
    browse: "parcourir",
    hint: "PNG, JPG, WebP — traité localement",
    loading: "Reconstruction des pixels…",
  },
  toggle: { before: "Avant", after: "Après" },
  btn: {
    download: "Téléchargement gratuit",
    copy: "Copier l’image",
    copied: "Copié !",
    zip: "Télécharger ZIP",
    addMore: "Ajouter",
    advanced: "Essayer la suppression IA avancée",
  },
  how: {
    tag: "Processus",
    title: "Comment ça marche",
    subtitle: "Trois étapes. Sans compte. Sans envoi vers un serveur.",
    step: "Étape",
    steps: [
      { title: "Importez votre image", desc: "Déposez un PNG, JPG ou WebP — tout format fonctionne." },
      { title: "Traitement automatique", desc: "100% local grâce à notre moteur de micro-mise à l’échelle." },
      { title: "Téléchargez en haute résolution", desc: "Obtenez une image sans filigrane, parfaite au pixel près." },
    ],
  },
  features: {
    tag: "Pourquoi Unmark",
    title: "Pensé pour les créateurs exigeants",
    privacy: {
      title: "Confidentialité absolue",
      desc: "Chaque pixel est traité directement dans votre navigateur. Vos images ne quittent jamais votre appareil — pas d’envoi, pas de serveur, pas de suivi.",
    },
    free: { title: "100% Gratuit", desc: "Sans paywall, sans limite, sans inscription." },
    quality: { title: "Sans perte de qualité", desc: "Le micro-scaling préserve chaque détail." },
    ratio: {
      title: "Tout format",
      desc: "Portrait, paysage, carré — le moteur s’adapte automatiquement pour un rendu propre à chaque fois.",
    },
  },
  faq: {
    tag: "FAQ",
    title: "Questions fréquentes",
    items: [
      { q: "Est-ce vraiment gratuit ?", a: "Oui — Unmark est 100% gratuit pour toujours. Sans inscription, sans carte, sans limite cachée." },
      { q: "Mes images sont-elles en sécurité ?", a: "Absolument. Tout s’exécute dans votre navigateur. Aucune donnée n’est envoyée à nos serveurs." },
      { q: "Cela réduit-il la qualité ?", a: "Non. Notre micro-scaling préserve 100% des pixels d’origine." },
    ],
  },
  footer: {
    copy: "© 2026 Unmark. Tous droits réservés.",
    privacy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    contact: "Contact",
    github: "GitHub",
  },
  legal: {
    close: "Fermer",
    privacy: {
      title: "Politique de confidentialité",
      body: [
        "Dernière mise à jour : 19 juin 2026.",
        "Unmark est une application entièrement côté client. Nous ne collectons, ne stockons et ne partageons aucune des images que vous traitez. Tout se passe localement dans votre navigateur.",
        "Nous n’utilisons pas de cookies ni de traceurs tiers permettant de vous identifier. Des métriques anonymes peuvent être collectées pour améliorer le produit.",
        "Aucune donnée personnelle ne quittant votre appareil, il n’y a rien à vendre, partager ou divulguer. Contactez-nous via le lien Contact pour toute question.",
      ],
    },
    terms: {
      title: "Conditions d’utilisation",
      body: [
        "Dernière mise à jour : 19 juin 2026.",
        "En utilisant Unmark, vous acceptez de l’utiliser de manière responsable et uniquement sur des images vous appartenant ou que vous êtes autorisé à modifier.",
        "Unmark est fourni « tel quel », sans garantie d’aucune sorte. Nous ne sommes pas responsables des dommages liés à son utilisation.",
        "Nous pouvons mettre à jour ces conditions à tout moment. L’utilisation continue après modification vaut acceptation.",
      ],
    },
  },
};

const DICTS: Record<Lang, Dict> = { EN, ES, FR };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  const value = useMemo<Ctx>(() => ({ lang, setLang, t: DICTS[lang] }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
