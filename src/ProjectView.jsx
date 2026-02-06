import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import NavbarSimple from "./components/NavbarSimple";
import projects from "./components/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "./context/LanguageContext";
import { ArrowLeft, ExternalLink } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, language } = useLanguage();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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

  const handleNavigation = (section) => {
    navigate('/');
    
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050816]">
        {/* Subtle background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[400px] h-[400px] rounded-full transition-transform duration-300 ease-out z-0"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.04) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div className="absolute top-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
        </div>

        <NavbarSimple />
        
        <motion.div 
          className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-center max-w-2xl mx-auto bg-slate-900/60 backdrop-blur-lg p-10 rounded-2xl border border-slate-700/70 shadow-xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-8xl font-bold bg-clip-text text-transparent primary-gradient"
            >
              404
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent primary-gradient mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('projectNotFound')}
            </motion.h2>
            
            <motion.p 
              className="text-slate-400 mb-8 text-lg"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t('projectNotFoundMessage')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button 
                onClick={() => handleNavigation('projects')}
                className="px-6 py-3 text-sm font-semibold text-slate-900 bg-slate-50 rounded-full hover:bg-white transition-all duration-300 shadow-sm"
              >
                {t('backToProjects')}
              </button>
              
              <button 
                onClick={() => handleNavigation('home')}
                className="px-6 py-3 text-sm font-semibold text-slate-300 border border-slate-600/80 rounded-full hover:border-sky-400/50 hover:text-sky-300 transition-all duration-300"
              >
                {t('returnHome')}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: project.images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: project.images.length > 1,
    autoplaySpeed: 3000,
  };

  const openImage = (index) => {
    setSelectedImage(project.images[index]);
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.images.length;
    setSelectedImage(project.images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    setSelectedImage(project.images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="min-h-screen bg-[#050816]">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full transition-transform duration-300 ease-out z-0"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.04) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="absolute top-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
      </div>

      <NavbarSimple />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-6 py-28 z-10"
      >
        {/* Back button */}
        <motion.button
          onClick={() => handleNavigation('projects')}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 text-sm font-medium mb-10 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backToProjects')}
        </motion.button>

        {/* Project title - full width */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 flex flex-wrap items-center gap-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent primary-gradient">
              {project.translations[language].name}
            </span>
          </h1>
          {project.redirectUrl && (
            <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-200 border border-emerald-400/40 tracking-wide uppercase">
              Live
            </span>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Lijeva strana - Slike */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-sm p-5 shadow-lg"
          >
            <Slider {...settings} className="rounded-xl overflow-hidden">
              {project.images.map((image, index) => (
                <div key={index} className="relative h-96 cursor-pointer" onClick={() => openImage(index)}>
                  <img
                    src={image}
                    alt={`${project.translations[language].name} - ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Desna strana - Sadržaj */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-7"
          >
            {/* Description card */}
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-sm p-7">
              <p className="text-slate-300/90 text-base leading-relaxed whitespace-pre-line">
                {project.translations[language].description}
              </p>
            </div>

            {/* Tehnologije */}
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-sm p-7">
              <h3 className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-medium mb-4">{t('technologiesUsed')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-800/70 border border-slate-700/50 text-slate-300 hover:text-sky-300 hover:border-sky-400/30 text-xs transition-all duration-300"
                  >
                    {typeof tech.icon === 'function' ? (
                      <tech.icon className="text-sm" />
                    ) : (
                      <FontAwesomeIcon icon={tech.icon} className="text-sm" />
                    )}
                    <span className="font-medium">{tech.iconName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Linkovi */}
            <div className="flex flex-wrap gap-3">
              {project.redirectUrl && (
                <a
                  href={project.redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-50 text-slate-900 font-semibold text-sm shadow-sm hover:bg-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('viewLive') || 'View Live'}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-600/80 text-slate-300 font-semibold text-sm hover:border-sky-400/50 hover:text-sky-300 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('viewOnGitHub')}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <div className="relative max-w-5xl w-full mx-4">
              <button
                className="absolute -top-12 right-0 text-slate-400 hover:text-sky-300 transition-colors duration-300 z-10"
                onClick={closeImage}
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
              
              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700/70 text-slate-300 hover:text-sky-300 hover:border-sky-400/40 transition-all duration-300 z-10 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700/70 text-slate-300 hover:text-sky-300 hover:border-sky-400/40 transition-all duration-300 z-10 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                  </button>
                </>
              )}

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt={`${project.translations[language].name} - ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image counter */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-500 text-xs">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectView;
