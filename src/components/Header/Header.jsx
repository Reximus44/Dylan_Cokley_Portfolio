import "./Header.css";
import Selfie_pic from "../../assets/Dylan_Cokley_Yosemite_edit.png";
import { Link } from "react-router-dom";
import HighlightedLink from "../HighlightedLink/HighlightedLink";

function Header() {
  return (
    <header className="header">
      <HighlightedLink to="/" className="header__link">
        <p className="header__home header__link">Home</p>
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
    </header>
  );
}

export default Header;
