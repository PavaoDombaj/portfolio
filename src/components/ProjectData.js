import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import { SiNextdotjs, SiSupabase, SiTailwindcss, SiReact, SiStrapi, SiPostgresql, SiDocker, SiNginx, SiVite} from "react-icons/si";

const projectData = [
  {
  id: "genapply",
  slug: "genapply-ai-resume-builder",
  order: 1,
  images: [
    "/images/genapply/1.png",
    "/images/genapply/2.png",
    "/images/genapply/3.png",
    "/images/genapply/4.png",
    "/images/genapply/5.png",
    "/images/genapply/6.png",
    "/images/genapply/7.png",


  ],
  translations: {
    hr: {
      name: "GenApply – AI Resume Builder",
      shortDescription:
        "AI alat za izradu životopisa i prijava, s automatskim parsiranjem CV-a, generiranjem sadržaja i modernim editorom u stvarnom vremenu.",
      description:
        "GenApply je full‑stack web aplikacija za brzu izradu profesionalnih životopisa i prijava. Frontend je izgrađen u Reactu (Vite), dok backend koristi Strapi kao headless CMS i API sloj. Aplikacija omogućava korisnicima registraciju, prijavu i upravljanje više verzija životopisa kroz moderan dashboard.\n\nKljučna funkcionalnost je AI integracija preko Google Gemini modela: korisnik može uploadati svoj postojeći CV (PDF/DOCX), backend parsira sadržaj i strukturira ga u polja prilagođena editoru. Unutar editora moguće je generirati i poboljšati tekst uz pomoć AI‑a, dok se promjene prikazuju u real‑time previewu. Svi podaci se pohranjuju u PostgreSQL bazu putem Strapi API‑ja.\n\nProjekt je deployan na vlastiti VPS koristeći Docker Compose (odvojeni servisi za Strapi, PostgreSQL i frontend) te Nginx kao reverse proxy s HTTPS podrškom putem Let’s Encrypt certifikata. Posebna pažnja posvećena je SEO‑u (meta tagovi, Open Graph, strukturirana početna stranica) i osnovnoj analitici kroz Google Analytics 4. GenApply kombinira moderne web tehnologije, rad s infrastrukturom (VPS, Docker, Nginx) i praktičnu primjenu AI‑a u rješavanju stvarnog problema.\n\nZadnja slika prikazuje vizitku koju sam dizajnirao za GenApply – primjer mog grafičkog rada s modernim, minimalističkim pristupom i brend konsistentnošću.",
    },
    en: {
      name: "GenApply – AI Resume Builder",
      shortDescription:
        "An AI‑powered resume builder with CV parsing, content generation, and a modern real‑time editor.",
      description:
        "GenApply is a full‑stack web application for creating professional resumes and job applications quickly. The frontend is built with React (Vite), while the backend uses Strapi as a headless CMS and API layer. Users can register, log in, and manage multiple resume versions through a modern dashboard experience.\n\nThe core feature is AI integration via the Google Gemini model: users can upload their existing CV (PDF/DOCX), the backend parses the content and maps it into structured fields tailored for the editor. Inside the editor, users can generate and improve text using AI, while changes are reflected in a real‑time preview. All data is stored in a PostgreSQL database via the Strapi API.\n\nThe project is deployed on a self‑hosted VPS using Docker Compose (separate services for Strapi, PostgreSQL, and the frontend) and Nginx as a reverse proxy with HTTPS provided by Let’s Encrypt certificates. Extra attention was given to SEO (meta tags, Open Graph, structured landing page content) and basic analytics through Google Analytics 4. GenApply combines modern web technologies, infrastructure work (VPS, Docker, Nginx), and practical AI integration to solve a real‑world problem.\n\nThe last image showcases a business card I designed for GenApply – an example of my graphic design work with a modern, minimalist approach and brand consistency.",
    }
  },
  redirectUrl: "https://genapply.xyz/",
  github: "",
  technologies: [
    { icon: SiReact, iconName: "React" },
    { icon: SiVite, iconName: "Vite" },
    { icon: SiStrapi, iconName: "Strapi" },
    { icon: SiPostgresql, iconName: "PostgreSQL" },
    { icon: SiDocker, iconName: "Docker" },
    { icon: SiNginx, iconName: "Nginx" },
    { icon: SiTailwindcss, iconName: "Tailwind CSS" }
  ]
},
  {
    id: "darioprikolice",
    slug: "dario-prikolice",
    order: 3,
    images: [
      "/images/darioprikolice/1.png",
      "/images/darioprikolice/2.png",
    ],
    translations: {
      hr: {
        name: "Dario Prikolice",
        shortDescription:
          "Web stranica za najam auto prikolica i prijevoz — pojedinačne specifikacije, cjenik i kontakt.",
        description:
          "Dario Prikolice je web stranica izrađena za obrt koji nudi najam auto prikolica i usluge prijevoza u Koprivnici i okolici. Stranica predstavlja ponudu usluga, jasan cjenik bez skrivenih troškova te pojedinačne stranice za svaku prikolicu s detaljnim specifikacijama — dimenzije, nosivost, LED rasvjeta i primjeri korištenja.\n\nSvaka prikolica ima vlastitu podstranicu s galerijom fotografija, tehničkim podacima i odvojenim cjenikom najma. Početna stranica vodi posjetitelje kroz ponudu, proces najma u tri koraka te dodatne usluge prijevoza robe i selidbi po dogovoru. Aplikacija je izgrađena u Next.js-u s Tailwind CSS-om, optimizirana za SEO i mobilne uređaje, s naglaskom na brzi kontakt (telefon, WhatsApp) i lokalnu vidljivost.\n\nProjekt je objavljen i dostupan na produkciji — uživo na https://darioprikolice.hr/.\n\nUz razvoj web stranice izradio sam i potpuni vizualni identitet firme — logo, tipografiju, paletu boja i grafičke materijale — koji je konzistentno prenesen kroz cijelu stranicu.",
      },
      en: {
        name: "Dario Prikolice",
        shortDescription:
          "Website for trailer rental and transport — per-trailer specs, pricing, and contact.",
        description:
          "Dario Prikolice is a website built for a business offering car trailer rentals and transport services in Koprivnica and the surrounding area. It presents the service offering, transparent pricing with no hidden fees, and dedicated pages for each trailer with detailed specifications — dimensions, load capacity, LED lighting, and typical use cases.\n\nEach trailer has its own subpage with a photo gallery, technical data, and a separate rental price list. The homepage guides visitors through the fleet, a simple three-step rental process, and additional freight and moving services available on request. The app is built with Next.js and Tailwind CSS, optimized for SEO and mobile devices, with a strong focus on quick contact (phone, WhatsApp) and local visibility.\n\nThe project is live in production at https://darioprikolice.hr/.\n\nAlongside the website, I also created the company’s full visual identity — logo, typography, color palette, and graphic assets — applied consistently across the entire site.",
      },
    },
    redirectUrl: "https://darioprikolice.hr/",
    github: "",
    technologies: [
      { icon: faFigma, iconName: "Figma" },
      { icon: SiNextdotjs, iconName: "Next.js" },
      { icon: SiTailwindcss, iconName: "Tailwind CSS" },
    ],
  },
  {
    id: "bookly",
    slug: "bookly",
    order: 5,
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
  // {
  //   id: "portfolio",
  //   slug: "portfolio",
  //   order: 5,
  //   images: [
  //     "/images/portfolio/1.png",
  //     "/images/portfolio/2.png",
  //     "/images/portfolio/3.png",
  //     "/images/portfolio/4.png",
  //   ],
  //   translations: {
  //     hr: {
  //       name: "Ovaj Portfolio",
  //       shortDescription: "Tu se trenutno nalaziš ",
  //       description: `Ovaj portfolio sam izradio kako bih predstavio svoj rad, vještine i projekte koje razvijam. 
  // Glavni cilj bio mi je stvoriti osobni prostor gdje mogu eksperimentirati s modernim tehnologijama poput Reacta i Tailwind CSS-a, dok istovremeno gradim online prisutnost.
  // Portfolio služi ne samo kao prikaz mojih dosadašnjih projekata, već i kao testno okruženje za nove ideje i funkcionalnosti. 
  // Svaki element na stranici odražava moj stil i pristup razvoju web aplikacija – minimalistički, responzivan i intuitivan.
  // Kroz njega želim pokazati svoj napredak, ali i otvoriti vrata budućim suradnjama.   
  // Ovo nije samo statična stranica – to je moj razvojni put, koji ću konstantno nadograđivati i poboljšavati! 🚀`,
  //     },
  //     en: {
  //       name: "This Portfolio",
  //       shortDescription: "You are currently here ",
  //       description: `I created this portfolio to showcase my work, skills, and projects that I'm developing.
  // My main goal was to create a personal space where I can experiment with modern technologies like React and Tailwind CSS, while building an online presence.
  // The portfolio serves not only as a display of my projects so far, but also as a testing environment for new ideas and functionalities.
  // Every element on the page reflects my style and approach to web application development – minimalist, responsive, and intuitive.
  // Through it, I want to show my progress, but also open doors for future collaborations.
  // This is not just a static page – it's my development journey, which I will constantly upgrade and improve! 🚀`,
  //     },
  //   },
  //   redirectUrl: "",
  //   github: "https://github.com/PavaoDombaj/portfolio",
  //   technologies: [
  //     { icon: faReact, iconName: "React" },
  //     { icon: faHtml5, iconName: "HTML5" },
  //     { icon: faCss3Alt, iconName: "CSS3" },
  //   ],
  // },
  {
    id: "opgsite",
    slug: "opgsite",
    order: 4,
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
    redirectUrl: "",
    github: "https://github.com/PavaoDombaj/opg-site",
    technologies: [
      { icon: faFigma, iconName: "Figma" },
      { icon: faReact, iconName: "React" },
      { icon: faHtml5, iconName: "HTML5" },
      { icon: faCss3Alt, iconName: "CSS3" },
    ],
  },{
  id: "cinemark",
  slug: "cine-mark",
  order: 2,
  images: ["/images/cinemark/1.png",
      "/images/cinemark/2.png",
      "/images/cinemark/3.png",
      "/images/cinemark/4.png"],
  translations: {
    hr: {
      name: "CineMark",
      shortDescription: "Moderna web aplikacija za ljubitelje filmova s pretragom, wishlistom i ocjenjivanjem.",
      description: "CineMark je moderna web aplikacija namijenjena ljubiteljima filmova, izgrađena koristeći Next.js 14. Omogućava real-time pretragu filmova bez potrebe za pritiskom na Enter, upravljanje osobnom wishlistom za filmove koje želite pogledati kasnije, te ocjenjivanje i komentiranje već pogledanih filmova.\n\nKljučna funkcionalnost uključuje integraciju s TMDB API-jem za pristup bogatoj bazi filmskih podataka, dok Supabase osigurava sigurnu autentifikaciju korisnika i pohranu podataka u bazi. Aplikacija koristi Row Level Security (RLS) politike za zaštitu privatnosti korisničkih podataka.\n\nKorisnici mogu uživati u modernom tamnom dizajnu realiziranom s Tailwind CSS-om, fluidnim animacijama zahvaljujući Framer Motion-u, te responzivnom sučelju koje radi na desktopu i mobilnim uređajima. Projekt kombinira snagu suvremenih web tehnologija s intuitivnim korisničkim iskustvom."
    },
    en: {
      name: "CineMark",
      shortDescription: "A modern web app for movie lovers featuring search, wishlist, and movie rating.",
      description: "CineMark is a modern web application designed for movie enthusiasts, built using Next.js 14. It enables real-time movie search without needing to press Enter, managing a personal wishlist for movies you want to watch later, and rating and commenting on movies you've already seen.\n\nCore functionality includes integration with the TMDB API for access to a rich movie database, while Supabase ensures secure user authentication and data storage. The app utilizes Row Level Security (RLS) policies to protect user data privacy.\n\nUsers can enjoy a modern dark design implemented with Tailwind CSS, smooth animations thanks to Framer Motion, and a responsive interface that works on desktops and mobile devices. The project combines the power of modern web technologies with an intuitive user experience."
    }
  },
  redirectUrl: "https://cine-mark.vercel.app/",
  github: "https://github.com/PavaoDombaj/CineMark",
  technologies: [
    { icon: SiNextdotjs, iconName: "Next.js" },
    { icon: SiSupabase, iconName: "Supabase" },
    { icon: SiTailwindcss, iconName: "Tailwind CSS" },
  ],
},
];


export default projectData;
