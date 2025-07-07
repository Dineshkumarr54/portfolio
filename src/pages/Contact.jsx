import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      time: new Date().toLocaleString()   // Adds time field
    };

    emailjs
      .send(
        "service_g6g61pf",      // Replace with your actual Service ID
        "template_v1f9a7b",     // Replace with your actual Template ID
        emailData,
        "rpfwpW49K14j5lF3m"     // Replace with your actual Public Key (User ID)
      )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error.text);
        alert("Failed to send message, please try again.");
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <motion.form 
          onSubmit={sendEmail}
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.3 }}
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            value={formData.message} 
            onChange={handleChange} 
          ></textarea>
          <button type="submit" className="btn btn-primary mt-3 send-btn">Send Message</button>
        </motion.form>

        <motion.div 
          className="contact-icons mt-4 d-flex justify-content-center gap-4"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="mailto:dineshkumarr0518@gmail.com" className="icon-link">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dineshkumarr5431/" className="icon-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
