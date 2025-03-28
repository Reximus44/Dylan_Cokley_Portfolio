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
            Pronounced “what to wear” this responsive full-stack project makes
            use of a weather API to track the users local climate in order to
            recommend appropriate clothing while filtering out garments that
            don't match the current temperature and weather. Signed in users can
            also save and upload their own clothing items as well as edit and
            update their profile information. Built with React, Express.js, and
            Mongo DB.
          </p>
          <div className="projects__list-images">
            {projects.WTWR.map((project) => (
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
          </div>
        </li>
        <li className="projects__item">
          <h2 className="projects__item-title">Jurassic Park Map</h2>
          <p className="projects__item-description">
            As my final project for the TripleTen bootcamp I decided to create a
            front-end react app that allows users to explore the island of Isla
            Sorna from the 1993 cult classic Jurassic Park via an interactive
            map. The user can select different buttons on the map that will
            display a pop-up with information about different dinosaurs one may
            see on a tour through the park. The site also features a weather API
            that shows the current weather and temperature of the approximate
            location of the island. (specifically the coastal capital of Costa
            Rica: San José) Built with React and the Open Weather API.
          </p>
          <div className="projects__list-images">
            {projects["JP Map"].map((project) => (
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
          </div>
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
