import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        
        <p className="mb-2 mb-md-0">
          © {new Date().getFullYear()} Dinesh Kumar. All Rights Reserved.
        </p>

        <div className="footer-social d-flex gap-3">
          <a href="mailto:dineshkumarr0518@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dineshkumarr5431/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Dineshkumarr54" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
