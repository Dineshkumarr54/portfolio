import './Home.css';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className="highlight">Dinesh Kumar</span>
      </motion.h1>

      <motion.h3 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 1 }}
      >
        A Passionate Web Developer
      </motion.h3>

      <motion.img 
        src={profileImg} 
        alt="Profile" 
        className="profile-img"
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.6, duration: 1 }}
      />

      <motion.p 
        className="mt-3"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
      >
        I love building responsive and interactive websites using React, Bootstrap, and modern web technologies.
      </motion.p>

      <motion.div 
        className="mt-4 d-flex gap-3 flex-wrap justify-content-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.3, duration: 1 }}
      >
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="src/assets/resume.pdf" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </motion.div>
    </div>
  );
}

export default Home;
