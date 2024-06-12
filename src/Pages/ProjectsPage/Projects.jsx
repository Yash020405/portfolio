import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import Image_Editor from '../../Assets/Image_Editor.jpeg';
import Web_Scrapper from '../../Assets/Web_Scrapper.jpeg';
import Music_Player from '../../Assets/Music_Player.jpeg';
import Yulu from '../../Assets/Yulu.jpeg';
import Aerofit from '../../Assets/Aerofit.jpeg';
import Portfolio from '../../Assets/Portfolio.jpeg';
import Quiz from '../../Assets/Quiz.jpeg';
import Service from '../../Assets/Service_Website.jpeg';

const projectsData = [
  {
    id: 1,
    title: 'Image Editor',
    description: 'A comprehensive image editing tool offering a variety of effects, and adjustment options to enhance your photos.',
    imageUrl: Image_Editor,
    githubUrl: 'https://github.com/Yash020405/ImageEditor',
  },
  {
    id: 2,
    title: 'Web Scrapper',
    description: 'A powerful application designed to extract data from various websites, enabling users to compare product prices across different online platforms.',
    imageUrl: Web_Scrapper,
    githubUrl: 'https://github.com/Yash020405/Web_Scrapper',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: ' A personal portfolio website that showcases my projects, skills, and experiences, with an elegant and responsive design.',
    imageUrl: Portfolio,
    githubUrl: 'https://github.com/Yash020405/portfolio',
  },
  {
    id: 4,
    title: 'Music Player',
    description: 'A versatile music player that allows users to listen to music, adjust volume, skip tracks forward and backward, and more.',
    imageUrl: Music_Player,
    githubUrl: 'https://github.com/Yash020405/Music_Player',
  },
  {
    id: 5,
    title: 'Quiz Website',
    description: 'Suspendisse potenti. Donec mattis, nisl at scelerisque aliquet, nisi libero viverra quam.',
    imageUrl: Quiz,
    githubUrl: 'https://github.com/Yash020405/Quiz',
  },
  {
    id: 6,
    title: 'Yulu Data Analysis',
    description: 'A data analysis tool that processes and visualizes Yulu bike-sharing data to provide insights into usage patterns and trends.',
    imageUrl: Yulu,
    githubUrl: 'https://github.com/Yash020405/Yulu_Analysis',
  },
  {
    id: 7,
    title: 'Aerofit Data Analysis',
    description: 'A comprehensive data analysis tool for the Aerofit company, providing insights and recommendations based on fitness data to improve business strategies.',
    imageUrl: Aerofit,
    githubUrl: 'https://github.com/Yash020405/Aerofit_Analysis',
  },
  {
    id: 8,
    title: 'Service Website',
    description: 'A landing page designed to showcase services, featuring an attractive layout and essential information for visitors.',
    imageUrl: Service,
    githubUrl: 'https://github.com/Yash020405/Web_Dev_1',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <div className="image-container">
              <img src={project.imageUrl} alt={project.title} />
              <div className="overlay">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub size={20} /> GitHub
                </a>
              </div>
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;