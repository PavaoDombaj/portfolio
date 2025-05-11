import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({ project }) => {
  const { t, language } = useLanguage();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
    >
      {/* Slika projekta */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={project.images && project.images[0]}
          alt={project.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
      </div>

      {/* Sadržaj */}
      <div className="p-6">
        {/* Naslov */}
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {project.translations[language].name}
        </h3>

        {/* Opis */}
        <p className="text-gray-300 mb-4 line-clamp-2">{project.translations[language].shortDescription}</p>

        {/* Tehnologije */}
        <div className="flex flex-wrap gap-3 mb-4">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
            >
              <FontAwesomeIcon icon={tech.icon} className="text-sm" />
              <span>{tech.iconName}</span>
            </div>
          ))}
        </div>

        {/* Linkovi */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              GitHub
            </a>
          )}
          <a
            href={`/project/${project.slug}`}
            className="flex-1 px-4 py-2 text-center rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
          >
            {t('viewProject')}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
