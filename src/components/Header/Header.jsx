import "./Header.css";
import Selfie_pic from "../../assets/Dylan_Cokley_Yosemite_edit.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <p className="header__home">Home</p>
      </Link>
      <Link to="/about-me" className="header__link">
        <p className="header__about-me">About Me</p>
      </Link>
      <h1 className="header__title">The Portfolio of Dylan Cokley</h1>
      <Link to="/projects" className="header__link">
        <p className="header__projects">Projects</p>
      </Link>
      <Link to="/contact-me" className="header__link">
        <p className="header__contact-me">Contact Me</p>
      </Link>
    </header>
  );
}

export default Header;
