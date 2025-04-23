import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const projectData = [
  {
    name: "Bookly",
    slug: "bookly",
    images: ["/images/bookly/1.png", "/images/bookly/2.png"],
    shortDescription: "Rezerviranje termina frizerskih i ostalih usluga",
    description: `Bookly je web aplikacija osmišljena za brzo i jednostavno rezerviranje frizerskih termina. Razvio sam je kao završni rad u srednjoj školi, inspiriran vlastitim frustracijama oko naručivanja kod barbera – dugog čekanja na odgovor i izgubljenog vremena.
Ova aplikacija omogućava veću fleksibilnost i praktičnost kako za klijente, tako i za frizerske salone. Iako još nije službeno pokrenuta, planiram je dovršiti i objaviti. Trenutno radim na ispravljanju bugova i dodavanju novih funkcionalnosti.
Ovo je bio moj prvi veći projekt i, iako je predstavljao ogroman izazov za srednjoškolca, naučio sam puno kroz njegovo razvijanje. Možda nije savršen, ali ponosan sam na ono što sam postigao – i ovo je tek početak! `,
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
    name: "This Portfolio",
    slug: "portfolio",
    images: ["/images/portfolio/1.png",
      "/images/portfolio/2.png",
    ],
    shortDescription: "Tu se trenutno nalazis :)",
    description: `
      Ovaj portfolio sam izradio kako bih predstavio svoj rad, vještine i projekte koje razvijam. 
      Glavni cilj bio mi je stvoriti osobni prostor gdje mogu eksperimentirati s modernim tehnologijama poput Reacta i Tailwind CSS-a, 
      dok istovremeno gradim online prisutnost.
      Portfolio služi ne samo kao prikaz mojih dosadašnjih projekata, već i kao testno okruženje za nove ideje i funkcionalnosti. 
      Svaki element na stranici odražava moj stil i pristup razvoju web aplikacija – minimalistički, responzivan i intuitivan.
      Kroz njega želim pokazati svoj napredak, ali i otvoriti vrata budućim suradnjama.   
      Ovo nije samo statična stranica – to je moj razvojni put, koji ću konstantno nadograđivati i poboljšavati! 🚀
    `,
    redirectUrl: "/",
    github: null,
    technologies: [
      { icon: faReact, iconName: "React" },
      { icon: faHtml5, iconName: "HTML5" },
      { icon: faCss3Alt, iconName: "CSS3" },
    ],
  },
];

export default projectData;
