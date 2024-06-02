import './Section.css';
import Typing from './Typing';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from './Assets/profile_image.jpeg';

function Section() {
  return (
    <section id="home">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <span className='Name'>Yash Agarwal</span>
      <span className='Typing'>
        <span className="im-text">I'm</span> <b><Typing 
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
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={32} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a>
      </div>
    </section>
  );
}

export default Section;
