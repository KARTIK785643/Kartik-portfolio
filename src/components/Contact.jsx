

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic, like sending data to a backend or email
    setSubmitted(true);
  };

  return (
    <div className="contact-section glass">
      <h2>Contact Me</h2>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="question">Question / Message</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="success-message">Thank you! Your message has been sent.</p>
      )}
       <div className="socials">
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button github">GitHub</a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button linkedin">LinkedIn</a>
       {/* Add more social links as needed */}
    </div>
    </div>
  );
};

export default Contact;
