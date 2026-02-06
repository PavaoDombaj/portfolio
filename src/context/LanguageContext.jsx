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
    role: "Web Developer",
    description:
      "Gradim moderne web aplikacije koristeći najnovije tehnologije, dok kontinuirano proširujem svoje znanje.",
    contactButton: "Kontaktiraj me",

    // Projects
    viewProjectsButton:"Pogledaj radove",
    projectsTitle: "Projekti",
    projectsDescription: "Pogledajte neke od mojih projekata",
    viewProject: "Pogledaj projekt",
    viewLive: "Pogledaj uživo",
    ctaTitle: "Ako te scroll doveo do ovdje…",
    ctaDescription: "…onda je možda vrijeme da klikneš.",
    ctaButton: "Kontaktiraj me",
    projectNotFound: "Projekt nije pronađen",
    returnHome: "Povratak na početnu",
    technologiesUsed: "Korištene tehnologije",
    viewOnGitHub: "Pogledaj na GitHubu",
    backToProjects: "Natrag na projekte",
    projectNotFoundMessage: "Projekt koji tražite ne postoji ili je uklonjen.",

    // About
    aboutTitle: "O meni",
    aboutDescription:
      "Pozdrav! Ja sam Pavao Dombaj, rođen 2005. godine. Završio sam školu za tehničara za računalstvo te se bavim razvojem modernih web aplikacija. Posebno me zanimaju frontend tehnologije i izrada funkcionalnih, brzih i pristupačnih sučelja. Trenutno radim na osobnim i freelance projektima te stalno unapređujem svoje vještine.",
    viewCV: "Pogledaj CV",
    cvNotification:
      "CV trenutno nije dostupan. Ukoliko vas zanima, slobodno me kontaktirajte putem LinkedIn-a ili maila.",

    // Footer
    contactMe: "Kontaktiraj me",
    footerDescription:
      "Imate pitanje ili želite surađivati? Pošaljite mi poruku!",
    copyright: "© 2025 Pavao Dombaj. Sva prava pridržana.",
    formName: "Ime",
    formNamePlaceholder: "Vaše ime",
    formEmail: "Email",
    formEmailPlaceholder: "vas@email.com",
    formMessage: "Poruka",
    formMessagePlaceholder: "Napišite svoju poruku...",
    formSend: "Pošalji poruku",
    formSending: "Šaljem...",
    formSuccess: "Poruka je uspješno poslana!",
    formError: "Došlo je do greške. Pokušajte ponovo.",
    orContactVia: "ili me pronađite na",
  },
  en: {
    // Navbar
    home: "Home",
    projects: "Projects",
    about: "About",

    // Hero
    greeting: "Hello, I'm",
    role: "Web Developer",
    description:
      "Turning ideas into functional apps while mastering the latest web technologies.",
    contactButton: "Contact me",

    // Projects
    viewProjectsButton:"View Projects",
    projectsTitle: "Projects",
    projectsDescription: "Check out some of my projects",
    viewProject: "View project",
    viewLive: "View Live",
    ctaTitle: "If scrolling brought you here…",
    ctaDescription: "…then maybe it's time to click.",
    ctaButton: "Contact me",
    projectNotFound: "Project Not Found",
    returnHome: "Return Home",
    technologiesUsed: "Technologies Used",
    viewOnGitHub: "View on GitHub",
    backToProjects: "Back to Projects",
    projectNotFoundMessage: "The project you are looking for does not exist or has been removed.",

    // About
    aboutTitle: "About me",
    aboutDescription:
      "Hello! I'm Pavao Dombaj, born in 2005. I graduated as a computer technician and I build modern web applications. I'm especially focused on frontend technologies and creating fast, accessible, and user-friendly interfaces. I currently work on personal and freelance projects while continuously improving my skills.",
    viewCV: "View CV",
    cvNotification:
      "CV is currently not available. If you're interested, feel free to contact me via LinkedIn or email.",

    // Footer
    contactMe: "Contact me",
    footerDescription: "Have a question or want to collaborate? Send me a message!",
    copyright: "© 2025 Pavao Dombaj. All rights reserved.",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "you@email.com",
    formMessage: "Message",
    formMessagePlaceholder: "Write your message...",
    formSend: "Send message",
    formSending: "Sending...",
    formSuccess: "Message sent successfully!",
    formError: "Something went wrong. Please try again.",
    orContactVia: "or find me on",
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
