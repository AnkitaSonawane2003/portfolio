import React from 'react'
import '../styles/project.css'


function Projects() {
  return (
    
<section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          
        </div>
       

    <div className="cards-container">
  <div className="about-card">
    <div className="card-content">
      <div className="about-content">
        <h1>My projects</h1>
        <br></br>
        <p className='para'>Here are some of the projects I’ve built to apply and strengthen my skills in full stack development. Each project reflects my ability to solve real-world problems
           using technologies like HTML,CSS,PHP, React, Node.js, MongoDB, and more. From designing intuitive user interfaces to 
          developing robust backends, these projects highlight my passion for creating functional and impactful web applications.</p>
       

      </div>
    </div>

    
    <div className="inner-cards">
     <div className="about-card1">

 
  <div className="education-entry">
    
  </div>

 <h3>Scholar Archive</h3>
   <br></br>
        <p className='head'> A comprehensive online resource hub for engineering students, Curated library of textbooks and study materials, organized syllabus for easy academic
           navigation, repository of past exam papers to help students prepare, user-friendly interface for seamless access to resources. providing study materials, syllabus, and previous year question papers.</p>
        <p className='head'> Tech Stack: PHP, MySQL, HTML, CSS</p>
        <div className="image">
                
        
              </div>
</div>

      <div className="about-card1">
        <h3>NGO Connector</h3>  <br></br>
        <p className='head'>A platform that connects donors with NGOs, providing detailed NGO listings and helping users find organizations
           aligned with their causes, NGO listings with detailed profiles, user authentication for personalized experience ,
           responsive and user-friendly interface.
           

 </p>
        <p className='head'>Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js)</p>
        <div className="image">
               
           
                 </div>
      </div>
       <div className="about-card1">
        <h3>Saarthi Website</h3>  <br></br>
        <p className='head'>A platform that connects skilled workers like electricians, plumbers, and carpenters with people needing their services. It helps workers find job opportunities while making it
           easier for users to hire professionals, worker profTech.</p>
            <p className='head'>Stack: HTML, CSS, JavaScript, PHP Database: MySQL</p>
      </div>
       <div className="about-card1">
        <h3>Women Safety Device</h3>  <br></br>
        <p className='head'>A smart wearable Women Safety Device that sends GPS location, SMS alerts, and initiates phone calls when a button is pressed during emergencies.
It uses the A9G GPS & GSM module for real-time tracking and communication.
The device is powered by an ESP32 C3 (XIAO) and programmed using Arduino IDE.
A React Native mobile app interfaces with the device for number management.
The backend is built using the MERN stack, enabling secure and dynamic data handling.

</p> <div className="image">
       

      </div>
      </div>
      
    </div>
  </div>
</div>


      
      </div>
    </section>
  
  )
}

export default Projects
