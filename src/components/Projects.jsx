import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import projectData from "./ProjectData";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const sortedProjects = [...projectData].sort((a, b) => a.order - b.order);
  return (
    <motion.section
      id="projects"
      className="relative w-full px-4 sm:px-6 lg:px-10 py-28 bg-[#050816]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[130px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent primary-gradient">
              {t('projectsTitle')}
            </span>
          </h2>
          <p className="text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            {t('projectsDescription')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {sortedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;

