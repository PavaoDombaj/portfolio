import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.45;
    }
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center px-6">
      {/* VIDEO POZADINA */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-10 pointer-events-none"
        >
          <source src="/videos/e.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* Lijeva strana - Tekst */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Ja sam <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Pavao Dombaj.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-xl text-gray-300 leading-relaxed"
          >
            Student računarstva & web developer. Gradim moderne aplikacije s{" "}
            <span className="font-bold text-blue-400">Reactom</span> i{" "}
            <span className="font-bold text-blue-400">TailwindCSS-om</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex justify-center md:justify-start gap-6"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/PavaoDombaj"
              className="text-gray-300 text-3xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
              className="text-gray-300 text-3xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 inline-block px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Saznaj više
          </motion.a>
        </div>

        {/* Desna strana - Slika s efektima */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center items-center h-96"
        >
          {/* Dekorativne linije iza slike */}
          <div className="absolute -top-4 left-12 w-110 h-96 flex flex-col gap-7">
            <div className="w-full h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg opacity-35 shadow-lg rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-40 shadow-lg rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg opacity-60 shadow-md rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-gradient-to-r from-blue-700 to-purple-800 rounded-lg opacity-80 shadow-sm rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-gradient-to-r from-blue-800 to-purple-900 rounded-lg opacity-90 rotate-[-14deg]"></div>
          </div>

          {/* Slika */}
          <motion.img
            src={profile}
            alt="Pavao Dombaj"
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-64 h-64 object-cover rounded-lg shadow-2xl border-2 border-blue-500/20 rotate-2 hover:rotate-0 transition-transform duration-300"
            style={{ marginTop: '-2rem' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
