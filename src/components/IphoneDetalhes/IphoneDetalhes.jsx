import Modal from "components/Modal/Modal";
import "./IphoneDetalhes.css";

function IphoneDetalhes({iphone, closeModal}) {
  return(
    <Modal closeModal={closeModal} className="teste">
        <div className="DetalheModal">
            <div className="titulo">{iphone.titulo}</div>
            <div className="lacamento">Lançamento: {iphone.lancamento}</div>
            <div className="polegadas">Polegas: {iphone.polegadas}</div>
            <div className="resolucao">Resolução: {iphone.resolucao}</div>
            <div className="camera">Câmera: {iphone.camera}</div>
            <div className="selfcamera">Câmera frontal: {iphone.selfcamera}</div>
            <div className="video">Video: {iphone.video}</div>
            <div className="cpu">Cpu: {iphone.cpu}</div>
            <div className="gpu">Gpu: {iphone.gpu}</div>
            <div className="ram">Ram: {iphone.ram}</div>
            <div className="os">Os: {iphone.os}</div>
            <div className="preco">R$: {Number(iphone.preco).toFixed(2)}</div>
        </div>
        <img src={iphone.img} alt={iphone.titulo} className="ImagemModal" />

    </Modal>
  );
}

export default IphoneDetalhes
