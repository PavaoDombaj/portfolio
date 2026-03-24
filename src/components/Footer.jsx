import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <footer className="relative w-full py-24 px-6 bg-[#050816] backdrop-blur-sm" id="contact">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-sky-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent primary-gradient">
                {t('contactMe')}
              </span>
            </h2>
            <p className="text-slate-300/90 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          {/* Two-column layout: Form + Socials */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Form - 3 cols */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-medium">
                    {t('formName')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t('formNamePlaceholder')}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/70 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-all duration-300"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-medium">
                    {t('formEmail')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t('formEmailPlaceholder')}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/70 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-medium">
                  {t('formMessage')}
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t('formMessagePlaceholder')}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/70 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button + status */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-slate-50 text-slate-900 font-semibold text-sm shadow-sm hover:bg-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-400 border-t-slate-900 rounded-full animate-spin" />
                      {t('formSending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('formSend')}
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 text-emerald-300 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {t('formSuccess')}
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1.5 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {t('formError')}
                  </motion.span>
                )}
              </div>
            </motion.form>

            {/* Right side - Social links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
            >
              <p className="text-slate-400 text-sm">{t('orContactVia')}</p>

              <div className="flex flex-col gap-4 w-full">
                <a
                  href="https://github.com/PavaoDombaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-700/70 bg-slate-900/60 hover:border-sky-400/40 transition-all duration-300"
                >
                  <FaGithub className="w-6 h-6 text-slate-400 group-hover:text-sky-300 transition-colors duration-300" />
                  <div>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-sky-300 transition-colors">GitHub</p>
                    <p className="text-slate-500 text-xs">@PavaoDombaj</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/pavao-dombaj-2b55302b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-700/70 bg-slate-900/60 hover:border-sky-400/40 transition-all duration-300"
                >
                  <FaLinkedin className="w-6 h-6 text-slate-400 group-hover:text-sky-300 transition-colors duration-300" />
                  <div>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-sky-300 transition-colors">LinkedIn</p>
                    <p className="text-slate-500 text-xs">Pavao Dombaj</p>
                  </div>
                </a>
                <a
                  href="mailto:pavaodombaj@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-700/70 bg-slate-900/60 hover:border-sky-400/40 transition-all duration-300"
                >
                  <FaEnvelope className="w-6 h-6 text-slate-400 group-hover:text-sky-300 transition-colors duration-300" />
                  <div>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-sky-300 transition-colors">Email</p>
                    <p className="text-slate-500 text-xs">pavaodombaj@gmail.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mt-16 mb-8"></div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm text-center">
            <p>{t('copyright').replace('2023', new Date().getFullYear())}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
