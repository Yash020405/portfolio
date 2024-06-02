import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2 className='contact-heading'>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:yashaga0204@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={48} /></a>
        <a href="https://www.instagram.com/yash_agarwal0204?igsh=OXNzZ3V4bjlpeTRo" target="_blank" rel="noopener noreferrer"><FaInstagram size={48} /></a>
        <a href="https://www.linkedin.com/in/yash-agarwal-94a9a12a2/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={48} /></a>
      </div>
    </section>
  );
}

export default Contact;
