import "./Header.css";
import { ActionMode } from "constants/index.js";
import criar from "../../assets/images/criar.png";
import editar from "../../assets/images/editar.png";
import apagar from "../../assets/images/apagar.png"

function Header({ createIphone, updateIphone, mode, deleteIphone, openBag }) {
  return (
    <header>
      <div>
        <h1>Lojinha</h1>
      </div>
      <div>
      <button
          className={`Opcoes__iphone Iphone ${
            mode === ActionMode.DELETAR && "Iphone--deletar"
          }`}
          type="button"
          onClick={() => deleteIphone()}
        >
          <img className="sacola" src={apagar} alt="" />
        </button>
        <button
          className={`Opcoes__iphone Iphone ${
            mode === ActionMode.ATUALIZAR && "Iphone--ativa"
          }`}
          type="button"
          onClick={() => updateIphone()}
        >
          <img className="sacola" src={editar} alt="" />
        </button>
        <button
          type="button"
          className="Opcoes__iphone Iphone"
          onClick={() => createIphone()}
        >
          <img className="sacola" src={criar} alt="" />
        </button>
        <img
          className="sacola"
          src="https://frontend-elgeladon.onrender.com/assets/images/icons/sacola.svg"
          alt=""
          onClick={openBag}
        />
      </div>
    </header>
  );
}

export default Header;
