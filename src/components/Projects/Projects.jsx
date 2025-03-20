import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__description">
        Here are some of the projects I have worked on.
      </p>
      <div className="projects__list">
        <div className="projects__item">
          <h2 className="projects__item-title">Project 1</h2>
          <p className="projects__item-description">
            This is a description of project 1.
          </p>
        </div>
        <div className="projects__item">
          <h2 className="projects__item-title">Project 2</h2>
          <p className="projects__item-description">
            This is a description of project 2.
          </p>
        </div>
        <div className="projects__item">
          <h2 className="projects__item-title">Project 3</h2>
          <p className="projects__item-description">
            This is a description of project 3.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
