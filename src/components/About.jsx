import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Lijeva strana - Slika */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={profile}
                alt="Profile"
                className="relative w-64 h-64 object-cover rounded-lg shadow-2xl border-2 border-blue-500/20"
              />
            </div>
          </motion.div>

          {/* Desna strana - Tekst */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                O meni
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Pozdrav! Zovem se Pavao Dombaj, rođen sam 2005. godine. Završio sam školu za tehničara za računalstvo, a trenutno studiram računarstvo na 1. godini Tehničkog fakulteta u Rijeci (RITEH). Strastven sam prema tehnologiji i razvoju softvera, te stalno radim na unapređenju svojih vještina u programiranju.
            </p>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
