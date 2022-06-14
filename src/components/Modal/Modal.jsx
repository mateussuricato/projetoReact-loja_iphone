import "./Modal.css";
import Overlay from "components/Overlay/Overlay";

function Modal({children, closeModal}) {
  const hendleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) {
      closeModal();
    }
  };
  return (
    <Overlay overlayClick={closeModal}>
      <div className="Modal" onClick={hendleClick}>
        <span className="Modal__close" onClick={(e) => hendleClick(e, true)}>+</span>
        <div className="Modal__body">{children}</div>
      </div>
    </Overlay>
  );
}

export default Modal;
