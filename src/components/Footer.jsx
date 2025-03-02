import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section id="contact" className="px-10 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Glavni naslov */}
        <p className="text-6xl text-white font-bold">Keep in touch.</p>
        <p className="text-white mt-5 text-2xl font-bold">
          Feel free to <span className="text-red-600">contact me :)</span>
        </p>

        {/* Ikonice - centrirane horizontalno */}
        <div className="mt-6 flex justify-center gap-6">
          {/* GitHub */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PavaoDombaj"
            className="text-white text-3xl hover:text-red-600 transition"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
            className="text-white text-3xl hover:text-red-600 transition"
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:pavaodombaj@gmail.com"
            className="text-white text-3xl hover:text-red-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
