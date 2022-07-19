import { useEffect, useState, useCallback } from "react";
import AdicionaIphoneModal from "components/AdicionaIphoneModal/AdicionaIphoneModal";
import { Iphones } from "../Iphones/Iphones";
import "./Home.css";
import Header from "components/Header/Header";
import { iphoneService } from "services/iphoneService";
import { ActionMode } from "constants/index.js";
import DeleteModal from "components/DeleteModal/DeleteModal";
import SacolaModal from "components/SacolaModal/SacolaModal";
import { sacolaService } from "services/sacolaService";

function Home() {
  const [iphones, setIphone] = useState([]);
  const [canShow, setCanShow] = useState(false);
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [iphoneAdd, setIphoneAdd] = useState();
  const [iphoneParaEditar, setIphoneParaEditar] = useState();
  const [iphoneParaDeletar, setIphoneParaDeletar] = useState();
  const [iphoneRemovido, setIphoneRemovido] = useState();
  const [canOpenBag, setCanOpenBag] = useState();

  const handleDeleteIphone = (iphoneToDelete) => {
    setIphoneParaDeletar(iphoneToDelete);
  };

  const handleUpdateIphone = (paletaToUpdate) => {
    setIphoneParaEditar(paletaToUpdate);
    setCanShow(true);
  };

  const abrirSacola = async () => {
    const lista = JSON.parse(localStorage.getItem("sacola"));
    const sacola = lista.filter((i) => i.quantidade > 0);

    await sacolaService.create(sacola);

    setCanOpenBag(true);
  };

  const handleCloseModal = () => {
    setCanShow(false);
    setIphoneAdd();
    setIphoneParaDeletar();
    setIphoneParaEditar();
  };

  const getLista = async () => {
    const response = await iphoneService.getLista();
    setIphone(response);
  };

  const adicionaIphoneNaLista = useCallback(
    (iphone) => {
      const lista = [...iphones, iphone];
      setIphone(lista);
    },
    [iphones]
  );

  useEffect(() => {
    if (iphoneAdd && !iphones.map(({ id }) => id).includes(iphoneAdd.id)) {
      adicionaIphoneNaLista(iphoneAdd);
    }
  }, [adicionaIphoneNaLista, iphoneAdd, iphones]);

  useEffect(() => {
    getLista();
  }, [iphoneRemovido]);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  return (
    <div className="Home">
      <Header
        deleteIphone={() => handleActions(ActionMode.DELETAR)}
        mode={modoAtual}
        createIphone={() => setCanShow(true)}
        updateIphone={() => handleActions(ActionMode.ATUALIZAR)}
        openBag={abrirSacola}
      />
      <div className="Home_container">
        <Iphones
          iphoneRemovido={iphoneRemovido}
          iphoneCriado={iphoneAdd}
          mode={modoAtual}
          iphones={iphones}
          deleteIphone={handleDeleteIphone}
          updateIphone={handleUpdateIphone}
        />
        {canShow && (
          <AdicionaIphoneModal
            mode={modoAtual}
            iphoneToUpdate={iphoneParaEditar}
            getIphones={getLista}
            closeModal={handleCloseModal}
          />
        )}
        {iphoneParaDeletar && (
          <DeleteModal
            iphoneParaDeletar={iphoneParaDeletar}
            closeModal={handleCloseModal}
            onDeleteIphone={(iphone) => setIphoneRemovido(iphone)}
            getIphones={getLista}
          />
        )}
        {canOpenBag && <SacolaModal closeModal={() => setCanOpenBag(false)} />}
      </div>
    </div>
  );
}

export default Home;
