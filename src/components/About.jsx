import React, { useState } from "react";
import profile from "../assets/avatar.webp";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { t } = useLanguage();

  const handleCVClick = (e) => {
    e.preventDefault();
    setShowNotification(true);
    
    // Automatski sakrij notifikaciju nakon 5 sekundi
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Notifikacija */}
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg max-w-md text-center"
          >
            <p className="font-medium">{t('cvNotification')}</p>
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Lijeva strana - Slika */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={profile}
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-lg shadow-2xl border-2 border-blue-500/20"
              />
            </div>
          </motion.div>

          {/* Desna strana - Tekst */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {t('aboutTitle')}
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {t('aboutDescription')}</p>
            <motion.button
              onClick={handleCVClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              {t('viewCV')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
