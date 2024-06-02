import React from 'react';
import './Skills.css';
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaTerminal, FaPython, FaGithub, FaDatabase, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className='skills-heading'>Skills</h2>
      <div className="skills-list">
        <div className="skill-item"><FaReact className="skill-icon" />React.js</div>
        <div className="skill-item"><FaJava className="skill-icon" />Java</div>
        <div className="skill-item"><FaHtml5 className="skill-icon" />HTML</div>
        <div className="skill-item"><FaCss3Alt className="skill-icon" />CSS</div>
        <div className="skill-item"><FaJs className="skill-icon" />JavaScript</div>
        <div className="skill-item"><FaTerminal className="skill-icon" />Command Line Interface</div>
        <div className="skill-item"><SiSpring className="skill-icon" />Spring Boot</div>
        <div className="skill-item"><FaPython className="skill-icon" />Python</div>
        <div className="skill-item"><FaGithub className="skill-icon" />GitHub</div>
        <div className="skill-item"><FaNodeJs className="skill-icon" />Node.js</div>
        <div className="skill-item"><FaDatabase className="skill-icon" />MySQL</div>
        <div className="skill-item"><FaCode className="skill-icon" />Data Structures and Algorithms (DSA)</div>
      </div>
    </div>
  );
}

export default Skills;
