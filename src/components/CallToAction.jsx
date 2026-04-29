import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-20 md:py-24 bg-[#050816]">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 -left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-[140px] transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-[140px] transform -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-7 md:space-y-8"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent primary-gradient">
              {t('ctaTitle')}
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('ctaDescription')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              {t('ctaButton')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
