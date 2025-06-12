import React from 'react';
import '../styles/about.css';
import pic from "../assets/pic.jpeg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* About Me Card */}
        <div className="about-card">
          <div className="about-content">
            <h1>About Me</h1>
            <p className="para">
              I’m a <strong>Full Stack Developer</strong> with hands-on experience building dynamic web applications using the <strong>MERN stack</strong>.
            </p>
            <p className="para">
              I've developed projects including <em>NGO platforms</em> and <em>educational portals</em> that solve real-world problems.
            </p>
            <p className="para">
              I enjoy both front-end and back-end development, combining <strong>clean code</strong> with a <strong>user-first</strong> mindset.
            </p>
            <p className="para">
              I’m also passionate about <strong>learning new technologies</strong> and building meaningful digital experiences.
            </p>
          </div>
          <div className="about-image">
            <img src={pic} alt="Ankita Sonawane" className="profile-img" />
          </div>
        </div>

        {/* Info Grid Cards */}
        <div className="inner-cards">
          <div className="about-card1">
            <h2>Education</h2>
            <div className="education-entry">
              <h4>Pursuing B.Tech in CSE</h4>
              <p>DBATU, Deogiri Institute of Engineering and Management Studies, Chh.Sambhajinagar <br></br><em>(2022 – 2026)</em></p>
            </div>
            <div className="education-entry">
              <h4>HSC – Class 12</h4>
              <p>Deogiri College <em>(2020 – 2022)</em> – 85.5%</p>
            </div>
            <div className="education-entry">
              <h4>CBSE – Class 10</h4>
              <p>Deogiri Global Academy <em>(2019 – 2020)</em> – 91.8%</p>
            </div>
          </div>

          <div className="about-card1">
            <h3>My Design Philosophy</h3>
            <p className="head">
              I aim to create solutions that improve lives through <strong>usability, accessibility</strong>, and meaningful design. Whether it's UI/UX or full-stack systems, I always start with the user.
            </p>
          </div>

          <div className="about-card1">
            <h3>My Hobbies</h3>
            <ul>
              <li>Coding</li>
              <li>Reading books</li>
              <li>Exploring new tech & tools</li>
              <li>Listening to music & sketching</li>
            </ul>
          </div>

          <div className="about-card1">
            <h3>Learning</h3>
            <p className="head">
              Currently exploring backend frameworks (Node.js, Express), Gen-AI, and cloud platforms to strengthen full-stack proficiency.
            </p>
          </div>
          <div className="about-card1">
            <h1>Ankita Sonawane</h1>
<p className='head'>Frontend Developer | Backend Developer | Problem Solver | Tech Enthusiast</p>
<a
  href="/resume.pdf"
  download
  className="resume-button"
  target="_blank"
  rel="noopener noreferrer"
>
  📄 Download Resume
</a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
