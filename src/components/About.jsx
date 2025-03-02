import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-16 space-y-8 md:space-y-0"
    >
      {/* Lijeva strana - Tekst */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h1 className="font-bold text-3xl md:text-4xl text-red-600 mb-5">
          O meni
        </h1>
        <p className="text-gray-300 mb-5">
          neki kratak opis neki kratak opis neki kratak opis neki kratak opis
          neki kratak opis neki kratak opis
        </p>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-700 text-white font-bold py-2 px-4 rounded mt-5 hover:bg-red-600 transition-all">
            Download CV
          </button>
        </a>
      </motion.div>

      {/* Desna strana - Slika */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default About;
