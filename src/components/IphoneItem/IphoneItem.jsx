import { ActionMode } from "constants/index.js";
import "./IphoneItem.css";

function IphoneItem({
  iphone,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="IphonesItem_badge"> {quantidadeSelecionada} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`tag ${mode === ActionMode.DELETAR && "tag--deletar"}`}
        >
          {" "}
          {mode}{" "}
        </span>
      );
  };

  return (
    <div
      className={`IphonesItem 
        ${mode !== ActionMode.NORMAL && "IphonesItem--disable"}
        ${mode === ActionMode.DELETAR && "IphonesItem--deletar"}
      `}
      onClick={() => clickItem(iphone.id)}
    >
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="IphoneItem_titulo">{iphone.titulo}</div>
        <div className="IphoneItem_preco">R$ {iphone.preco},00</div>
        <div className="IphoneItem_lancamento">Ano: {iphone.lancamento}</div>
        <div className="IphoneItem_camera">Câmera: {iphone.camera}</div>
        <div className="IphoneItem_acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Adicionar ${!quantidadeSelecionada && "Preencher"}`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <div className="img">
        <img className="IphoneItem_img" src={iphone.img} alt={iphone.titulo} />
      </div>
    </div>
  );
}

export default IphoneItem;
