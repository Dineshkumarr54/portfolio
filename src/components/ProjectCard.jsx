import "./ProjectCard.css";

function ProjectCard({ title, description, image, github }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => window.open(github, "_blank")}>
        View Project
      </button>
    </div>
  );
}

export default ProjectCard;
