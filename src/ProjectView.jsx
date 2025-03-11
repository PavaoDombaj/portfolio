import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import NavbarSimple from "./components/NavbarSimple";
import projects from "./components/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectView = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.45;
    }
  }, []);

  if (!project) {
    return (
      <div className="text-center text-3xl text-red-500 mt-10">
        Projekt nije pronađen!
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* VIDEO POZADINA */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-4 pointer-events-none"
        >
          <source src="/videos/a.mp4" type="video/mp4" />
        </video>
      </div>
      <NavbarSimple />

      <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center justify-center lg:flex-row gap-10 w-full">
        {/* Lijevi dio - sadrzaj */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col"
        >
          {/* Naslov */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-red-500 mb-4 text-center"
          >
            {project.name}
          </motion.h1>

          {/* Opis */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 leading-relaxed mb-6 overflow-auto max-h-48 md:max-h-96"
            style={{ whiteSpace: "pre-line" }}
          >
            {project.description}
          </motion.div>

          {/* Tehnologije */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mt-4"
          >
            {project.technologies &&
              project.technologies.map((tech, index) => (
                <div key={index} className="relative group">
                  <FontAwesomeIcon
                    icon={tech.icon}
                    size="2x"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {tech.iconName}
                  </span>
                </div>
              ))}
          </motion.div>

          {/* Galerija slika */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6"
          >
            <Slider {...settings} className="rounded-lg overflow-hidden">
              {project.images &&
                project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.name} - ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                ))}
            </Slider>
          </motion.div>

          {/* GitHub & Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 flex justify-center gap-4" // Centrirani gumbi
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
              >
                GitHub Repo
              </a>
            )}
            {project.redirectUrl && (
              <a
                href={project.redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
              >
                Pogledaj projekt
              </a>
            )}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectView;
