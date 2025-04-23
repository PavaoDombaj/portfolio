import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full py-16 px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="https://github.com/PavaoDombaj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:pavaodombaj@gmail.com"
              whileHover={{ y: -5 }}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope className="w-8 h-8" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Pavao Dombaj. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
