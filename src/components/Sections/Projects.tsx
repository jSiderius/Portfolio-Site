import "../../css/Projects.css";
import { projects } from "../../data/ProjectsData";
import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

export default function Projects() {
  return (
    <>
      <section className="projects-top-container">
        <h1 className="projects-header">Projects</h1>
        <div className="projects-track-container">
          <ProjectsTrack />
          <ProjectsTrack />
        </div>
        {/* <h1>Featured Projects</h1>;Modal boxes for projects */}
        {/* Include: Demo link, github link, language tags, Tagline, Description, Image */}
        {/* Probably define a type for this */}
      </section>
    </>
  );
}

function ProjectsTrack() {
  return (
    <div className="projects-track">
      {projects.map((proj) => (
        <div className="projects-modal-box custom-border-effect card">
          <span className="border"></span>
          <div
            className="projects-modal-image-box"
            style={{ marginBottom: "1em" }}
          >
            <img
              className="projects-modal-image"
              src={proj.imagePath}
              alt="Project preview"
              style={{ width: "auto", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h5>{proj.name}</h5>
          <p>{proj.description}</p>
          <div className="tech-stack-container">
            {proj.techStack.map((techString) => (
              <p className="sub-card-textbox">{techString}</p>
            ))}
          </div>

          <div className="link-button-container flexbox-push">
            <a
              tabIndex={-1}
              href={proj.demoLink}
              target={proj.demoLink == "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="btn btn-dark link-button button-primary custom-border-effect"
            >
              <span className="border"></span>
              {<FaPlay />}
              Demo
            </a>

            {/* TODO: Future implementation to allow tabbing to the projects scroll */}
            <a
              tabIndex={-1}
              href={proj.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark link-button button-secondary custom-border-effect"
            >
              <span className="border"></span>
              {<FaGithub />}
              Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
