// About.js

import React from 'react';
import './About.css';
import { FaChessKnight, FaMedal, FaMicrophoneAlt, FaSuitcase } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <div className="about-content">
        <div className="about-paragraph">
          <p>
            I am Yash Agarwal, a Computer Science student currently pursuing my BS + MS in Computer Science.
            I have a passion for coding and enjoy solving challenging problems with Java, data structures, and algorithms.
            As a web developer, I love crafting elegant solutions that make a difference in people's lives.
          </p>
          <p>
            In addition to my technical skills, I have diverse interests outside of technology.
            I am an avid chess player, always seeking to improve my strategic thinking and decision-making abilities.
            Sports play an important role in my life, and I actively participate in cricket tournaments.
            Music is another passion of mine, and I enjoy exploring different genres and artists in my free time.
          </p>
          <p>
            Traveling is one of my favorite activities as it allows me to explore new cultures, cuisines, and landscapes.
            Whether it's a weekend getaway or an adventurous trek, I'm always excited to embark on new journeys.
            These experiences enrich my life and inspire me to approach challenges with an open mind and curiosity.
          </p>
          <p>
            Feel free to reach out to me for collaborations, projects, or just to chat about technology and beyond.
            Let's connect and create something amazing together!
          </p>
        </div>
        <div className="about-icons">
          <div className="icon">
            <FaChessKnight className="about-icon" size={120} />
          </div>
          <div className="icon">
            <FaMedal className="about-icon" size={120} />
          </div>
          <div className="icon">
            <FaMicrophoneAlt className="about-icon" size={120} />
          </div>
          <div className="icon">
            <FaSuitcase className="about-icon" size={120} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

