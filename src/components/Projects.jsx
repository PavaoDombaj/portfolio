import React from 'react';
import ProjectCard from './ProjectCard';
import { faReact, faNodeJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const projectData = [
  {
    name: 'Bookly',
    image: '/images/bookly.png',
    shortDescription: 'Rezerviranje termina frizerskih i ostalih usluga',
    description: '',
    redirectUrl: '/projects/bookly',
    github: '',
    technologies: [faReact, faNodeJs, faHtml5, faCss3Alt],
  },
  {
    name: 'This Porfolio',
    image: '/images/portfolio.png',
    shortDescription: 'Tu se trenutno nalazis :)',
    description: '',
    redirectUrl: '',
    github: null, 
    technologies: [faReact, faHtml5, faCss3Alt],
  },
];
const Projects = () => {
  return (
    <section className='w-full px-6 bg-[#131313] mt-5'>
      <h1 className="font-bold text-4xl underline-offset-5 underline">
        My Projects
      </h1>
      <p className="mt-5 mb-5 text-xl">Ovdje mozete vidjeti neke od mojih projekata:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
