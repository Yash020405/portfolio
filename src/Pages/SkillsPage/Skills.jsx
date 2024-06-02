import React from 'react';
import './Skills.css';
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaTerminal, FaPython, FaGithub, FaDatabase, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className='skills-heading'>Skills</h2>
      <div className="skills-list">
        <div className="skill-item"><FaReact className="skill-icon" /><span className='skill-text'>React.js</span></div>
        <div className="skill-item"><FaJava className="skill-icon" /><span className='skill-text'>Java</span></div>
        <div className="skill-item"><FaHtml5 className="skill-icon" /><span className='skill-text'>HTML</span></div>
        <div className="skill-item"><FaCss3Alt className="skill-icon" /><span className='skill-text'>CSS</span></div>
        <div className="skill-item"><FaJs className="skill-icon" /><span className='skill-text'>JavaScript</span></div>
        <div className="skill-item"><FaTerminal className="skill-icon" /><span className='skill-text'>Command Line Interface</span></div>
        <div className="skill-item"><SiSpring className="skill-icon" /><span className='skill-text'>Spring Boot</span></div>
        <div className="skill-item"><FaPython className="skill-icon" /><span className='skill-text'>Python</span></div>
        <div className="skill-item"><FaGithub className="skill-icon" /><span className='skill-text'>GitHub</span></div>
        <div className="skill-item"><FaNodeJs className="skill-icon" /><span className='skill-text'>Node.js</span></div>
        <div className="skill-item"><FaDatabase className="skill-icon" /><span className='skill-text'>MySQL</span></div>
        <div className="skill-item"><FaCode className="skill-icon" /><span className='skill-text'>Data Structures and Algorithms (DSA)</span></div>
      </div>
    </div>
  );
}

export default Skills;
