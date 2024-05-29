import './Section.css';
import Typing from './Typing';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Section() {
  return (
    <section id="home">
      <span className='Name'>Yash Agarwal</span>
      <span className='Typing'>
        I'm <b><Typing 
          text={[
            "Java Developer",
            "AI Enthusiast",
            "Web Developer",
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
        /></b>
      </span>
      <div className='social-icons'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </section>
  );
}

export default Section;
