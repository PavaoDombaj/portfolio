import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({ project }) => {
  const { t, language } = useLanguage();
  
  return (
    <motion.div
      // Poboljšan hover: veći pomak i jača sjena
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
      className="group relative bg-[#151515] rounded-xl overflow-hidden border border-white/10 hover:border-blue-500 transition-all duration-300 shadow-xl"
    >
      
      {/* Slika projekta */}
      <div className="relative h-48 sm:h-56 overflow-hidden"> {/* Malo povećana visina */}
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // Manje agresivan zoom
          src={project.images && project.images[0]}
          alt={project.name}
        />
        {/* Čistiji gradijent za preklapanje */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-80" />
      </div>

      {/* Sadržaj */}
      <div className="p-6">
        
        {/* Naslov - Jači kontrast */}
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.translations[language].name}
        </h3>
        
        {/* Opis */}
        <p className="text-gray-400 mb-4 line-clamp-2">{project.translations[language].shortDescription}</p>

        {/* Tehnologije - Čišći, suptilniji stil */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-gray-300 hover:text-blue-400 text-xs transition-colors duration-200"
            >
              <FontAwesomeIcon icon={tech.icon} className="text-sm" />
              <span className="font-medium">{tech.iconName}</span>
            </div>
          ))}
        </div>

        {/* Linkovi - Čišći stil gumba */}
        <div className="flex gap-4">
          
          {/* Primarni link (Prikaz projekta) - Akcentiran */}
          <a
            href={`/project/${project.slug}`}
            className="flex-1 px-4 py-3 text-center rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            {t('viewProject')}
          </a>

          {/* Sekundarni link (GitHub) - Diskretniji */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 text-center rounded-lg border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;