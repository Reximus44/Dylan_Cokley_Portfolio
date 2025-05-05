import "./DropDownModal.css";
import HighlightedLink from "../HighlightedLink/HighlightedLink";

function DropDownModal({ modalIsOpen, onClose }) {
  return (
    <div
      className={`dropdown-modal ${
        modalIsOpen ? "dropdown-modal_is-open" : ""
      }`}
    >
      <div className="dropdown-modal__content">
        <button
          className="header__dropdown-btn_close"
          onClick={onClose}
        ></button>
        <HighlightedLink to="/" className="header__link">
          <p className="header__home" onClick={onClose}>
            Home
          </p>
        </HighlightedLink>
        <HighlightedLink to="/about-me" className="header__link">
          <p className="header__about-me" onClick={onClose}>
            About Me
          </p>
        </HighlightedLink>
        <HighlightedLink to="/projects" className="header__link">
          <p className="header__projects" onClick={onClose}>
            Projects
          </p>
        </HighlightedLink>
        <HighlightedLink to="/contact-me" className="header__link">
          <p className="header__contact-me" onClick={onClose}>
            Contact Me
          </p>
        </HighlightedLink>
      </div>
    </div>
  );
}
export default DropDownModal;
