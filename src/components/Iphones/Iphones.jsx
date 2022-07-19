import { useState, useEffect, useCallback } from "react";
import { iphoneService } from "services/iphoneService.js";
import IphoneDetalhes from "components/IphoneDetalhes/IphoneDetalhes";
import IphoneItem from "components/IphoneItem/IphoneItem";
import "./Iphones.css";
import { ActionMode } from "constants/index.js";

export function Iphones({ iphones, mode, updateIphone, deleteIphone }) {
  const selecionadas = JSON.parse(localStorage.getItem("selecionadas")) ?? {};

  const [iphoneSelecionado, setIphoneSelecionado] = useState(selecionadas);

  const [iphoneModal, setIphoneModal] = useState(false);

  const addItem = (iphoneIndex) => {
    const iphone = {
      [iphoneIndex]: Number(iphoneSelecionado[iphoneIndex] || 0) + 1,
    };
    setIphoneSelecionado({ ...iphoneSelecionado, ...iphone });
  };

  const setSelecionadas = useCallback(() => {
    if(!iphones.length) return

    const entries = Object.entries(iphoneSelecionado);
    const sacola = entries.map(arr => ({
      iphoneId: iphones[arr[0]],
      quantidade: arr[1]
    }))

    localStorage.setItem('sacola', JSON.stringify(sacola))
    localStorage.setItem('selecionadas', JSON.stringify(iphoneSelecionado))
  }, [ iphoneSelecionado, iphones ])

  const removerItem = (iphoneIndex) => {
    const iphone = {
      [iphoneIndex]: Number(iphoneSelecionado[iphoneIndex] || 0) - 1,
    };
    setIphoneSelecionado({ ...iphoneSelecionado, ...iphone });
  };

  const getIphoneByid = async (iphoneId) => {
    const response = await iphoneService.getById(iphoneId);
    const mapper = {
      [ActionMode.NORMAL]: () => setIphoneModal(response),
      [ActionMode.ATUALIZAR]: () => updateIphone(response),
      [ActionMode.DELETAR]: () => deleteIphone(response),
    };

    mapper[mode]();
  };

  useEffect(() => {
    setSelecionadas();
  }, [ setSelecionadas, iphoneSelecionado ]);

  return (
    <div className="Iphones">
      {iphones.map((iphone, index) => (
        <IphoneItem
          mode={mode}
          key={index}
          iphone={iphone}
          quantidadeSelecionada={iphoneSelecionado[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => addItem(index)}
          clickItem={(iphoneId) => getIphoneByid(iphoneId)}
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
