import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/avatar.webp";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const videoRef = useRef(null);
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.45;
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6">
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10 pointer-events-none"
        >
          <source src="/videos/e.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobile Design */}
      {isMobile ? (
        <div className="w-full max-w-md mx-auto pt-24 pb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Profile Image - Mobile */}
            <motion.div 
              variants={itemVariants}
              className="relative mb-8"
            >
              <img
                src={profile}
                alt="Pavao Dombaj"
                className="relative w-40 h-40 object-cover rounded-full border-2 border-blue-500/30 shadow-lg shadow-blue-500/20"
              />
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-4 h-4 bg-[#0a0a0a] rounded-full"></div>
              </motion.div>
            </motion.div>

            {/* Text Content - Mobile */}
            <motion.h1
              variants={itemVariants}
              className="text-center text-4xl font-bold text-white leading-tight mb-3"
            >
              {t('greeting')} <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Pavao Dombaj</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full my-4"
            />

            <motion.p
              variants={itemVariants}
              className="text-center text-lg text-gray-300 leading-relaxed mb-6 px-2"
            >
              {t('role')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-center text-base text-gray-400 leading-relaxed mb-8 px-2"
            >
              {t('description')}
            </motion.p>

            {/* Social Icons - Mobile */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-6 mb-10"
            >
              <a
                href="https://github.com/PavaoDombaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-2xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-2xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </motion.div>

            {/* Contact Link - Mobile (same as desktop) */}
            <motion.a
              variants={itemVariants}
              href="#about"
              className="mt-6 inline-block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-bounce"
            >
              ↓ {t('contactButton')}
            </motion.a>
          </motion.div>
        </div>
      ) : (
        /* Desktop Design - Keeping your original layout */
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* Left Side - Text */}
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              {t('greeting')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Pavao Dombaj.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 text-xl text-gray-300 leading-relaxed"
            >
              {t('role')}. {t('description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 flex justify-center md:justify-start gap-6"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/PavaoDombaj"
                className="text-gray-300 text-3xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
                className="text-gray-300 text-3xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </motion.div>

            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-6 inline-block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-bounce"
            >
              ↓ {t('contactButton')}
            </motion.a>
          </div>

          {/* Right Side - Image with Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center items-center h-96"
          >
            {/* Decorative Lines Behind Image */}
            <div className="absolute -top-4 left-12 w-110 h-96 flex flex-col gap-7">
              <div className="w-full h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-35 shadow-lg rotate-[-14deg]"></div>
              <div className="w-full h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-40 shadow-lg rotate-[-14deg]"></div>
              <div className="w-full h-5 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg opacity-60 shadow-md rotate-[-14deg]"></div>
              <div className="w-full h-5 bg-gradient-to-r from-blue-700 to-purple-800 rounded-lg opacity-80 shadow-sm rotate-[-14deg]"></div>
              <div className="w-full h-5 bg-gradient-to-r from-blue-800 to-purple-900 rounded-lg opacity-90 rotate-[-14deg]"></div>
            </div>

            {/* Image */}
            <motion.img
              src={profile}
              alt="Pavao Dombaj"
              initial={{ y: -10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-90 h-90 object-cover rounded-lg rotate-0 hover:rotate-2 transition-transform duration-300"
              style={{ marginTop: '-2rem' }}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
