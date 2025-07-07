import "./Projects.css";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 3 },
  desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const projectData = [
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    image: "/assets/weather.png",
    github: "https://github.com/Dineshkumarr54/Weather-App",
  },
  {
    title: "QR Generator",
    description: "A simple QR code generator built with React.",
    image: "/assets/QrGenerator.png",
    github: "https://github.com/Dineshkumarr54/QR_Generator",
  },
  {
    title: "Spotify Clone",
    description:  "A responsive static Spotify landing page built using HTML and CSS.",
    image: "/assets/spotify-clone.png",
    github: "https://github.com/Dineshkumarr54/Spotify",
  },
    {
    title: "Netflix Clone",
    description: "A static Netflix homepage clone designed with pure HTML and CSS.",
    image: "/assets/netflix-clone.png",
    github: "https://github.com/Dineshkumarr54/Netflix"
  },
  {
    title: "Digital Clock",
    description: "A minimal digital clock web app.",
    image: "/assets/digital-clock.png",
    github: "https://github.com/Dineshkumarr54/Digital-Clock",
  },
  {
    title: "Booksky Project",
    description: "An online book library application.",
    image: "/assets/booksky.png",
    github: "https://github.com/Dineshkumarr54/Booksky",
  },
];


function Projects() {
  return (
    <div className="projects-section" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          showDots={false}
          itemClass="carousel-item-spacing"
          renderButtonGroupOutside={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
