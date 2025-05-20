import React, { useState } from 'react';
import '../styles/contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you'd like to work together or share innovative thoughts of project, use the form below.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <p>Or reach out via:</p>
        <a href="abc@gmail.com">Email</a> | 
         
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Contact;
