import React from 'react';
import Typing from './Typing'; 
import { motion } from 'framer-motion';
import '../styles/project.css';
import pic1 from '../assets/scholar.png';
import pic2 from '../assets/NGO.png';
import pic3 from '../assets/device3.jpeg';


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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Projects() {
  const projectData = [
    {
      title: 'Scholar Archive',
      description:
'A comprehensive online resource hub for engineering students, Curated library of textbooks and study materials, organized syllabus for easy academic navigation, repository of past exam papers to help students prepare, user-friendly interface for seamless access to resources. providing study materials, syllabus, and previous year question papers.',
      tech: 'PHP, MySQL, HTML, CSS',
      github: 'https://github.com/AnkitaSonawane2003/Scholar_Archive',
      image: pic1,
    },
    {
      title: 'NGO Connector',
      description:
        'A platform that connects donors with NGOs, providing detailed NGO listings and helping users find organizations aligned with their causes, NGO listings with detailed profiles, user authentication for personalized experience ,responsive and user-friendly interface.',
      tech: 'MongoDB, Express.js, React.js, Node.js',
      github: 'https://github.com/AnkitaSonawane2003/NGO',
      image: pic2,
    },
   
    {
      title: 'Women Safety Device',
      description:
        ' A smart wearable Women Safety Device that sends GPS location, SMS alerts, and initiates phone calls when a button is pressed during emergencies.It uses the A9G GPS & GSM module for real-time tracking and communication.The device is powered by an ESP32 C3 (XIAO) and programmed using Arduino IDE.',
     
      github: '',
      image: pic3,
    },
     {
      title: 'Saarthi Website',
      description:
        'A job-matching platform connecting skilled workers with customers.A platform that connects skilled workers like electricians, plumbers, and carpenters with people needing their services. It helps workers find job opportunities while making it easier for users to hire professionals, worker profTech.',
      tech: 'HTML, CSS, JavaScript, PHP, MySQL',
      github: '',
    },
    {
      title: 'Spam Message Classification',
      description:
        'Spam Message Classification is a mobile application built using Flutter that uses machine learning to classify text messages as Spam or Not Spam.The app allows users to enter messages, get instant predictions, and swipe messages to manually label them, improving dataset quality.',
      tech:'Flutter (Dart),Python,FastAPI,scikit-learn (Naive Bayes),joblib,Render (deployment)',
      github: '',
      
    },
  ];

  return (
    <motion.section
      className="projects-section"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-container">
        {/* Intro */}
        <motion.div className="projects-intro" variants={cardVariants}>
           <Typing text="My Projects" />
          <p className="projects-para">
            Here are some of the projects I’ve built to apply and strengthen my full stack
            development skills. From designing intuitive UIs to developing robust backends, each
            project reflects my ability to solve real-world problems using technologies like HTML,
            CSS, PHP, React, Node.js, MongoDB, and more.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div className="projects-grid" variants={containerVariants}>
          {projectData.map((proj, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <p>
                <strong>Tech Stack:</strong> {proj.tech}
              </p>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  GitHub Link
                </a>
              )}
             {proj.image && (
  <img src={proj.image} alt={proj.title} />
)}


            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
