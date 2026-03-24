import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-10 overflow-hidden bg-[#050816]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-[110px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/25 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 lg:gap-14 items-center"
        >
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] font-semibold tracking-tight text-slate-50">
                {t("greeting")} {" "}
                <span className="underline underline-offset-8 decoration-sky-400/80 decoration-2">
                 <br /> Pavao Dombaj
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {t("description")}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-slate-50 text-slate-900 px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg:white transition"
                >
                  {t("viewProjectsButton")}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-400/80 hover:text-sky-200 transition"
                >
                  {t("contactButton")}
                </a>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <a
                  href="https://github.com/PavaoDombaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="rounded-full border border-transparent p-2 transition hover:border-slate-600 hover:text-sky-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="rounded-full border border-transparent p-2 transition hover:border-slate-600 hover:text-sky-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300"
            >
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">{t("stack")}</p>
                <p>React, Next.js, Tailwind CSS</p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">{t("focus")}</p>
                <p>Clean UI, performance, accessibility</p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">{t("location")}</p>
                <p>Croatia · Remote friendly</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="max-w-lg w-full rounded-3xl border border-sky-300/30 bg-slate-950/70 backdrop-blur-xl p-5 sm:p-6 lg:p-7 shadow-[0_20px_70px_rgba(8,47,73,0.9)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-sky-200/80 mb-1">{t("featuredProject")}</p>
                <p className="text-sm font-semibold text-slate-50">{t("genapplyTitle")}</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-200 border border-emerald-400/40">
                {t("inProduction")}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 text-[11px] text-slate-200/90">
              <div className="rounded-2xl border border-sky-400/25 bg-sky-950/40 p-3">
                <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-sky-200/80">{t("aboutProject")}</p>
                <p>AI-powered resume builder with live editor, Strapi backend, PostgreSQL and custom Docker + Nginx deployment.</p>
              </div>
              <div className="rounded-2xl border border-slate-600/60 bg-slate-900/60 p-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800/70 px-3 py-1">React · Vite</span>
                <span className="rounded-full bg-slate-800/70 px-3 py-1">Strapi · PostgreSQL</span>
                <span className="rounded-full bg-slate-800/70 px-3 py-1">Docker · Nginx</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-col text-[11px] text-slate-300/90">
                <span>{t("deployedInfo")}</span>
                <span>{t("seoInfo")}</span>
              </div>
              <a
                href="https://genapply.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-slate-50/95 px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-white"
              >
                {t("viewLive")}
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
