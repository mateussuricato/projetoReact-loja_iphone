import './Header.css'

 function Header () {
    return <header>
        <div>
            <h1>Lojinha</h1>
        </div>
        <img src={require("../../assets/images/sacola.png")} alt="" />
    </header>
}

export default Header;