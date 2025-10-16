import React from 'react';
import { motion } from 'framer-motion';
import '../styles/certifications.css';
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
  const certifications = [
    {
      name: 'Google Cloud Career Launchpad-Generative AI Leader track',
      org: 'Google Cloud',
      date: '6 September 2025',
      link:'https://drive.google.com/file/d/18-Suw_hHbEZWT_Ej6bjX2A8i0siAjUFK/view?usp=drive_link'
    },
     {
      name: 'Java DSA Course-Master the Fundamentals and Beyond',
      org: 'Scaler',
      date: '2 August 2025',
      link:'https://drive.google.com/file/d/1MJf7tYQ-_SsOnAZUPWvoJOzJ7fIGRWuO/view?usp=drive_link'
    },
     {
      name: 'Getting Started with NodeJS',
      org: 'Simplilearn',
      date: '23 July 2025',
      link:'https://drive.google.com/file/d/1SipfbJsyi1NXEXFww6RI0hGa59mOZBoi/view?usp=drive_link'
    },
        {
      name: 'Introduction to MongoDB',
      org: 'MongoDB University',
      date: '7 June 2025',
      link:'https://drive.google.com/file/d/1QqT4L4wa58USxcg13fF9215hEtmtWMVo/view?usp=drive_link'
    },
    {
      name: 'Git and GitHub for Developers',
      org: 'Infosys Springboard',
      date: '22 April 2025',
      link:'https://drive.google.com/file/d/1fpPQsh9ao6p6UqAkl-MRJv1OksXbk85w/view?usp=drive_link'
    },
    {
      name: 'Beginning Python',
      org: 'Infosys Springboard',
      date: '15 April 2025',
      link:'https://drive.google.com/file/d/1fl3FPd4oVZKQ0epzn7YuoFKaNCnPwQUQ/view?usp=drive_link'
    },
    {
      name: 'Micro-Certification - Welcome to ServiceNow',
      org: 'ServiceNow',
      date: '10 April 2025',
      link:'https://drive.google.com/file/d/1IVilT8vew9JknzHXVj_HD317JQNUugkL/view?usp=drive_link'
    },
    {
      name: 'JavaScript Essential Training',
      org: 'LinkedIn Learning',
      date: '20 January 2025',
      link:'https://drive.google.com/file/d/1pTQ-EZhIQh3AvL2qhyc-U1GTY2HG9H4I/view?usp=drive_link'
    },
    {
      name: 'React Essential Training',
      org: 'LinkedIn Learning',
      date: '9 January 2025',
      link:'https://drive.google.com/file/d/10sHvVW1C7lH9onaUfy05QVqyY8UDDky_/view?usp=drive_link'
    },
    {
      name: 'Google Cloud Career Launchpad-Cloud Engineer track',
      org: 'Google Cloud',
      date: '3 September 2024',
      link:'https://drive.google.com/file/d/1LLJYggRbdlagqhXFchaYbo0AFw0XhObN/view?usp=drive_link'
    },
    {
      name: 'Machine Learning for Data Science Projects',
      org: 'IBM',
      date: '27 December 2023',
      link:'https://drive.google.com/file/d/1MsOYqontiOIntP_BqVru02eS88aQ6_1F/view?usp=drive_link'
    },
  ];
function Certification() {
   return (
    <motion.section
      className="cert-section"
      id="certifications"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="cert-container">
        <motion.div className="cert-intro" variants={cardVariants}>
          <Typing text="My Certifications" />
          <p className="cert-para">
            To stay current and enhance my skills, I’ve completed several certifications in full
            stack development, cloud computing, and emerging technologies from top platforms.
          </p>
        </motion.div>

        <motion.div className="cert-grid" variants={containerVariants}>
          {certifications.map((cert, index) => (
            <motion.div
              className="cert-card"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3>{cert.name}</h3>
              <p>
                <strong>Organization:</strong> {cert.org}
              </p>
              <p>
                <strong>Issue Date:</strong> {cert.date}
              </p>
              {cert.link && (
              <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="cert-button"
>
   View Certificate
</a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Certification;