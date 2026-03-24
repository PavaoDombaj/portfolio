import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../assets/avatar.webp";
import projectData from "./ProjectData";
import PropTypes from "prop-types";

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Collect all first images from each project (shown on homepage cards)
    const imageUrls = projectData
      .map((p) => p.images && p.images[0])
      .filter(Boolean);

    let loaded = 0;
    const total = imageUrls.length;

    if (total === 0) {
      setProgress(100);
      setDone(true);
      return;
    }

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      const handleDone = () => {
        loaded++;
        setProgress(Math.round((loaded / total) * 100));
        if (loaded >= total) {
          // Small delay so the user sees 100%
          setTimeout(() => setDone(true), 400);
        }
      };
      img.onload = handleDone;
      img.onerror = handleDone;
    });

    // Fallback timeout — don't block forever
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setDone(true), 200);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => onFinished(), 600);
      return () => clearTimeout(timer);
    }
  }, [done, onFinished]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-sky-500/15 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/15 blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Avatar with pulse ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-400 to-teal-400 opacity-20 blur-lg animate-pulse" />
              <img
                src={avatar}
                alt="Pavao Dombaj"
                className="w-28 h-28 rounded-full object-cover border-2 border-slate-700/70 shadow-xl relative z-10"
              />
            </motion.div>

           
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-slate-300 text-sm font-medium tracking-wide"
            >
              Pavao Dombaj
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-48 flex flex-col items-center gap-3"
            >
              <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-teal-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <span className="text-[11px] text-slate-500 tabular-nums">
                {progress}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

LoadingScreen.propTypes = {
  onFinished: PropTypes.func.isRequired
};
