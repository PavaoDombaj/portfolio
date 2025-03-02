import React from "react";
import ProjectCard from "./ProjectCard";
import { faReact, faNodeJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const projectData = [
  {
    name: "Bookly",
    image: "/images/bookly.png",
    shortDescription: "Rezerviranje termina frizerskih i ostalih usluga",
    description: "",
    redirectUrl: "/projects/bookly",
    github: "",
    technologies: [faReact, faNodeJs, faHtml5, faCss3Alt],
  },
  {
    name: "This Portfolio",
    image: "/images/portfolio.png",
    shortDescription: "Tu se trenutno nalazis :)",
    description: "",
    redirectUrl: "",
    github: null,
    technologies: [faReact, faHtml5, faCss3Alt],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full px-6 bg-[#131313] mt-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.h1
        className="font-bold text-4xl underline-offset-5 underline text-white text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="mt-5 mb-5 text-xl text-white text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Ovdje mozete vidjeti neke od mojih projekata:
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
