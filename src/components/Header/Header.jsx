import "./Header.css";
import criar from "../../assets/images/criar.png";

function Header({createIphone}) {
  return (
    <header>
      <div>
        <h1>Lojinha</h1>
      </div>
      <div>
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
        />
      </div>
    </header>
  );
}

export default Header;
