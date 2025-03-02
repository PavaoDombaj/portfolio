import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-[#191818] drop-shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Slika projekta */}
      <img className="w-full h-48 object-cover" src={project.image} alt={project.name} />

      {/* Naziv i kratak opis */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-red-600">{project.name}</div>
        <p className="text-gray-300 text-base">{project.shortDescription}</p>
      </div>

      {/* Tehnologije */}
      <div className="px-6 py-4">
        <div className="flex space-x-3 j">
          {project.technologies.map((tech, index) => (
            <FontAwesomeIcon key={index} icon={tech} className="text-xl text-blue-500" />
          ))}
        </div>
      </div>

      {/* GitHub redirect */}
      {project.github && (
        <div className="px-6 py-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faGithub} /> View on GitHub
          </a>
        </div>
      )}

      {/* Link za detalje */}
      <div className="px-6 py-4">
        <a
          href={project.redirectUrl}
          className="text-blue-500 hover:text-blue-700"
        >
          See Project Details
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
