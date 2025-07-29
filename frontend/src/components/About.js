import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import { Typewriter } from 'react-simple-typewriter';
import pic from "../assets/pic.jpeg";
import Typing from './Typing'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  const innerCards = [
    {
      title: "Education",
      content: (
        <>
          <div className="education-entry">
            <h4>Pursuing B.Tech in CSE</h4>
            <p>DBATU, Deogiri Institute of Engineering and Management Studies <br /><em>(2022 – 2026)</em></p>
          </div>
          <div className="education-entry">
            <h4>HSC – Class 12</h4>
            <p>Deogiri College <em>(2020 – 2022)</em> – 85.5%</p>
          </div>
          <div className="education-entry">
            <h4>CBSE – Class 10</h4>
            <p>Deogiri Global Academy <em>(2019 – 2020)</em> – 91.8%</p>
          </div>
        </>
      )
    },
    {
      title: "My Design Philosophy",
      content: (
        <p className="head">
          I aim to create solutions that improve lives through <strong>usability</strong>, <strong>accessibility</strong>, and meaningful design. <br />
      I believe great design isn’t just about how things look — it's about how they work.
        My approach to design focuses on <strong>clarity</strong>, <strong>consistency</strong>, and <strong>context</strong> — ensuring every interaction feels natural and meaningful. <br />
    
        </p>
      )
    },
    {
      title: "My Hobbies",
      content: (
        <ul>
          <li>Coding</li>
          <li>Reading books</li>
          <li>Exploring new tech & tools</li>
          <li>Listening to music & sketching</li>
        </ul>
      )
    },
    {
      title: "Learning",
      content: (
        <p className="head">
          Currently exploring backend frameworks (Node.js, Express), Gen-AI, and cloud platforms to strengthen full-stack proficiency.
        </p>
      )
    },
    {
      title: "Ankita Sonawane",
      content: (
        <>
          <p className="head">Frontend Developer | Backend Developer | Problem Solver | Tech Enthusiast</p>
          <a
            href="/Final Resume.pdf"
            download
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>
        </>
      )
    }
  ];

  return (
    <motion.section
      className="about-section"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-container">
        {/* About Me Card */}
        <motion.div className="about-card" variants={cardVariants}>
          <div className="about-content">
            <Typing text="About Me"/>
            <p className="para">
              <motion.div
  className="typing-header"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  <h2 className="typing-name">
    <Typewriter
      words={["Hi, I am  Ankita Sonawane"]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </h2>
</motion.div>
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
        </motion.div>

        {/* Inner Cards Section */}
        <motion.div className="inner-cards" variants={containerVariants}>
          {innerCards.map((card, index) => (
            <motion.div
              key={index}
              className="about-card1"
              variants={cardVariants}
             whileHover={{ scale: 1.02, y: -2 }}

              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
