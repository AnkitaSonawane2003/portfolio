import React from 'react';
import '../styles/about.css';
import pic from "../assets/icon.avif";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
        </div>
       

      {/* Four Cards Section */}
    <div className="cards-container">
  <div className="about-card">
    <div className="card-content">
      <div className="about-content">
        <h1>About Me</h1>
        <br></br>
        <p className='para'>I’m a Full Stack Developer with hands-on experience in building dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I have developed multiple projects, including NGO platforms, educational portals each focused on solving real-world problems.

I enjoy working on both the front-end and back-end, ensuring smooth user experiences and efficient performance. My approach combines clean code, thoughtful design, and a user-first mindset.

Beyond coding, I’m always curious to learn new technologies and improve my skills. I believe in continuous growth, collaboration, and creating meaningful digital experiences that make a difference.</p>
      </div>
      <div className="about-image">
        <img src={pic} alt="Ankita Sonawane" />

      </div>
    </div>

   
    <div className="inner-cards">
     <div className="about-card1">
  <h2>Education</h2>
  <br></br>
  <div className="education-entry">
  <h4>Pursuing Bachelor of Technology (B.Tech) in Computer Science and Engineering</h4>
  <p>Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere </p>
  <p>College: Deogiri Institute of Engineering and Management Studies, Aurangabad  <em>(2022 – 2026)</em></p>
</div>


  <div className="education-entry">
    <h4>Higher Secondary Certificate (HSC) – Class 12</h4>
    <p>College- Deogiri College  <em>2020 – 2022</em></p>
    <p> Percentage - 85.50%</p>
  </div>

  <div className="education-entry">
    <h4>Secondary School Certificate (CBSE) – Class 10</h4>
    <p>school — Deogiri Global Academy <em>2019 – 2020</em></p>
    <p>Percentage- 91.8%</p>
  </div>
</div>
<div className="about-card1">
        <h3>My Design and Philosohy</h3>
        <br></br>
        <p className='head'>My mission is to build meaningful digital solutions that improve lives, promote safety, and solve real-world problems. I believe that good design is not just about aesthetics—it's about usability, accessibility, and purpose.

Whether I’m developing a web app, designing a user interface, or integrating hardware with software, I follow a user-first approach focused on simplicity, clarity, and impact. I strive to continuously learn new technologies that help me create more effective and responsible solutions.

</p>
      </div>
  <div className="about-card1">
            <h3>My Hobbies</h3>
            <br></br>
             <ul>
          <li>Coding </li>
             <li>Reading books</li>
    <li>Exploring new technologies and tools</li>
 
    
    <li>Listening to music and creative sketching</li>
        </ul>
          </div>

      <div className="about-card1">
        <h3>Learning</h3>
        <br></br>
        <p className='head'>Currently exploring backend technologies like Node.js and Express, and improving my problem-solving skills.Along with exlporing Gen-AI and cloud technologies.</p>
      </div>
      
    </div>
  </div>
</div>


      
      </div>
    </section>
  );
}

export default About;
