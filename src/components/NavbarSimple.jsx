import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);

  // Zatvori meni kad se scrolla
  useEffect(() => {
    const handleScroll = () => setOpenNav(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="relative w-[90%] lg:w-[80%] mx-auto bg-[#0a0b0dcf] backdrop-blur-lg shadow-lg z-50 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 mt-6">
      
      {/* Logo */}
      <a href="/" className="text-white text-2xl font-bold tracking-wide hover:text-red-500 transition">
        Pavao Dombaj
      </a>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 text-white text-lg">
        {["Home", "Projects", "About"].map((item, index) => (
          <li key={index}>
            <a href={`/#${item.toLowerCase()}`} className="relative group transition">
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full mt-3 w-full left-0 bg-[#0a0b0d] transition-all duration-300 rounded-lg shadow-lg overflow-hidden ${
          openNav ? "max-h-60 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {["Home", "Projects", "About"].map((item, index) => (
          <a 
            key={index} 
            href={`#${item.toLowerCase()}`} 
            className="block text-white text-lg text-center py-2 hover:text-red-500 transition"
            onClick={() => setOpenNav(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavbarSimple;
