import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);

  // On scroll zatvori meni
  useEffect(() => {
    const handleScroll = () => setOpenNav(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className=" top-0 left-0 w-full bg-[#0a0b0d] shadow-md z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold">
          Pavao Dombaj
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-white text-lg">
          <li>
            <a href="#" className="hover:text-red-500 transition">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-red-500 transition">Projects</a>
          </li>
          <li>
            <a href="#about" className="hover:text-red-500 transition">About</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col bg-[#0a0b0d] transition-all duration-300 ${
          openNav ? "max-h-40 py-4 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#" className="text-white text-lg text-center py-2 hover:text-red-500" onClick={() => setOpenNav(false)}>Home</a>
        <a href="#projects" className="text-white text-lg text-center py-2 hover:text-red-500" onClick={() => setOpenNav(false)}>Projects</a>
        <a href="#about" className="text-white text-lg text-center py-2 hover:text-red-500" onClick={() => setOpenNav(false)}>About</a>
      </div>
    </nav>
  );
};

export default NavbarSimple;
