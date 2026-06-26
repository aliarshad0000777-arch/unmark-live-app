import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },

      /* --- GLOBAL FALLBACK SEO --- */
      { title: "Unmark AI | Free AI Watermark Remover Tools" },
      {
        name: "description",
        content:
          "The ultimate suite of free AI tools to seamlessly remove watermarks from Google Gemini images and Veo videos. 100% free, private, and lightning-fast.",
      },
      {
        name: "keywords",
        content:
          "AI watermark remover, free watermark remover, remove Gemini watermark, remove Veo video watermark, clean AI images, Unmark AI",
      },
      { name: "author", content: "Unmark AI" },
      { name: "robots", content: "index, follow" },

      /* --- OPEN GRAPH (SOCIAL MEDIA SEO) --- */
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Unmark AI | Free AI Watermark Remover Tools" },
      { property: "og:description", content: "The ultimate suite of free AI tools to seamlessly remove watermarks from Google Gemini images and Veo videos. 100% free, private, and lightning-fast." },
      { property: "og:url", content: "https://www.unmark-ai.com" },
      { property: "og:site_name", content: "Unmark AI" },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },

      /* --- TWITTER CARDS --- */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Unmark AI | Free AI Watermark Remover Tools" },
      {
        name: "twitter:description",
        content:
          "The ultimate suite of free AI tools to seamlessly remove watermarks from Google Gemini images and Veo videos. 100% free, private, and lightning-fast.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dec8f95a-ef5e-4572-804a-ee910b2879ae/id-preview-5bbfc39b--81eed2ad-8689-4c48-8e24-475a3806bec4.lovable.app-1781780839087.png",
      },
    ],
    links: [
      /* --- GLOBAL CANONICAL URL --- */
      { rel: "canonical", href: "https://www.unmark-ai.com" },

      /* --- FORCE GOOGLE TO UPDATE FAVICON (CACHE BUSTING) --- */
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=2" },
      { rel: "shortcut icon", type: "image/svg+xml", href: "/favicon.svg?v=2" },
      { rel: "apple-touch-icon", href: "/favicon.svg?v=2" },

      /* --- STYLESHEET --- */
      { rel: "stylesheet", href: appCss },
      
      /* --- GOOGLE ADSENSE PRECONNECT SCRIPT --- */
      { rel: "preconnect", href: "https://pagead2.googlesyndication.com" },
    ],
    scripts: [
      /* --- GOOGLE ADSENSE VERIFICATION SCRIPT --- */
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1857120699307089",
        async: true,
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}