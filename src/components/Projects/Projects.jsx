import "./Projects.css";
import projects from "../../utils/data";
import { useState } from "react";
import PictureModal from "../PictureModal/PictureModal";

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__description">
        Here are some of the projects I have worked on.
      </p>
      <ul className="projects__list">
        <li className="projects__item">
          <h2 className="projects__item-title">WTWR</h2>
          <p className="projects__item-description">
            Pronounced “what to wear” this responsive full-stack project uses a
            weather API to recommend users clothing that fits the current
            weather by filtering out garments that don't fit the current
            temperature and weather. Signed in users can also save and upload
            their own clothing items as well as edit and update their profile
            information. Built with React, Express.js, and mongo DB.
          </p>
          {projects.map((project) => (
            <img
              src={project.url}
              alt={project.title}
              className="projects__item-img"
              onClick={() => {
                setSelectedImage(project);
                setModalIsOpen(true);
              }}
            />
          ))}
        </li>
        <li className="projects__item">
          <h2 className="projects__item-title">Project 2</h2>
          <p className="projects__item-description">
            This is a description of project 2.
          </p>
        </li>
        <li className="projects__item">
          <h2 className="projects__item-title">Project 3</h2>
          <p className="projects__item-description">
            This is a description of project 3.
          </p>
        </li>
      </ul>
      {modalIsOpen && (
        <PictureModal
          modalIsOpen={modalIsOpen}
          image={selectedImage}
          onClose={() => {
            setModalIsOpen(false);
            setSelectedImage(null);
          }}
        />
      )}
    </section>
  );
}

export default Projects;
