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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ Error sending message. Try again later.');
    }
  };

  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <p>Let's connect! Whether you want to collaborate or share an idea, drop a message below.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">👤 Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">📧 Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">💬 Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Your message here..."
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
