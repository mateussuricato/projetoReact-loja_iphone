import "./DeleteModal.css";
import Modal from "components/Modal/Modal";
import { iphoneService } from "services/iphoneService";

function DeleteModal({
  closeModal,
  iphoneParaDeletar,
  onDeleteIphone,
  getIphones,
}) {
  const handleDelete = async (iphone) => {
    await iphoneService.deleteById(iphone.id);
    onDeleteIphone(iphone);
    getIphones();
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeleteModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{iphoneParaDeletar.titulo}</b>
        </p>

        <img
          className="DeleteModal__foto"
          src={iphoneParaDeletar.img}
          alt={iphoneParaDeletar.titulo}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(iphoneParaDeletar)}
            className="DeleteModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeleteModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
