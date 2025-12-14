import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative w-full py-20 px-6 bg-[#050816] backdrop-blur-sm" id="contact">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-500/18 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/18 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent primary-gradient">
              {t('contactMe')}
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('footerDescription')}
          </p>

          {/* Social Links - moderniji dizajn */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/PavaoDombaj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
            >
              <FaGithub className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
            >
              <FaLinkedin className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="mailto:pavaodombaj@gmail.com"
              whileHover={{ y: -5, scale: 1.1 }}
              className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
            >
              <FaEnvelope className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm">
            <p>{t('copyright').replace('2023', new Date().getFullYear())}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
