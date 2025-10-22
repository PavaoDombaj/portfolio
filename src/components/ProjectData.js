import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase, faPlus } from "@fortawesome/free-solid-svg-icons";

const projectData = [
  {
    id: "bookly",
    slug: "bookly",
    images: [
      "/images/bookly/1.png",
      "/images/bookly/2.jpg",
      "/images/bookly/3.jpg",
      "/images/bookly/4.jpg",
      "/images/bookly/5.jpg",
      "/images/bookly/6.jpg",
    ],
    translations: {
      hr: {
        name: "Bookly",
        shortDescription: "Rezerviranje termina frizerskih i ostalih usluga",
        description: `Bookly je web aplikacija osmišljena za brzo i jednostavno rezerviranje frizerskih termina. Razvio sam je kao završni rad u srednjoj školi, inspiriran vlastitim frustracijama oko naručivanja kod barbera – dugog čekanja na odgovor i izgubljenog vremena.
Ova aplikacija omogućava veću fleksibilnost i praktičnost kako za klijente, tako i za frizerske salone. Iako još nije službeno pokrenuta, planiram je dovršiti i objaviti. Trenutno radim na ispravljanju bugova i dodavanju novih funkcionalnosti.
Ovo je bio moj prvi veći projekt i, iako je predstavljao ogroman izazov za srednjoškolca, naučio sam puno kroz njegovo razvijanje. Možda nije savršen, ali ponosan sam na ono što sam postigao – i ovo je tek početak!`,
      },
      en: {
        name: "Bookly",
        shortDescription: "Booking system for hairdressing and other services",
        description: `Bookly is a web application designed for quick and easy booking of hairdressing appointments. I developed it as my final project in high school, inspired by my own frustrations with barber appointments – long waiting times for responses and wasted time.
This application provides greater flexibility and convenience for both clients and hair salons. Although it hasn't been officially launched yet, I plan to complete and publish it. I'm currently working on fixing bugs and adding new features.
This was my first major project and, although it presented a huge challenge for a high school student, I learned a lot through its development. It may not be perfect, but I'm proud of what I've achieved – and this is just the beginning!`,
      },
    },
    redirectUrl: "",
    github: "https://github.com/PavaoDombaj/zavrsni",
    technologies: [
      { icon: faReact, iconName: "React" },
      { icon: faNodeJs, iconName: "Node.js" },
      { icon: faHtml5, iconName: "HTML5" },
      { icon: faCss3Alt, iconName: "CSS3" },
      { icon: faDatabase, iconName: "MongoDB" },
    ],
  },
  {
    id: "portfolio",
    slug: "portfolio",
    images: [
      "/images/portfolio/1.png",
      "/images/portfolio/2.png",
      "/images/portfolio/3.png",
      "/images/portfolio/4.png",
    ],
    translations: {
      hr: {
        name: "Ovaj Portfolio",
        shortDescription: "Tu se trenutno nalaziš :)",
        description: `Ovaj portfolio sam izradio kako bih predstavio svoj rad, vještine i projekte koje razvijam. 
Glavni cilj bio mi je stvoriti osobni prostor gdje mogu eksperimentirati s modernim tehnologijama poput Reacta i Tailwind CSS-a, dok istovremeno gradim online prisutnost.
Portfolio služi ne samo kao prikaz mojih dosadašnjih projekata, već i kao testno okruženje za nove ideje i funkcionalnosti. 
Svaki element na stranici odražava moj stil i pristup razvoju web aplikacija – minimalistički, responzivan i intuitivan.
Kroz njega želim pokazati svoj napredak, ali i otvoriti vrata budućim suradnjama.   
Ovo nije samo statična stranica – to je moj razvojni put, koji ću konstantno nadograđivati i poboljšavati! 🚀`,
      },
      en: {
        name: "This Portfolio",
        shortDescription: "You are currently here :)",
        description: `I created this portfolio to showcase my work, skills, and projects that I'm developing.
My main goal was to create a personal space where I can experiment with modern technologies like React and Tailwind CSS, while building an online presence.
The portfolio serves not only as a display of my projects so far, but also as a testing environment for new ideas and functionalities.
Every element on the page reflects my style and approach to web application development – minimalist, responsive, and intuitive.
Through it, I want to show my progress, but also open doors for future collaborations.
This is not just a static page – it's my development journey, which I will constantly upgrade and improve! 🚀`,
      },
    },
    redirectUrl: "/",
    github: "https://github.com/PavaoDombaj/portfolio",
    technologies: [
      { icon: faReact, iconName: "React" },
      { icon: faHtml5, iconName: "HTML5" },
      { icon: faCss3Alt, iconName: "CSS3" },
    ],
  },
  {
    id: "opgsite",
    slug: "opgsite",
    images: [
      "/images/opgsite/1.png",
      "/images/opgsite/2.png",
      "/images/opgsite/3.png",
      "/images/opgsite/4.png",
      "/images/opgsite/5.png",
      "/images/opgsite/6.png",
    ],
    translations: {
      hr: {
        name: "OPG site",
        shortDescription: "Site za OPG s mogućnošću pisanja bloga (novosti)",
        description: `Ova web stranica izrađena je kao centralno mjesto za predstavljanje OPG-a i komunikaciju s posjetiteljima. 
    Prije same implementacije, dizajnirao sam izgled stranice u Figmi kako bih definirao strukturu i vizualni identitet, a zatim sam taj dizajn prenio u kod koristeći React i Tailwind CSS.
    Osim osnovnih informacija o radu i ponudi, integrirao sam i blog sekciju putem Sanity CMS-a, gdje se mogu objavljivati novosti, članci i obavijesti. 
    Cilj je bio napraviti preglednu, modernu i responzivnu web stranicu koja istovremeno služi i kao praktičan alat za dijeljenje sadržaja.
    Korištenjem Sanityja omogućeno je jednostavno upravljanje objavama i sadržajem, dok vizualni pristup ostaje minimalistički, funkcionalan i prilagođen potrebama OPG-a.
    Ovaj projekt spoj je dizajna i razvoja – od početne skice u Figmi do potpuno funkcionalne web stranice.`,
      },
      en: {
        name: "OPG site",
        shortDescription: "Website for a family farm with blog functionality",
        description: `This website was created as a central place to represent a family farm (OPG) and communicate with visitors. 
    Before starting development, I designed the layout in Figma to define the structure and visual identity, and then translated that design into code using React and Tailwind CSS. 
    In addition to providing basic information about the farm’s work and offerings, I integrated a blog section powered by Sanity CMS, where news, updates, and articles can be published. 
    The goal was to build a clean, modern, and responsive website that also serves as a practical tool for sharing content.
    Sanity ensures smooth and flexible content management, while the overall design remains minimalist, functional, and tailored to the needs of the family farm. 
    This project represents a complete workflow from initial design in Figma to a fully functional website built with modern web technologies.`,
      },
    },
    redirectUrl: "https://opg.hr/",
    github: "https://github.com/PavaoDombaj/opg-site",
    technologies: [
      { icon: faFigma, iconName: "Figma" },
      { icon: faReact, iconName: "React" },
      { icon: faHtml5, iconName: "HTML5" },
      { icon: faCss3Alt, iconName: "CSS3" },
    ],
  },
  {
    id: "genapply",
    slug: "ai-resume-builder",
    images: ["https://www.onlinegearboxparts.com/wp-content/uploads/indev.gif"],
    translations: {
      hr: {
        name: "GenApply AI Resume Builder",
        shortDescription:
          "Platforma za kreiranje profesionalnih životopisa uz pomoć umjetne inteligencije (Gemini API).",
        description: `GenApply je moderni AI alat za izradu životopisa razvijen s ciljem da pojednostavi i ubrza proces prijave za posao. Korištenjem React-a za dinamično korisničko sučelje i Tailwind CSS-a za responzivan i moderan dizajn, platforma pruža fluidno iskustvo.
    
    Ključna funkcionalnost je integracija s Google Gemini AI API-jem, koji automatski generira profesionalne sažetke i opise posla na temelju unesenih podataka i odabranog zanimanja, osiguravajući da je sadržaj optimiziran za sustave praćenja kandidata (ATS).
    
    Korisnicima je omogućeno da biraju između više predložaka dizajna i prilagođavaju boju teme (themeColor), dok se podaci automatski spremaju u Strapi. Za sigurnu autentifikaciju koristi se Clerk. Projekt spaja snagu AI-ja s čistim i funkcionalnim web razvojem.`,
      },
      en: {
        name: "GenApply AI Resume Builder",
        shortDescription:
          "AI-powered platform for generating professional resumes using the Gemini API.",
        description: `GenApply is a modern AI resume builder tool developed to simplify and accelerate the job application process. Built using React for a dynamic user interface and Tailwind CSS for a responsive and modern design, the platform offers a fluid user experience.
    
    The core feature is the integration with the Google Gemini AI API, which automatically generates professional summaries and job descriptions based on user input and selected job title, ensuring the content is optimized for Applicant Tracking Systems (ATS).
    
    Users can choose from multiple design templates and customize the theme color. Data is securely stored using Strapi, and Clerk is utilized for robust user authentication. This project merges the power of AI with clean and functional web development.`,
      },
    },
    redirectUrl: "",
    github: "https://github.com/PavaoDombaj/AiResumeBuilder",
    technologies: [
      { icon: faReact, iconName: "React" },
      { icon: faPlus, iconName: "Gemini AI API" },
    ],
  },
];

export default projectData;
