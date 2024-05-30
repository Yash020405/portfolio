import React from 'react';
import './About.css';
import profileImage from './Assets/profile_image.jpeg';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Yash Agarwal, a passionate web developer with a keen interest in creating dynamic and beautiful web applications. With a background in computer science and experience in various web technologies, I strive to build projects that not only function well but also provide a great user experience.
          </p>
          <p>
            Over the years, I've worked on numerous projects that have helped me hone my skills in frontend and backend development. I'm always eager to learn new technologies and improve my craft.
          </p>
          <p>
            When I'm not coding, you can find me exploring new places, reading tech blogs, or working on side projects that challenge me to think outside the box.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
