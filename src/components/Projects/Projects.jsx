import "./Projects.css";
import projects from "../../utils/data";
import { useState } from "react";
import PictureModal from "../PictureModal/PictureModal";

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState({
    title: "",
    description: "",
    url: "#",
  });
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__description">
        Here are some of the projects I have worked on.
        <br />
        (Click on the images to see more details)
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
            update their profile information.
            <br />
            Built with React, Express.js, and Mongo DB.
          </p>
          <div className="projects__list-images">
            {projects.WTWR.map((project) => (
              <img
                key={project.title}
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
            Rica: San José).
            <br />
            Built with React and the Open Weather API.
          </p>
          <div className="projects__list-images">
            {projects.JP_Map.map((project) => (
              <img
                key={project.title}
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
          <h2 className="projects__item-title">Spots</h2>
          <p className="projects__item-description">
            The Spots project was an early project I worked on that featured a
            simple image sharing design that allowed users to upload and share
            images as well as upload and use a custom avatar. The site also made
            use of a simple mock api that allowed changes made to the site to be
            persistent.
            <br />
            Built with Javascript and a simple custom-built API.
          </p>
          <div className="projects__list-images">
            {projects.Spots.map((project) => (
              <img
                key={project.title}
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
      </ul>
      <p className="projects__description">
        For an exhaustive list of all my work go&nbsp;
        <a
          href="https://github.com/Reximus44?tab=repositories"
          className="projects__link"
          target="_blank"
        >
          here
        </a>
      </p>
      <PictureModal
        modalIsOpen={modalIsOpen}
        image={selectedImage}
        onClose={() => {
          setModalIsOpen(false);
        }}
      />
    </section>
  );
}

export default Projects;
