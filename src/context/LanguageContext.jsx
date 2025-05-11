import React, { createContext, useState, useContext, useEffect } from "react";

// Prijevodi za hrvatski i engleski
const translations = {
  hr: {
    // Navbar
    home: "Početna",
    projects: "Projekti",
    about: "O meni",

    // Hero
    greeting: "Pozdrav, ja sam",
    role: "Web Developer & Student",
    description:
      "Gradim moderne web aplikacije koristeći najnovije tehnologije, dok kontinuirano proširujem svoje znanje.",
    contactButton: "Kontaktiraj me",

    // Projects
    projectsTitle: "Projekti",
    projectsDescription: "Pogledajte neke od mojih projekata",
    viewProject: "Pogledaj projekt",
    projectNotFound: "Projekt nije pronađen",
    returnHome: "Povratak na početnu",
    technologiesUsed: "Korištene tehnologije",
    viewOnGitHub: "Pogledaj na GitHubu",
    backToProjects: "Natrag na projekte",
    projectNotFoundMessage: "Projekt koji tražite ne postoji ili je uklonjen.",

    // About
    aboutTitle: "O meni",
    aboutDescription:
      "Pozdrav! Ja sam Pavao Dombaj, rođen 2005. godine. Završio sam školu za tehničara za računalstvo, a trenutno studiram računarstvo na 1. godini Tehničkog fakulteta u Rijeci (RITEH). Strastven sam prema tehnologiji i razvoju softvera te kontinuirano radim na usavršavanju svojih programerskih vještina.",
    viewCV: "Pogledaj CV",
    cvNotification:
      "CV trenutno nije dostupan. Ukoliko vas zanima, slobodno me kontaktirajte putem LinkedIn-a ili maila.",

    // Footer
    contactMe: "Kontaktiraj me",
    footerDescription:
      "Slobodno me kontaktirajte putem društvenih mreža ili e-maila.",
    copyright: "© 2025 Pavao Dombaj. Sva prava pridržana.",
  },
  en: {
    // Navbar
    home: "Home",
    projects: "Projects",
    about: "About",

    // Hero
    greeting: "Hello, I'm",
    role: "Web Developer & Tech Student",
    description:
      "Turning ideas into functional apps while mastering the latest web technologies.",
    contactButton: "Contact me",

    // Projects
    projectsTitle: "Projects",
    projectsDescription: "Check out some of my projects",
    viewProject: "View project",
    projectNotFound: "Project Not Found",
    returnHome: "Return Home",
    technologiesUsed: "Technologies Used",
    viewOnGitHub: "View on GitHub",
    backToProjects: "Back to Projects",
    projectNotFoundMessage: "The project you are looking for does not exist or has been removed.",

    // About
    aboutTitle: "About me",
    aboutDescription:
      "Hello! I'm Pavao Dombaj, born in 2005. I graduated as a computer technician, and I'm currently studying computer science in my first year at the Faculty of Engineering in Rijeka (RITEH). I'm passionate about technology and software development, and I continuously work on improving my programming skills.",
    viewCV: "View CV",
    cvNotification:
      "CV is currently not available. If you're interested, feel free to contact me via LinkedIn or email.",

    // Footer
    contactMe: "Contact me",
    footerDescription: "Feel free to contact me through social media or email.",
    copyright: "© 2025 Pavao Dombaj. All rights reserved.",
  },
};

// Stvaranje konteksta
const LanguageContext = createContext();

// Hook za korištenje konteksta
export const useLanguage = () => useContext(LanguageContext);

// Provider komponenta
export const LanguageProvider = ({ children }) => {
  // Dohvati spremljeni jezik iz localStorage ili detektiraj prema lokaciji
  const [language, setLanguage] = useState(() => {
    // Prvo provjeri je li jezik već spremljen u localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      return savedLanguage;
    }

    // Ako nije, pokušaj detektirati prema jeziku preglednika
    const detectLanguage = () => {
      // Dohvati jezik preglednika
      const browserLang = navigator.language || navigator.userLanguage;

      // Balkanski jezici - postavi hrvatski
      const balkanLanguages = [
        "hr",
        "hr-HR",
        "bs",
        "bs-BA",
        "sr",
        "sr-RS",
        "sr-ME",
        "sl",
        "sl-SI",
        "mk",
        "mk-MK",
      ];

      // Provjeri je li jezik preglednika jedan od balkanskih jezika
      if (balkanLanguages.some((lang) => browserLang.startsWith(lang))) {
        return "hr";
      }

      // Ako nije balkanski jezik, postavi engleski
      return "en";
    };

    return detectLanguage();
  });

  // Spremi jezik u localStorage kada se promijeni
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Funkcija za promjenu jezika
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "hr" ? "en" : "hr"));
  };

  // Funkcija za dohvaćanje prijevoda
  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
