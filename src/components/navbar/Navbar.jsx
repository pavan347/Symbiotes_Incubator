import React, { useState } from "react";
import symbiotesLogo from "../../assets/symbiotes_logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between  py-4 md:max-w-4/5 mx-auto">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="w-18 pr-1.5">
           

           <img src={symbiotesLogo} alt="symbiotes logo" />
          </div>
          <div className="hidden md:flex space-x-6 text-light text-sm">
            <a href="#" className="hover:text-gray-900">
              About
            </a>
            <a href="#" className="hover:text-gray-900">
              Companies
            </a>
            <a href="#" className="hover:text-gray-900">
              Startup Jobs
            </a>
            <a href="#" className="hover:text-gray-900">
              Find a Co-Founder
            </a>
            <a href="#" className="hover:text-gray-900">
              Library
            </a>
            <a href="#" className="hover:text-gray-900">
              SAFE
            </a>
            <a href="#" className="hover:text-gray-900">
              Resources
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-light text-sm">
            Apply for <span className="font-bold">S2025</span> batch.
          </span>
          <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded hover:bg-secondary cursor-pointer">
            Apply
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-light focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-light text-sm">
          <a href="#" className="block hover:text-gray-900">
            About
          </a>
          <a href="#" className="block hover:text-gray-900">
            Companies
          </a>
          <a href="#" className="block hover:text-gray-900">
            Startup Jobs
          </a>
          <a href="#" className="block hover:text-gray-900">
            Find a Co-Founder
          </a>
          <a href="#" className="block hover:text-gray-900">
            Library
          </a>
          <a href="#" className="block hover:text-gray-900">
            SAFE
          </a>
          <a href="#" className="block hover:text-gray-900">
            Resources
          </a>
          <div className="flex flex-col space-y-2">
            <span className="text-light">
              Apply for <span className="font-bold">S2025</span> batch.
            </span>
            <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded hover:bg-secondary cursor-pointer">
              Apply
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
