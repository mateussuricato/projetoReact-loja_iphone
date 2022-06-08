import { useState } from "react";
import { iphones } from "../../mocks/iphones"
import './Iphones.css'

export function Iphones() {
    const [iphoneSelecionado, setIphoneSelecionado] = useState({})

    const addItem = (iphoneIndex) => {
        const iphone = {[iphoneIndex]: Number(iphoneSelecionado[iphoneIndex] || 0) + 1}
        setIphoneSelecionado({...iphoneSelecionado, ...iphone})
    }

    const removerItem = (iphoneIndex) => {
        const iphone = {[iphoneIndex]: Number(iphoneSelecionado[iphoneIndex] || 0) - 1}
        setIphoneSelecionado({...iphoneSelecionado, ...iphone})
    }

    const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="IphonesItem_badge"> {iphoneSelecionado[index]} </span>);

    const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Remover" onClick={() => removerItem(index)}>remover</button>);

    return <div className="Iphones">
        {iphones.map((iphone, index) => (
        <div className='IphonesItem' key={index}>
           {badgeCounter(iphoneSelecionado[index], index)}
                <div>
                        <div className='IphoneItem_titulo'>{iphone.titulo}</div>
                        <div className='IphoneItem_preco'>R$ {iphone.preco},00</div>
                        <div className='IphoneItem_lancamento'>Ano: {iphone.lancamento}</div>
                        <div className='IphoneItem_camera'>Câmera: {iphone.camera}</div>
                        <div className='IphoneItem_acoes Acoes'>
                            <button className={`Adicionar ${!iphoneSelecionado[index] && "Preencher"}`} onClick={() => addItem(index)}>adicionar</button> 
                            {removeButton(iphoneSelecionado[index], index)}
                        </div>                     
                </div>
            <div className='img'><img className='IphoneItem_img' src={iphone.img} alt="iphone" /></div>
        </div>
        ))}
    </div>;
  }