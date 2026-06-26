import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, AlertCircle, FileText, UserCheck } from 'lucide-react';
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import { Footer } from "@/components/landing-sections"; 

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: "Terms of Service | Unmark AI" },
      { 
        name: "description", 
        content: "Read the Terms of Service for Unmark AI. Understand your responsibilities, copyright rules, and service agreements for using our free AI tools." 
      },
      /* --- OPEN GRAPH (SOCIAL SEO) --- */
      { property: "og:title", content: "Terms of Service | Unmark AI" },
      { property: "og:description", content: "Read the Terms of Service for Unmark AI. Understand your responsibilities, copyright rules, and service agreements for using our free AI tools." },
      /* Yahan www. add kar diya gaya hai */
      { property: "og:url", content: "https://www.unmark-ai.com/terms" },
      /* --- ROBOTS INSTRUCTION --- */
      { name: "robots", content: "index, follow" }
    ],
    links: [
      /* --- CANONICAL URL (PREVENTS DUPLICATE CONTENT ISSUES) --- */
      /* Yahan www. add kar diya gaya hai */
      { rel: "canonical", href: "https://www.unmark-ai.com/terms" }
    ]
  }),
  component: TermsPage,
});

export function TermsPage() {
  return (
    <ThemeProvider>
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
      
      {/* Premium Background Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: theme === "dark" ? "#1f2937" : "#cbd5e1",
          maskImage: "radial-gradient(ellipse at top center, black 40%, transparent 80%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-[120px] bg-indigo-500/10 dark:bg-indigo-600/10" />

      {/* Navigation Header */}
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

      {/* Main Content */}
      <main className="relative mx-auto max-w-3xl px-4 pt-16 pb-24 sm:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
            Effective Date: June 25, 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-10 text-base leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <FileText className="w-6 h-6 text-indigo-500" /> 1. Acceptance of Terms
              </h2>
              <p>By accessing and using the Unmark AI website and its associated tools, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must immediately discontinue your use of our services.</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">2. Description of Service</h2>
              <p>Unmark AI provides state-of-the-art AI-powered tools designed to remove watermarks from digital media. Our service is provided "as is" and is 100% free for users. The architecture includes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Image Tools:</strong> Operated entirely within your browser's local cache.</li>
                <li><strong>Video Tools:</strong> Processed via our secure backend servers with a strict zero-retention policy (files are immediately deleted post-processing).</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-emerald-500" /> 3. User Responsibilities & Copyright
              </h2>
              <p>You are solely responsible for the media you process using Unmark AI. By utilizing our tools, you explicitly agree and warrant that:</p>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 mt-4 dark:border-white/10 dark:bg-white/5">
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>You possess the necessary legal rights, licenses, or permissions to modify the images or videos you process.</li>
                  <li>You will not use Unmark AI to infringe upon the copyrights, trademarks, or intellectual property rights of any third party.</li>
                  <li>You will not use the service for any illegal, harmful, deceptive, or malicious purposes.</li>
                  <li>Unmark AI and its developers hold zero liability for copyright infringement or misuse of processed media by end-users.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Disclaimer of Warranties</h2>
              <p>While our AI models (including those optimized for Google Gemini and Veo content) are highly advanced, exact results may vary depending on the complexity, resolution, and format of the source media. Unmark AI does not guarantee pixel-perfect generation in every scenario. The tools and website are provided strictly on an "as available" basis without any warranties, express or implied.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" /> 5. Limitation of Liability
              </h2>
              <p>In no event shall Unmark AI, its developers, or affiliates be held liable for any indirect, incidental, special, consequential, or punitive damages. This includes, without limitation, loss of profits, data, use, goodwill, or other intangible losses arising directly or indirectly from your access to or use of the service.</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Modifications to Terms</h2>
              <p>We reserve the right to modify or replace these Terms of Service at any given time without prior notice. Continued use of the platform after any such changes constitutes your consent to such changes. What constitutes a material change will be determined at our sole discretion.</p>
            </section>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}