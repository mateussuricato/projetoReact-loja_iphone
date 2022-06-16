import { useState, useEffect } from "react";
import { iphoneService } from "services/iphoneService.js";
import IphoneDetalhes from "components/IphoneDetalhes/IphoneDetalhes";
import IphoneItem from "components/IphoneItem/IphoneItem";
import "./Iphones.css";

export function Iphones({ iphoneCriado }) {
  const [iphones, setIphone] = useState([]);

  const [iphoneSelecionado, setIphoneSelecionado] = useState([]);

  const [iphoneModal, setIphoneModal] = useState(false);

  const addItem = (iphoneIndex) => {
    const iphone = {
      [iphoneIndex]: Number(iphoneSelecionado[iphoneIndex] || 0) + 1,
    };
    setIphoneSelecionado({ ...iphoneSelecionado, ...iphone });
  };

  const removerItem = (iphoneIndex) => {
    const iphone = {
      [iphoneIndex]: Number(iphoneSelecionado[iphoneIndex] || 0) - 1,
    };
    setIphoneSelecionado({ ...iphoneSelecionado, ...iphone });
  };

  const getLista = async () => {
    const response = await iphoneService.getLista();
    setIphone(response);
  };

  const adicionaPaletaNaLista = (paleta) => {
    const lista = [...iphones, paleta];
    setIphone(lista);
  };

  useEffect(() => {
    if (iphoneCriado) {
      adicionaPaletaNaLista(iphoneCriado);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iphoneCriado]);

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="Iphones">
      {iphones.map((iphone, index) => (
        <IphoneItem
          key={index}
          iphone={iphone}
          quantidadeSelecionada={iphoneSelecionado[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => addItem(index)}
          clickItem={() => setIphoneModal(iphone)}
        />
      ))}
      {iphoneModal && (
        <IphoneDetalhes
          iphone={iphoneModal}
          closeModal={() => setIphoneModal(false)}
        ></IphoneDetalhes>
      )}
    </div>
  );
}
