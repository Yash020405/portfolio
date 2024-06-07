import './Home.css';
import Typing from '../../Components/Typing';
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import Instagram and YouTube icons
import profileImage from '../../Assets/profile_image.jpeg';

function Home() {
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
        <a href="https://www.instagram.com/yash_agarwal0204?igsh=OXNzZ3V4bjlpeTRo" target="_blank" rel="noopener noreferrer"><FaInstagram size={37} /></a>
        <a href="https://youtube.com/@yashagarwal0204?si=JcKnskpmj47FupvZ" target="_blank" rel="noopener noreferrer"><FaYoutube size={37} /></a>
        <a href="https://www.linkedin.com/in/yash-agarwal-94a9a12a2/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={37} /></a>
        <a href="https://github.com/Yash020405" target="_blank" rel="noopener noreferrer"><FaGithub size={40} /></a>
      </div>
    </section>
  );
}

export default Home;