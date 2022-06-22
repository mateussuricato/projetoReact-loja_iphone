import "./SacolaModal.css";
import Modal from "components/Modal/Modal";
import { iphoneService } from "services/iphoneService";
import { useEffect, useState } from "react";
import { sacolaService } from "services/sacolaService";
function SacolaModal({ closeModal }) {
  const [lista, setLista] = useState([]);

  const purchase = async() => {
     await sacolaService.purchase();
     closeModal()
  };

  const handleClose = async () => {
    await sacolaService.purchase();
    closeModal();
  };

  const getListas = async () => {
    const iphoneLista = await iphoneService.getLista();
    const sacolaLista = await sacolaService.getLista();

    const encontraNome = (id) => {
      const obj = iphoneLista.find((i) => i.id === id);
      console.log(obj)
      return (obj && obj.titulo) ?? "t";
    };

    if (Array.isArray(sacolaLista)) {
      const novaLista = sacolaLista.map(({ iphoneId, quantidade }) => ({
        nome: encontraNome(iphoneId),
        quantidade,
      }));

      setLista(novaLista);
    }
  };

  useEffect(() => {
    getListas();
  }, []);

  return (
    <Modal closeModal={handleClose}>
      <div className="SacolaModal">
        <h2>Iphones e Quantidades</h2>

        <div>
          {lista.map((i, idx) => (
            <div key={idx}>
              {" "}
              {i.nome + " " + i.quantidade + "x"} <br />
            </div>
          ))}
        </div>

        <br />

        <div>
          <button onClick={purchase} className="SacolaModal__confirmar">
            Fechar compra
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SacolaModal;