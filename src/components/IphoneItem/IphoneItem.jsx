import "./IphoneItem.css";

function IphoneItem({iphone, quantidadeSelecionada, index, onRemove, onAdd, clickItem}) {
  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="IphonesItem_badge"> {quantidadeSelecionada} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="Remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  return (
    <div className="IphonesItem" onClick={() => clickItem(iphone.id) }>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="IphoneItem_titulo">{iphone.titulo}</div>
        <div className="IphoneItem_preco">R$ {iphone.preco},00</div>
        <div className="IphoneItem_lancamento">Ano: {iphone.lancamento}</div>
        <div className="IphoneItem_camera">Câmera: {iphone.camera}</div>
        <div className="IphoneItem_acoes Acoes">
          <button
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
