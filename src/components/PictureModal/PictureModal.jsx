import "./PictureModal.css";

function PictureModal({ image, onClose, modalIsOpen }) {
  return (
    <div
      className={`picture-modal ${modalIsOpen ? "picture-modal_is-open" : ""}`}
      onClick={onClose}
    >
      <div className="picture-modal__content">
      <button className="picture-modal__close-btn" onClick={onClose}>
        Close
      </button>
        <img src={image.url} alt={image.title} className="picture-modal__img" />
        <p className="picture-modal__description">{image.description}</p>
      </div>
    </div>
  );
}

export default PictureModal;
