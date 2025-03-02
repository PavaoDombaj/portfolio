import React from "react";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-between px-10 py-16"
    >
      {/* Lijeva strana - Tekst */}
      <div className="w-1/2">
        <h1 className="font-bold text-4xl text-red-600 mb-5">O meni</h1>
        <p className="text-gray-300">
          neki kratak opis neki kratak opis neki kratak opis neki kratak opis
          neki kratak opis neki kratak opis
        </p>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-700 text-white font-bold mt-5">
            Download CV
          </button>
        </a>
      </div>

      {/* Desna strana - Slika */}
      <div className="w-1/2 flex justify-end right-10">
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
