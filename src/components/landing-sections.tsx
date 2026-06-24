import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Upload,
  Wand2,
  Download,
  ShieldCheck,
  Sparkles,
  Gauge,
  Frame,
  Github,
  ChevronDown,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LANGUAGES, useI18n } from "@/lib/i18n";

const STEP_ICONS = [Upload, Wand2, Download];

export function HowItWorks() {
  const { t } = useI18n();
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
      <div className="mb-12 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {t.how.tag}
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.how.title}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-500 dark:text-slate-400">
          {t.how.subtitle}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {t.how.steps.map((s, i) => {
          const Icon = STEP_ICONS[i];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <Icon className="h-4 w-4" />
              </div>
              <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {t.how.step} {i + 1}
              </div>
              <div className="text-sm font-semibold">{s.title}</div>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function Features() {
  const { t } = useI18n();
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {t.features.tag}
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.features.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-2">
        <div className="sm:col-span-2 sm:row-span-2 group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.01]">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight">{t.features.privacy.title}</h3>
          <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
            {t.features.privacy.desc}
          </p>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
            <Sparkles className="h-4 w-4" />
          </div>
          <h3 className="mt-4 text-base font-semibold">{t.features.free.title}</h3>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            {t.features.free.desc}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
            <Gauge className="h-4 w-4" />
          </div>
          <h3 className="mt-4 text-base font-semibold">{t.features.quality.title}</h3>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            {t.features.quality.desc}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02] sm:col-span-3">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <Frame className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{t.features.ratio.title}</h3>
              <p className="mt-1.5 max-w-md text-sm text-slate-500 dark:text-slate-400">
                {t.features.ratio.desc}
              </p>
            </div>
            <div className="hidden gap-2 sm:flex">
              {["9:16", "1:1", "4:3", "16:9"].map((r) => (
                <div
                  key={r}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 text-[10px] font-medium text-slate-500 dark:border-white/10 dark:text-slate-400"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const { t } = useI18n();
  return (
    <section className="relative mx-auto max-w-3xl px-4 py-20 sm:py-28">
      <div className="mb-10 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {t.faq.tag}
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{t.faq.title}</h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02]"
      >
        {t.faq.items.map((it, i) => (
          <AccordionItem
            key={it.q}
            value={`item-${i}`}
            className={
              i === t.faq.items.length - 1
                ? "border-0 px-5"
                : "border-b border-slate-200 px-5 dark:border-white/10"
            }
          >
            <AccordionTrigger className="text-sm font-medium hover:no-underline">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-500 dark:text-slate-400">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  const linkClass =
    "inline-flex items-center gap-1.5 text-xs text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white";
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <Sparkles className="h-3 w-3" />
          </div>
          {t.footer.copy}
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {/* AdSense Standard Links */}
          <Link to="/privacy-policy" className={linkClass}>
            {t.footer.privacy}
          </Link>
          <Link to="/terms" className={linkClass}>
            {t.footer.terms}
          </Link>
          <a href="mailto:ahmedlagend786@gmail.com" className={linkClass}>
            {t.footer.contact}
          </a>
          <a
            href="https://github.com/aliarshad0000777-arch"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <Github className="h-3.5 w-3.5" />
            {t.footer.github}
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
        aria-label="Switch language"
      >
        {current.code}
        <ChevronDown className="h-3 w-3 opacity-60" />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg dark:border-white/10 dark:bg-[#0b0b0b] dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onMouseDown={(e) => {
                e.preventDefault();
                setLang(l.code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <span>
                <span className="font-medium">{l.code}</span>
                <span className="ml-2 text-slate-400 dark:text-slate-500">{l.label}</span>
              </span>
              {lang === l.code && <Check className="h-3.5 w-3.5 text-blue-500" />}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}