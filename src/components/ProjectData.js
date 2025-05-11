import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const projectData = [
  {
    id: "bookly",
    slug: "bookly",
    images: ["/images/bookly/1.png", "/images/bookly/2.jpg", "/images/bookly/3.jpg", "/images/bookly/4.jpg", "/images/bookly/5.jpg", "/images/bookly/6.jpg"],
    translations: {
      hr: {
        name: "Bookly",
        shortDescription: "Rezerviranje termina frizerskih i ostalih usluga",
        description: `Bookly je web aplikacija osmišljena za brzo i jednostavno rezerviranje frizerskih termina. Razvio sam je kao završni rad u srednjoj školi, inspiriran vlastitim frustracijama oko naručivanja kod barbera – dugog čekanja na odgovor i izgubljenog vremena.
Ova aplikacija omogućava veću fleksibilnost i praktičnost kako za klijente, tako i za frizerske salone. Iako još nije službeno pokrenuta, planiram je dovršiti i objaviti. Trenutno radim na ispravljanju bugova i dodavanju novih funkcionalnosti.
Ovo je bio moj prvi veći projekt i, iako je predstavljao ogroman izazov za srednjoškolca, naučio sam puno kroz njegovo razvijanje. Možda nije savršen, ali ponosan sam na ono što sam postigao – i ovo je tek početak!`
      },
      en: {
        name: "Bookly",
        shortDescription: "Booking system for hairdressing and other services",
        description: `Bookly is a web application designed for quick and easy booking of hairdressing appointments. I developed it as my final project in high school, inspired by my own frustrations with barber appointments – long waiting times for responses and wasted time.
This application provides greater flexibility and convenience for both clients and hair salons. Although it hasn't been officially launched yet, I plan to complete and publish it. I'm currently working on fixing bugs and adding new features.
This was my first major project and, although it presented a huge challenge for a high school student, I learned a lot through its development. It may not be perfect, but I'm proud of what I've achieved – and this is just the beginning!`
      }
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
    images: ["/images/portfolio/1.png",
      "/images/portfolio/2.png","/images/portfolio/3.png","/images/portfolio/4.png",
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
Ovo nije samo statična stranica – to je moj razvojni put, koji ću konstantno nadograđivati i poboljšavati! 🚀`
      },
      en: {
        name: "This Portfolio",
        shortDescription: "You are currently here :)",
        description: `I created this portfolio to showcase my work, skills, and projects that I'm developing.
My main goal was to create a personal space where I can experiment with modern technologies like React and Tailwind CSS, while building an online presence.
The portfolio serves not only as a display of my projects so far, but also as a testing environment for new ideas and functionalities.
Every element on the page reflects my style and approach to web application development – minimalist, responsive, and intuitive.
Through it, I want to show my progress, but also open doors for future collaborations.
This is not just a static page – it's my development journey, which I will constantly upgrade and improve! 🚀`
      }
    },
    redirectUrl: "/",
    github: "https://github.com/PavaoDombaj/portfolio",
    technologies: [
      { icon: faReact, iconName: "React" },
      { icon: faHtml5, iconName: "HTML5" },
      { icon: faCss3Alt, iconName: "CSS3" },
    ],
  },
];

export default projectData;
