import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const { t, language } = useLanguage();
  
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
    >
      
      {/* Slika projekta s overlay gradijentom */}
      <div className="relative h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={project.images && project.images[0]}
          alt={project.name}
        />
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
        
        {/* Live badge */}
        {project.redirectUrl && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-300 text-xs font-semibold">
            Live
          </div>
        )}
      </div>

      {/* Sadržaj */}
      <div className="p-6 space-y-4">
        
        {/* Naslov s ikonom */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex-1">
            {project.translations[language].name}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        
        {/* Opis */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.translations[language].shortDescription}
        </p>

        {/* Tehnologije - moderniji prikaz */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-blue-400 hover:border-blue-400/50 text-xs transition-all duration-300"
            >
              {typeof tech.icon === 'function' ? (
                <tech.icon className="text-sm" />
              ) : (
                <FontAwesomeIcon icon={tech.icon} className="text-sm" />
              )}
              <span className="font-medium">{tech.iconName}</span>
            </div>
          ))}
          {project.technologies.length > 3 && (
            <div className="flex items-center px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 text-xs">
              +{project.technologies.length - 3}
            </div>
          )}
        </div>

        {/* Linkovi - novi stil */}
        <div className="flex gap-3 pt-2">
          
          {/* Primarni link */}
          <a
            href={`/project/${project.slug}`}
            className="flex-1 group/btn relative px-4 py-3 text-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <span className="relative z-10">{t('viewProject')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </a>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl border border-gray-700 bg-white/5 backdrop-blur-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;