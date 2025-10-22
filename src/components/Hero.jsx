import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";


// ... (imports ostaju isti)

const Hero = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Resize handler uklonjen jer ga ne koristimo u renderu (isMobile)
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation variants (ostaju isti, jer su dobri)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Brži stagger za direktniji fokus
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-[#0D1117]"> {/* GitHub Dark background */}
      {/* Manje nametljiva pozadina */}
      <div className="absolute inset-0">
        {/* Mouse Follow Effect - suptilniji, manji i manje 'blurry' */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-transform duration-300 ease-out z-0"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            // Smanjena transparentnost za suptilniji efekt
            background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.05) 0%, rgba(10, 10, 10, 0) 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Dodatni suptilni glow za dubinu */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[150px]"></div>

        {/* Vrlo suptilna grid tekstura (opcionalno) */}
         <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:30px_30px] opacity-5"></div>
      </div>

      {/* Content - Z-index ga izbacuje ispred pozadine */}
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-10 py-20"
        >
          {/* Uloga/Trenutni Status (Manji i fokusiraniji) */}
          <motion.p variants={itemVariants} className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            {t('role')} {/* npr. Full-Stack Web Developer */}
          </motion.p>

          {/* Ime i Naslov (Glavni Fokus) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight">
              {t('greeting')}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-500">
                Pavao Dombaj
              </span>
            </h1>

            {/* Nova linija umjesto stare */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('description')} {/* npr. Building clean, performance-driven web applications with React, Next.js, and modern backends. */}
            </p>
          </motion.div>

          {/* Glavni Call to Action (CTA) - Puno istaknutiji */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 transition-transform duration-300 transform hover:-translate-y-0.5"
            >
              {t('contactButton')} {/* npr. Započnimo projekt! */}
            </a>

            <a
              href="#projects"
              className="px-8 py-3 text-lg font-medium text-gray-300 border border-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
            >
              {t('viewProjectsButton')} {/* Novi button npr. Pregledaj radove */}
            </a>
          </motion.div>

          {/* Social Links - Ostat će diskretni, ali stilizirani */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 mt-6"
          >
            {/* Social linkovi su sada čišći (manje 'boxy') */}
            <a
              href="https://github.com/PavaoDombaj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </motion.div>

          {/* Scroll Indicator uklonjen - zamijenjen je s jasnim CTA gumbima */}

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
