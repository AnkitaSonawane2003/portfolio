import React from 'react';
import '../styles/skills.css';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Intro Card */}
        <div className="skills-card">
          <div className="skills-content">
            <h1>My Skills</h1>
            <p className="skills-para">
              I have developed a strong skill set across various programming languages, frameworks, and tools that enable me to build efficient and scalable web and mobile applications. My technical expertise, combined with problem-solving abilities and a continuous learning mindset, allows me to tackle diverse challenges effectively.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          <div className="skills-card1">
            <h2>Programming Languages</h2>
            <ul>
              <li>C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="skills-card1">
            <h2>Web Development Technologies</h2>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="skills-card1">
            <h2>Soft Skills</h2>
            <ul>
              <li>Adaptability</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Leadership</li>
              <li>Problem Solving</li>
            </ul>
          </div>

          <div className="skills-card1">
            <h2>Languages</h2>
            <ul>
              <li>English (Fluent)</li>
              <li>Hindi (Fluent)</li>
              <li>Marathi (Fluent)</li>
              <li>Sanskrit (Fluent)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
