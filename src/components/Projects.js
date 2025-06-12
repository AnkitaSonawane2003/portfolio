import React from 'react';
import '../styles/project.css';
import pic1 from "../assets/scholar.png";
import pic2 from "../assets/NGO.png";
import pic3 from "../assets/device3.jpeg";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-intro">
          <h1>My Projects</h1>
          <p className="projects-para">
            Here are some of the projects I’ve built to apply and strengthen my full stack development skills. From designing intuitive UIs to developing robust backends, each project reflects my ability to solve real-world problems using technologies like HTML, CSS, PHP, React, Node.js, MongoDB, and more.
          </p>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <h2>Scholar Archive</h2>
            <br></br>
            <p> A comprehensive online resource hub for engineering students, Curated library of textbooks and study materials, organized syllabus for easy academic
           navigation, repository of past exam papers to help students prepare, user-friendly interface for seamless access to resources. providing study materials, syllabus, and previous year question papers.</p>
            <p><strong>Tech Stack:</strong> PHP, MySQL, HTML, CSS</p>
            <br></br>
          <a
    href="https://github.com/AnkitaSonawane2003/Scholar_Archive"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub Link

  </a> 
  <br></br>  
            <img src={pic1} alt="Scholar Archive" />
          </div>

          <div className="project-card">
            <h2>NGO Connector</h2>
            <p>A platform that connects donors with NGOs, providing detailed NGO listings and helping users find organizations
           aligned with their causes, NGO listings with detailed profiles, user authentication for personalized experience ,
           responsive and user-friendly interface.</p>
            <p><strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js</p>
            <img src={pic2} alt="NGO Connector" />
          </div>

        

          <div className="project-card">
            <h2>Women Safety Device</h2>
            <p>I developed a smart wearable Women Safety Device that sends GPS location, SMS alerts, and initiates phone calls when a button is pressed during emergencies.
It uses the A9G GPS & GSM module for real-time tracking and communication.
The device is powered by an ESP32 C3 (XIAO) and programmed using Arduino IDE.
A React Native mobile app interfaces with the device for number management.
The backend is built using the MERN stack, enabling secure and dynamic data handling.</p>
            <p><strong>Tech Stack:</strong> React Native, MERN Stack, ESP32, A9G Module</p>
            <img src={pic3} alt="Women Safety Device" />
          </div>



            <div className="project-card">
            <h2>Saarthi Website</h2>
            <p>A platform that connects skilled workers like electricians, plumbers, and carpenters with people needing their services. It helps workers find job opportunities while making it
           easier for users to hire professionals, worker profTech.</p>
            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
