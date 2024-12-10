import React, { useState } from "react";
import "../styles/ContactUs.css";
import { FaEnvelope } from "react-icons/fa"; // Importing email icon

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="pad">
      <div className="contact-form-container">
        <div className="icon">
          <FaEnvelope size={40} />
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="e443680a-9c90-4aae-a0a9-9c9df22c8393"
          ></input>
          <div className="grid-container">
            {/* Name and Email Inputs (First Row) */}
            <div className="grid-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Subject Input (Second Row) */}
            <div className="grid-item full-width">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message Input (Third Row) */}
            <div className="grid-item full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div className="grid-item full-width">
              <button style={{ fontSize: "20px" }} type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
