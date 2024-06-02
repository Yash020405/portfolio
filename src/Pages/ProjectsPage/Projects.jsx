import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Image Editor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius nibh eget ex tincidunt, in mattis justo scelerisque.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project1',
  },
  {
    id: 2,
    title: 'Web Scrapper',
    description: 'Pellentesque vel sem nec sem auctor blandit. Mauris condimentum ipsum vel est fermentum, vel viverra nulla efficitur.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project2',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Curabitur lacinia mi at purus condimentum, at efficitur dolor vehicula.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project3',
  },
  {
    id: 4,
    title: 'Patient Record System',
    description: 'Nam vehicula urna sit amet nisi bibendum, sed consectetur tortor fermentum.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project4',
  },
  {
    id: 5,
    title: 'Music Player',
    description: 'Sed ac sapien sed velit sollicitudin luctus. Nulla facilisi.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project5',
  },
  {
    id: 6,
    title: 'Quiz App',
    description: 'Suspendisse potenti. Donec mattis, nisl at scelerisque aliquet, nisi libero viverra quam.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project6',
  },
  {
    id: 7,
    title: 'Yulu Data Analysis',
    description: 'Suspendisse potenti. Donec mattis, nisl at scelerisque aliquet, nisi libero viverra quam.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project6',
  },
  {
    id: 8,
    title: 'Aerofit Data Analysis',
    description: 'Suspendisse potenti. Donec mattis, nisl at scelerisque aliquet, nisi libero viverra quam.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project6',
  },
  {
    id: 9,
    title: 'Service Website',
    description: 'Suspendisse potenti. Donec mattis, nisl at scelerisque aliquet, nisi libero viverra quam.',
    imageUrl: 'https://via.placeholder.com/150',
    githubUrl: 'https://github.com/project6',
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