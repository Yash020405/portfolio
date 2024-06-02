import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaTools, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar-container">
            <ul className="navbar">
                <li className="nav-item">
                    <Link to="/">
                        <FaHome className="icon" /> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">
                        <FaInfoCircle className="icon" /> About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects">
                        <FaProjectDiagram className="icon" /> Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/skills">
                        <FaTools className="icon" /> Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/education">
                        <FaGraduationCap className="icon" /> Education
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">
                        <FaEnvelope className="icon" /> Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;