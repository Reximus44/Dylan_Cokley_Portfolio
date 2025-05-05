import "./Header.css";
import DropDownModal from "../DropDownModal/DropDownModal";
import Selfie_pic from "../../assets/Dylan_Cokley_Yosemite_edit.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import HighlightedLink from "../HighlightedLink/HighlightedLink";

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <header className="header">
      <HighlightedLink to="/" className="header__link">
        <p className="header__home">Home</p>
      </HighlightedLink>
      <HighlightedLink to="/about-me" className="header__link">
        <p className="header__about-me">About Me</p>
      </HighlightedLink>
      <h1 className="header__title">The Portfolio of Dylan Cokley</h1>
      <HighlightedLink to="/projects" className="header__link">
        <p className="header__projects">Projects</p>
      </HighlightedLink>
      <HighlightedLink to="/contact-me" className="header__link">
        <p className="header__contact-me">Contact Me</p>
      </HighlightedLink>
      <button
        className="header__dropdown-btn"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <img
          src="src/assets/burger-menu-icon.svg"
          alt="dropdown button"
          className="header__dropdown-btn-img"
        />
      </button>
      <DropDownModal
        modalIsOpen={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
      />
    </header>
  );
}

export default Header;
