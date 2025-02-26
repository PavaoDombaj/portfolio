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
    <section className="relative w-full h-screen flex items-center justify-center px-6 bg-[#131313] mt-5">
      {/* VIDEO POZADINA */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-5"
        >
          <source src="/videos/e.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Lijeva strana - Tekst */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Ja sam <span className="text-red-600 ">Pavao Dombaj.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Student računarstva & web developer. Gradim moderne aplikacije s{" "}
            <span className="font-bold">Reactom</span> i{" "}
            <span className="font-bold">TailwindCSS-om</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 flex justify-center md:justify-start gap-4"
          >
            <a
              href="#"
              className="text-gray-700 dark:text-white text-2xl hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-white text-2xl hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-white text-2xl hover:text-blue-500"
            >
              <FaTwitter />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 inline-block text-lg font-bold text-red-600 animate-bounce"
          >
            ↓ Saznaj više
          </motion.a>
        </div>

        {/* Desna strana - Slika s efektima */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center items-center h-56"
        >
          {/* Dekorativne linije iza slike */}
          <div className="absolute -top-4 left-12 w-110 h-60 flex flex-col gap-7">
            <div className="w-full h-5 bg-red-400 rounded-lg opacity-35 shadow-lg rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-red-400 rounded-lg opacity-40 shadow-lg rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-red-500 rounded-lg opacity-60 shadow-md rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-red-600 rounded-lg opacity-80 shadow-sm rotate-[-14deg]"></div>
            <div className="w-full h-5 bg-red-700 rounded-lg opacity-90 rotate-[-14deg]"></div>
          </div>

          {/* Slika */}
          <motion.img
            src={profile}
            alt="Pavao Dombaj"
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-48 h-48 object-cover rounded-lg shadow-2xl border-0 rotate-2"
          />
        </motion.div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
