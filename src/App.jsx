import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Companies from './pages/companies/Companies';
import FindACoFounder from './pages/find-a-co-founder/FindACoFounder';
import Library from './pages/library/Library';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/find-a-co-founder" element={<FindACoFounder />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  )
}

export default App