import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import NavbarSimple from "./components/NavbarSimple";
import projects from "./components/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "./context/LanguageContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const { t, language } = useLanguage();

  const handleNavigation = (section) => {
    navigate(`/#${section}`);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <NavbarSimple />
        
        <motion.div 
          className="min-h-[90vh] flex flex-col items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-center max-w-2xl mx-auto bg-[#111]/60 backdrop-blur-lg p-10 rounded-2xl border border-blue-500/20 shadow-xl shadow-blue-500/5"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 text-8xl text-blue-500/80"
            >
              404
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('projectNotFound')}
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 mb-8 text-lg"
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
                className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                {t('backToProjects')}
              </button>
              
              <button 
                onClick={() => handleNavigation('home')}
                className="px-6 py-3 text-lg font-medium text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all duration-300"
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <NavbarSimple />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lijeva strana - Slike */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10"
          >
            <Slider {...settings} className="rounded-lg overflow-hidden">
              {project.images.map((image, index) => (
                <div key={index} className="relative h-96 cursor-pointer" onClick={() => openImage(index)}>
                  <img
                    src={image}
                    alt={`${project.translations[language].name} - ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Desna strana - Sadržaj */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/10"
          >
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {project.translations[language].name}
              </span>
            </h1>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {project.translations[language].description}
              </p>
            </div>

            {/* Tehnologije */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">{t('technologiesUsed')}</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400"
                  >
                    <FontAwesomeIcon icon={tech.icon} className="text-sm" />
                    <span className="text-sm">{tech.iconName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Linkovi */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 text-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  {t('viewOnGitHub')}
                </a>
              )}
              {project.redirectUrl && (
                <button
                  onClick={() => handleNavigation('projects')}
                  className="flex-1 px-6 py-3 text-center rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                >
                  {t('backToProjects')}
                </button>
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
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                onClick={closeImage}
              >
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              </button>
              
              {project.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
                  </button>
                </>
              )}

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt={`${project.translations[language].name} - ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectView;
