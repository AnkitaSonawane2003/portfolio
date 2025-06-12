import React from 'react';
import '../styles/certifications.css';

function Certification() {
  const certifications = [
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
      name: 'Google Cloud Career Launchpad',
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

  return (
    <section className="cert-section" id="certifications">
      <div className="cert-container">
        <div className="cert-intro">
          <h1>My Certifications</h1>
          <p className="cert-para">
            To stay current and enhance my skills, I’ve completed several certifications in full stack development, cloud computing, and emerging technologies from top platforms.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h3>{cert.name}</h3>
              <p><strong>Organization:</strong> {cert.org}</p>
              <p><strong>Issue Date:</strong> {cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
