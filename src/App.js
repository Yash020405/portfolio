import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Section from './Components/Section';
import About from './Components/About';
import ProgressBar from './Components/ProgressBar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Education from './Components/Education';

function App() {
  return (
    <Router>
      <div className="App">
        <ProgressBar />
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



