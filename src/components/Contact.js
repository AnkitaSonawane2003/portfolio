import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMsg, setStatusMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg('');

    try {
      const response = await fetch('https://portfolio-backend-kfhe.onrender.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

      const data = await response.json();

      if (data.success) {
        setStatusMsg('✅ Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMsg('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMsg('❌ Error sending message. Try again later.');
    }

    setIsSubmitting(false);
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

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {statusMsg && <p className="status-message">{statusMsg}</p>}
    </div>
  );
};

export default Contact;
