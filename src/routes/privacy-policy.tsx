import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n"; // 👈 Yahan LanguageProvider import kiya hai
import { Footer } from "@/components/landing-sections"; 

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
});

export function PrivacyPolicyPage() {
  return (
    <ThemeProvider>
      {/* 👈 Yahan LanguageProvider ka wrapper lagaya hai */}
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
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: theme === "dark" ? "#1f2937" : "#cbd5e1",
          maskImage: "radial-gradient(ellipse at top center, black 40%, transparent 80%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-[120px] bg-blue-500/10 dark:bg-blue-600/10" />

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

      <main className="relative mx-auto max-w-3xl px-4 pt-16 pb-24 sm:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
            Last updated: June 24, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Local Processing & Media Privacy</h2>
              <p>At Unmark AI, we prioritize your privacy above all else. Our core service (Video and Image Watermark Removal) operates entirely as a client-side application. This means:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>We <strong>do not</strong> upload, store, or transmit your videos or images to any external servers.</li>
                <li>All AI inpainting and processing calculations happen locally utilizing your device's browser and hardware.</li>
                <li>Once you close the browser tab, all processed data is instantly cleared from memory.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">2. Google AdSense & Cookies</h2>
              <p>To keep our services 100% free forever, Unmark AI uses third-party advertising companies, including Google, to serve ads when you visit our website.</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
                <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Ads Settings</a>.</li>
              </ul>
              <p className="mt-4">These cookies do not track personal information about you, such as your name, email address, physical address, or telephone number.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">3. Log Files and Analytics</h2>
              <p>Like standard web servers, we may use log files or basic analytics tools to monitor website performance. This includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, and date/time stamps. This data is not linked to any information that is personally identifiable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Consent</h2>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Contact Us</h2>
              <p>If you have any questions or require more information about our Privacy Policy, do not hesitate to contact us through our platform.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}