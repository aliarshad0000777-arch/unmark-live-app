import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale } from 'lucide-react';
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n"; // 👈 Added
import { Footer } from "@/components/landing-sections"; 

export const Route = createFileRoute('/terms')({
  component: TermsPage,
});

export function TermsPage() {
  return (
    <ThemeProvider>
      {/* 👈 Language Wrapper Added */}
      <LanguageProvider>
        <TermsContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function TermsContent() {
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
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-[120px] bg-indigo-500/10 dark:bg-indigo-600/10" />

      <header className="sticky top-4 z-40 px-4">
        <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]/70">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-500" />
            <span className="font-bold tracking-tight">Unmark AI</span>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-3xl px-4 pt-16 pb-24 sm:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
            Last updated: June 24, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using Unmark AI, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">2. Description of Service</h2>
              <p>Unmark AI provides browser-based, AI-powered tools for removing watermarks from digital media (images and videos). The service is provided "as is" and is 100% free for personal and professional use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">3. User Responsibilities</h2>
              <p>You are solely responsible for the media you process using Unmark AI. By using our tool, you agree that:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>You have the necessary rights, licenses, or permissions to modify the media you upload.</li>
                <li>You will not use the service for illegal, harmful, or malicious purposes.</li>
                <li>You will not attempt to reverse-engineer, disrupt, or overload the Unmark AI website infrastructure.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Disclaimer of Warranties</h2>
              <p>While our AI models are highly advanced, results may vary depending on the complexity of the media. Unmark AI does not guarantee pixel-perfect results in every scenario. The tool is provided without any warranties, express or implied.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Limitation of Liability</h2>
              <p>In no event shall Unmark AI or its developers be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising from your use of the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}