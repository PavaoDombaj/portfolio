import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  const { t, language } = useLanguage();
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border border-slate-700/70 bg-slate-900/60 backdrop-blur-sm hover:border-sky-400/40 shadow-lg hover:shadow-sky-500/10 transition-all duration-500"
    >
      
      {/* Slika projekta s overlay gradijentom */}
      <div className="relative h-52 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={project.images && project.images[0]}
          alt={project.name}
        />
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Live badge */}
        {project.redirectUrl && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-400/40 text-emerald-200 text-[11px] font-medium tracking-wide uppercase">
            Live
          </div>
        )}
      </div>

      {/* Sadržaj */}
      <div className="p-6 space-y-4">
        
        {/* Naslov s ikonom */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-slate-50 group-hover:text-sky-300 transition-colors duration-300 flex-1">
            {project.translations[language].name}
          </h3>
          <ArrowUpRight className="w-4 h-4 mt-1 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
        
        {/* Opis */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.translations[language].shortDescription}
        </p>

        {/* Tehnologije - moderniji prikaz */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/70 border border-slate-700/50 text-slate-300 hover:text-sky-300 hover:border-sky-400/30 text-xs transition-all duration-300"
            >
              {typeof tech.icon === 'function' ? (
                <tech.icon className="text-[11px]" />
              ) : (
                <FontAwesomeIcon icon={tech.icon} className="text-[11px]" />
              )}
              <span className="font-medium">{tech.iconName}</span>
            </div>
          ))}
          {project.technologies.length > 3 && (
            <div className="flex items-center px-2.5 py-1 rounded-full bg-slate-800/70 text-slate-500 text-xs">
              +{project.technologies.length - 3}
            </div>
          )}
        </div>

        {/* Linkovi - novi stil */}
        <div className="flex gap-3 pt-2">
          
          {/* Primarni link */}
          <a
            href={`/project/${project.slug}`}
            className="flex-1 group/btn relative px-4 py-2.5 text-center text-sm rounded-full bg-slate-50 text-slate-900 font-semibold overflow-hidden transition-all duration-300 hover:bg-white shadow-sm"
          >
            <span className="relative z-10">{t('viewProject')}</span>
          </a>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full border border-slate-600/80 text-slate-300 hover:border-sky-400/50 hover:text-sky-300 transition-all duration-300 flex items-center justify-center"
              title="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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