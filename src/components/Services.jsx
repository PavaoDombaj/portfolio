import React from "react";
import { motion } from "framer-motion";
import { Blocks, MonitorSmartphone, Database, SwatchBook } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Blocks,
      title: t("serviceWebAppsTitle"),
      description: t("serviceWebAppsDescription"),
    },
    {
      icon: MonitorSmartphone,
      title: t("serviceFrontendTitle"),
      description: t("serviceFrontendDescription"),
    },
    {
      icon: Database,
      title: t("serviceBackendTitle"),
      description: t("serviceBackendDescription"),
    },
    {
      icon: SwatchBook,
      title: t("serviceDesignTitle"),
      description: t("serviceDesignDescription"),
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full px-4 sm:px-6 lg:px-10 py-28 bg-[#050816]"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-16 left-0 w-72 h-72 bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-fuchsia-500/15 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:22px_22px] opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent primary-gradient">
              {t("servicesTitle")}
            </span>
          </h2>
          <p className="text-lg text-slate-300/90 max-w-3xl mx-auto leading-relaxed">
            {t("servicesDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-sm p-6 sm:p-7 hover:border-sky-400/40 hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-50 group-hover:text-sky-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300/85">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
