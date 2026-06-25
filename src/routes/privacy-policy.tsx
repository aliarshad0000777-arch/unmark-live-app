import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, ServerCrash } from 'lucide-react';
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import { Footer } from "@/components/landing-sections"; 

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Unmark AI" },
      { 
        name: "description", 
        content: "Read the Unmark AI Privacy Policy. Learn about our secure processing, zero-retention video server rules, and 100% local image processing." 
      },
      { property: "og:title", content: "Privacy Policy | Unmark AI" },
    ],
  }),
  component: PrivacyPolicyPage,
});

export function PrivacyPolicyPage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PrivacyContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function PrivacyContent() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 transition-colors">
      
      {/* Premium Background Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: theme === "dark" ? "#1f2937" : "#cbd5e1",
          maskImage: "radial-gradient(ellipse at top center, black 40%, transparent 80%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-[120px] bg-blue-500/10 dark:bg-blue-600/10" />

      {/* Navigation Header */}
      <header className="sticky top-4 z-40 px-4">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="font-bold tracking-tight">Unmark AI</span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-3xl px-4 pt-16 pb-24 sm:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
            Effective Date: June 25, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-10 text-base leading-relaxed">
            
            {/* Section 1: Crucial Media Privacy Updates */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-blue-500" /> 1. Data Security & Media Processing
              </h2>
              <p>At Unmark AI, transparency and user privacy are our highest priorities. Because we offer both Image and Video processing tools, your media is handled using different architectures to ensure maximum security and performance:</p>
              
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
                    <EyeOff className="w-4 h-4 text-emerald-500" /> Image Remover
                  </div>
                  <p className="text-sm">Operates <strong>100% locally</strong> within your browser cache. Your images are never uploaded, stored, or transmitted to any external server. All AI inpainting calculations happen on your hardware.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
                    <ServerCrash className="w-4 h-4 text-purple-500" /> Video Remover
                  </div>
                  <p className="text-sm">Due to heavy computational needs, videos are temporarily securely transmitted to our backend server. We maintain a strict <strong>Zero-Retention Policy</strong>. Videos are immediately deleted after processing. We never store or use your files.</p>
                </div>
              </div>
            </section>

            {/* Section 2: AdSense & Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">2. Google AdSense & Cookies</h2>
              <p>To keep Unmark AI 100% free and accessible to everyone, we use third-party advertising networks, specifically Google AdSense, to display non-intrusive ads when you visit our website.</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites.</li>
                <li>Google's use of advertising cookies enables it and its partners to serve ads tailored to you based on your browsing history.</li>
                <li>You can easily opt out of personalized advertising by visiting the <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Google Ads Settings</a> page.</li>
              </ul>
              <p className="mt-3">These cookies are strictly used for advertising rendering and do not track sensitive personal information such as your name, email address, physical address, or phone number.</p>
            </section>

            {/* Section 3: Analytics */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">3. Log Files & Standard Analytics</h2>
              <p>Following standard industry practices, Unmark AI utilizes basic log files and modern analytics tools (such as Vercel Analytics) to monitor website health and performance. The information logged includes internet protocol (IP) addresses, browser types, Internet Service Providers (ISP), date and time stamps, and referring/exit pages. This data is entirely anonymized and is not linked to any personally identifiable information.</p>
            </section>

            {/* Section 4: Consent */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Your Consent</h2>
              <p>By utilizing the Unmark AI website and its tools, you hereby consent to this Privacy Policy and explicitly agree to its terms and conditions.</p>
            </section>

            {/* Section 5: Contact */}
            <section className="rounded-2xl border border-slate-200 bg-slate-100 p-6 dark:border-white/10 dark:bg-white/[0.02]">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">5. Contact Us</h2>
              <p className="text-sm">If you require any more information or have any questions regarding our Privacy Policy, please feel free to reach out to us at our official contact channels listed in the footer.</p>
            </section>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}