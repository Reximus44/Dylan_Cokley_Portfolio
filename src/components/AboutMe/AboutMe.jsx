import "./AboutMe.css";
import Selfie_pic from "../../assets/Dylan_Cokley_Yosemite_edit.png";

function AboutMe() {
  return (
    <main className="about-me">
      <h1 className="about-me__header">About Me</h1>
      <p className="about-me__description">
        Results-driven Front-End Web Developer with a passion for creating
        responsive, user-friendly, and visually appealing web applications.
        Proficient in modern front-end technologies, including HTML, CSS,
        JavaScript, React, and Vue.js, with a strong understanding of UI/UX
        principles. Skilled in building dynamic and interactive web experiences,
        optimizing performance, and ensuring cross-browser compatibility.
        Experienced in collaborating with designers, back-end developers, and
        stakeholders to deliver seamless digital solutions. Adept at using Git,
        Webpack, and modern development tools to streamline workflows and
        improve efficiency. Committed to writing clean, maintainable code and
        staying updated with the latest industry trends.
      </p>
      <img src={Selfie_pic} alt="" className="about-me__img" />
    </main>
  );
}

export default AboutMe;
