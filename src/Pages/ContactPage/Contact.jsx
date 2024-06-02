import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={32} /></a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={32} /></a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} /></a>
      </div>
    </section>
  );
}

export default Contact;
