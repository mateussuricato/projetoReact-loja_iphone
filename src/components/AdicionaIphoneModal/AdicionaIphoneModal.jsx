import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaIphoneModal.css";
import { iphoneService } from "services/iphoneService";
import { toast } from "react-hot-toast";
import { ActionMode } from "constants/index.js";

function AdicionaIphoneModal({
  closeModal,
  getIphones,
  iphoneToUpdate,
  mode,
  onIphoneUpdate,
  onCreateIphone,
}) {
  const form = {
    titulo: iphoneToUpdate?.titulo ?? "",
    lancamento: iphoneToUpdate?.lancamento ?? "",
    polegadas: iphoneToUpdate?.polegadas ?? "",
    resolucao: iphoneToUpdate?.resolucao ?? "",
    camera: iphoneToUpdate?.camera ?? "",
    selfcamera: iphoneToUpdate?.selfcamera ?? "",
    video: iphoneToUpdate?.video ?? "",
    cpu: iphoneToUpdate?.cpu ?? "",
    gpu: iphoneToUpdate?.gpu ?? "",
    ram: iphoneToUpdate?.ram ?? "",
    os: iphoneToUpdate?.os ?? "",
    preco: iphoneToUpdate?.preco ?? "",
    img: iphoneToUpdate?.img ?? "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.titulo.length &&
        String(state.lancamento).length &&
        state.polegadas.length &&
        state.resolucao.length &&
        state.camera.length &&
        state.selfcamera.length &&
        state.video.length &&
        state.cpu.length &&
        state.gpu.length &&
        state.ram.length &&
        state.os.length &&
        String(state.preco).length &&
        state.img.length
    );
    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });

  async function createIphone() {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split(/\\|\//).pop();

    const {
      titulo,
      lancamento,
      polegadas,
      resolucao,
      camera,
      selfcamera,
      video,
      cpu,
      gpu,
      ram,
      os,
      preco,
      img,
    } = state;

    const iphone = {
      ...(iphoneToUpdate && { _id: iphoneToUpdate?.id }),
      titulo,
      lancamento,
      polegadas,
      resolucao,
      camera,
      selfcamera,
      video,
      cpu,
      gpu,
      ram,
      os,
      preco,
      img: `../assets/images/${renomeiaCaminhoFoto(img)}`,
    };

    closeModal();

    const doisSec = new Promise((resolve) => {
      setTimeout(resolve, 500);
    });

    toast.promise(doisSec, {
      loading: "Adicionando...",
      success: <b>Iphone adicionado</b>,
    });

    const serviceCall = {
      [ActionMode.NORMAL]: () => iphoneService.create(iphone),
      [ActionMode.ATUALIZAR]: () =>
        iphoneService.updateById(iphoneToUpdate?.id, iphone),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateIphone(response),
      [ActionMode.ATUALIZAR]: () => onIphoneUpdate(response),
    };

    actionResponse[mode]();

    const reset = {
      titulo: "",
      lancamento: "",
      polegadas: "",
      resolucao: "",
      camera: "",
      selfcamera: "",
      video: "",
      cpu: "",
      gpu: "",
      ram: "",
      os: "",
      preco: "",
      img: "",
    };

    setState(reset);

    // await iphoneService.create(iphone);
  }

  getIphones();

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaIphoneModal">
        <form autoComplete="off" action="">
          <h2> {ActionMode.ATUALIZAR === mode ? "Atualizar" : "Adicionar"} </h2>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input
              type="text"
              id="titulo"
              placeholder="Iphone XR"
              value={state.titulo}
              onChange={(e) => handleChange(e, "titulo")}
              required
            />
          </div>
          <div>
            <label htmlFor="lancamento">Ano de lançamento: </label>
            <input
              type="number"
              id="lancamento"
              placeholder="2000"
              value={state.lancamento}
              onChange={(e) => handleChange(e, "lancamento")}
              required
            />
          </div>
          <div>
            <label htmlFor="polegadas">Polegadas: </label>
            <input
              type="text"
              id="polegadas"
              placeholder="3.5"
              value={state.polegadas}
              onChange={(e) => handleChange(e, "polegadas")}
              required
            />
          </div>
          <div>
            <label htmlFor="resolucao">Resolução: </label>
            <input
              type="text"
              id="resolucao"
              placeholder="320 x 420 pixels"
              value={state.resolucao}
              onChange={(e) => handleChange(e, "resolucao")}
              required
            />
          </div>
          <div>
            <label htmlFor="camera">Câmera: </label>
            <input
              type="text"
              id="camera"
              placeholder="2 MP"
              value={state.camera}
              onChange={(e) => handleChange(e, "camera")}
              required
            />
          </div>
          <div>
            <label htmlFor="selfcamera">Câmera Frontal: </label>
            <input
              type="text"
              id="selfcamera"
              placeholder="2 MP"
              value={state.selfcamera}
              onChange={(e) => handleChange(e, "selfcamera")}
              required
            />
          </div>
          <div>
            <label htmlFor="video">Video: </label>
            <input
              type="text"
              id="video"
              placeholder="480p@30fps"
              value={state.video}
              onChange={(e) => handleChange(e, "video")}
              required
            />
          </div>
          <div>
            <label htmlFor="cpu">Cpu: </label>
            <input
              type="text"
              id="cpu"
              placeholder="600 MHz Cortex-A8"
              value={state.cpu}
              onChange={(e) => handleChange(e, "cpu")}
              required
            />
          </div>
          <div>
            <label htmlFor="gpu">Gpu: </label>
            <input
              type="text"
              id="gpu"
              placeholder="PowerVR SGX535"
              value={state.gpu}
              onChange={(e) => handleChange(e, "gpu")}
              required
            />
          </div>
          <div>
            <label htmlFor="ram">Ram: </label>
            <input
              type="text"
              id="ram"
              placeholder="256 mb"
              value={state.ram}
              onChange={(e) => handleChange(e, "ram")}
              required
            />
          </div>
          <div>
            <label htmlFor="os">Os: </label>
            <input
              type="text"
              id="os"
              placeholder="iOS 3, upgradable to iOS 6.1.6"
              value={state.os}
              onChange={(e) => handleChange(e, "os")}
              required
            />
          </div>
          <div>
            <label htmlFor="preco">Preço: </label>
            <input
              type="number"
              id="preco"
              placeholder="R$1000"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label htmlFor="img" className="img-label">
              {!state.img.length ? "Selecionar Imagem" : state.img}
            </label>
            <input
              className="Modal__img"
              type="file"
              id="img"
              accept="image/png"
              onChange={(e) => handleChange(e, "img")}
              required
            />
          </div>
          <button
            type="button"
            disabled={canDisable}
            className="enviar"
            onClick={createIphone}
          >
            {ActionMode.NORMAL === mode ? "Enviar" : "Atualizar"}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaIphoneModal;
