import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#0a0a0a]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 via-gray-500/10 to-gray-600/10"></div>
        
        {/* Mouse Follow Effect */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-transform duration-200 ease-out"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full pointer-events-none transition-transform duration-300 ease-out"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Animated Triangles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 border-t-2 border-l-2 border-gray-600/15 rotate-45"></div>
          <div className="absolute top-1/4 -right-24 w-64 h-64 border-t-2 border-r-2 border-gray-500/15 -rotate-45"></div>
          <div className="absolute -bottom-24 left-1/4 w-80 h-80 border-b-2 border-l-2 border-gray-600/15 rotate-45"></div>
          <div className="absolute bottom-1/4 -right-24 w-72 h-72 border-b-2 border-r-2 border-gray-500/15 -rotate-45"></div>
          {/* Additional Triangles */}
          <div className="absolute top-1/3 -left-12 w-48 h-48 border-t-2 border-l-2 border-gray-600/15 rotate-45"></div>
          <div className="absolute bottom-1/3 -right-12 w-48 h-48 border-b-2 border-r-2 border-gray-500/15 -rotate-45"></div>
          <div className="absolute top-2/3 left-1/4 w-32 h-32 border-t-2 border-l-2 border-gray-600/15 rotate-45"></div>
          <div className="absolute bottom-2/3 right-1/4 w-32 h-32 border-b-2 border-r-2 border-gray-500/15 -rotate-45"></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/15 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/15 to-transparent"></div>
          <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-600/15 to-transparent"></div>
          <div className="absolute left-2/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-600/15 to-transparent"></div>
          {/* Additional Lines */}
          <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/15 to-transparent"></div>
          <div className="absolute top-5/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/15 to-transparent"></div>
          <div className="absolute left-1/6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-600/15 to-transparent"></div>
          <div className="absolute left-5/6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-600/15 to-transparent"></div>
        </div>

        {/* Subtle Dots */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-600/15 rounded-full"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-gray-600/15 rounded-full"></div>
          <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-gray-600/15 rounded-full"></div>
          <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-gray-600/15 rounded-full"></div>
          {/* Additional Dots */}
          <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-gray-600/15 rounded-full"></div>
          <div className="absolute top-5/6 right-1/6 w-2 h-2 bg-gray-600/15 rounded-full"></div>
          <div className="absolute bottom-1/6 left-5/6 w-2 h-2 bg-gray-600/15 rounded-full"></div>
          <div className="absolute top-5/6 right-5/6 w-2 h-2 bg-gray-600/15 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8 py-20"
        >
          {/* Greeting and Name */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {t('greeting')}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient">
                Pavao Dombaj
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* Role and Description */}
          <motion.div variants={itemVariants} className="max-w-2xl space-y-4">
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              {t('role')}
            </p>
            <p className="text-lg text-gray-400">
              {t('description')}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mt-4"
          >
            <a
              href="https://github.com/PavaoDombaj"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                <FaGithub className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                <FaLinkedin className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            variants={itemVariants}
            className="mt-12 group"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                {t('contactButton')}
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-6 border-2 border-gray-400 group-hover:border-blue-400 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-1 bg-gray-400 group-hover:bg-blue-400 rounded-full"
                />
              </motion.div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
