import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setOpenNav(false);
      
      // Check which section is in view
      const sections = ["home", "projects", "about"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section) => {
    const scrollToSection = () => {
      // Pokušaj pronaći element
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Ako element nije pronađen, pokušaj ponovno nakon kratkog vremena
        setTimeout(() => {
          const retryElement = document.getElementById(section);
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Duži delay za navigaciju između stranica
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition-all duration-300"
          >
            Pavao Dombaj
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Projects", "About"].map((item, index) => {
              const path = item.toLowerCase();
              const isActive = activeSection === path;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigation(path)}
                  className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group ${
                    isActive ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            openNav
              ? "max-h-60 opacity-100 py-4 bg-[#0a0a0a]/90 backdrop-blur-lg"
              : "max-h-0 opacity-0 py-0"
          } overflow-hidden rounded-b-lg shadow-lg`}
        >
          <div className="flex flex-col space-y-4">
            {["Home", "Projects", "About"].map((item, index) => {
              const path = item.toLowerCase();
              const isActive = activeSection === path;
              return (
                <button
                  key={index}
                  onClick={() => {
                    handleNavigation(path);
                    setOpenNav(false);
                  }}
                  className={`text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
                    isActive ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSimple;
