import React from 'react';
import './Education.css';
import { FaUniversity, FaSchool } from 'react-icons/fa';

function Education() {
  return (
    <div className="education-container">
      <h1 className="education-heading">Education</h1>
      <div className="timeline">
        <div className="event">
          <div className="event-icon">
            <FaSchool className="school-icon" />
          </div>
          <div className="event-details">
            <div className="event-title">Birla High School</div>
            <div className="event-subtitle">Class 1-12</div>
            <p className="event-description">Grades: 97.2% in Class 10 and 95.2% in Class 12</p>
          </div>
        </div>
        <div className="event">
          <div className="event-icon">
            <FaUniversity className="university-icon" />
          </div>
          <div className="event-details">
            <div className="event-title">Scaler School of Technology</div>
            <div className="event-subtitle">Currently Pursuing</div>
            <p className="event-description">Pursuing BS + MS in Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
