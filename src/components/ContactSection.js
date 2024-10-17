// ContactSection.js
import React, { useState, useEffect } from 'react';
import './ContactSection.css';
import validator from 'validator';

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const validateForm = () => {
      const { name, email, message } = formData;
      const newErrors = {};

      if (!name) newErrors.name = 'Name is required';
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!validator.isEmail(email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!message) newErrors.message = 'Message is required';

      setErrors(newErrors);
      setIsSubmitDisabled(Object.keys(newErrors).length > 0);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error-text">{errors.message}</span>}

        <button type="submit" disabled={isSubmitDisabled}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactSection;
