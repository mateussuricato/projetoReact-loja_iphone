import { useState } from "react";
import { iphones } from "../../mocks/iphones"
import './Iphones.css'

export function Iphones() {
    const [iphoneSelecionado, setIphoneSelecionado] = useState({})

    const addItem = (iphoneIndex) => {
        const iphone = {[iphoneIndex]: Number(iphoneSelecionado[iphoneIndex] || 0) + 1}
        setIphoneSelecionado({...iphoneSelecionado, ...iphone})
    }
    return <div className="Iphones">
        {iphones.map((iphone, index) => (
        <div className='IphonesItem' key={index}>
            <span className="IphonesItem_badge"><span>{iphoneSelecionado[index] || 0}</span></span>
                <div>
                        <div className='IphoneItem_titulo'>{iphone.titulo}</div>
                        <div className='IphoneItem_preco'>R$ {iphone.preco},00</div>
                        <div className='IphoneItem_lancamento'>Ano: {iphone.lancamento}</div>
                        <div className='IphoneItem_camera'>Câmera: {iphone.camera}</div>
                        <div className='IphoneItem_acoes Acoes'>
                            <button className='Adicionar Preencher' onClick={() => addItem(index)}>adicionar</button> 
                        </div>                     
                </div>
            <div className='img'><img className='IphoneItem_img' src={iphone.img} alt="iphone" /></div>
        </div>
        ))}
    </div>;
  }