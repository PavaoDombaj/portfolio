import profile from "../assets/avatar.webp";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative w-full py-32 px-4 sm:px-6 lg:px-10 bg-[#050816]"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Lijeva strana - Slika */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
              
              {/* Image container with glassmorphism */}
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-2 rounded-2xl border border-sky-300/25">
                <img
                  src={profile}
                  alt="Profile"
                  className="relative w-80 h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Desna strana - Tekst */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center lg:text-left space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent primary-gradient">
                {t('aboutTitle')}
              </span>
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('aboutDescription')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
