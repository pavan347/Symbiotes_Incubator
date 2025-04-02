import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from "./components/navbar/Navbar";

const App = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const [isDarkMode, setIsDarkMode] = useState(false);
  
  
  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   }
  

  // // Toggle theme and update the root class
  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // useEffect(() => {
  //   // // Set initial theme based on system preference
  //   // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   // if (prefersDark) {
  //   //   setIsDarkMode(true);
  //   //   document.documentElement.classList.add("dark");
  //   // }
  //   if (!isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);
  return (
    <div>
      <Navbar />
    
    </div>
  )
}

export default App