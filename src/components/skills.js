import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Skills() {
  const skillCards = [
    {
      title: 'Programming Languages',
      items: ['C', 'Java', 'JavaScript', 'Python', 'HTML', 'CSS'],
    },
    {
      title: 'Web Development Technologies',
      items: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PHP', 'MySQL'],
    },
    {
      title: 'Soft Skills',
      items: [
        'Adaptability',
        'Communication',
        'Teamwork',
        'Time Management',
        'Leadership',
        'Problem Solving',
      ],
    },
    {
      title: 'Languages',
      items: ['English (Fluent)', 'Hindi (Fluent)', 'Marathi (Fluent)', 'Sanskrit (Fluent)'],
    },
  ];

  return (
    <motion.section
      className="skills-section"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="skills-container">
        {/* Intro Card */}
        <motion.div className="skills-card" variants={cardVariants}>
          <div className="skills-content">
            <Typing text="My Skills"/>
            <p className="skills-para">
              I have developed a skill set across various programming languages,
              frameworks, and tools that enable me to build efficient and scalable web 
              applications. My technical expertise, combined with problem-solving abilities and a
              continuous learning mindset, allows me to tackle diverse challenges effectively.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="skills-grid" variants={containerVariants}>
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              className="skills-card1"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2>{card.title}</h2>
              <ul>
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;