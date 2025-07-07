// About.jsx
import "./About.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function About() {
  return (
    <div className="about-container" id="about">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 1 }}
      >
        I am a passionate Web Developer with a strong interest in building responsive and interactive websites using modern technologies like React, Bootstrap, and more.
      </motion.p>

      <motion.div 
        className="tech-stack"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="tech-item">
          <FaHtml5 className="tech-icon" style={{ color: "#e34c26" }} />
          <p>HTML</p>
        </div>
        <div className="tech-item">
          <FaCss3Alt className="tech-icon" style={{ color: "#264de4" }} />
          <p>CSS</p>
        </div>
        <div className="tech-item">
          <FaJs className="tech-icon" style={{ color: "#f0db4f" }} />
          <p>JavaScript</p>
        </div>
        <div className="tech-item">
          <FaReact className="tech-icon" style={{ color: "#61DBFB" }} />
          <p>React</p>
        </div>
        <div className="tech-item">
          <FaBootstrap className="tech-icon" style={{ color: "#563d7c" }} />
          <p>Bootstrap</p>
        </div>
        <div className="tech-item">
          <FaJava className="tech-icon" style={{ color: "#007396" }} />
          <p>Java</p>
        </div>
        <div className="tech-item">
          <SiMysql className="tech-icon" style={{ color: "#00758F" }} />
          <p>MySQL</p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
