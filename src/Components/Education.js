import React from 'react';
import './Education.css';
import { BsFillPersonFill, BsBook, BsBriefcaseFill } from 'react-icons/bs';

function Education() {
  return (
    <div className="education-container">
      <header>
        <h1>Education</h1>
      </header>
      <main>
        <section className="timeline">
          <div className="event high-school">
            <div className="event-icon"><BsBook /></div>
            <div className="event-details">
              <h2>Birla High School</h2>
              <p>Grades: 97.2% (Class 10) | 95.2% (Class 12)</p>
              <p>Year: 20XX - 20XX</p>
            </div>
          </div>
          <div className="event current-school">
            <div className="event-icon"><BsBriefcaseFill /></div>
            <div className="event-details">
              <h2>Currently at Scaler School of Technology</h2>
              <p>Year: 20XX - Present</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Education;