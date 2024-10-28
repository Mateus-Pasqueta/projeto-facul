import "./Header.css";
import logo from "../../img/Dev_res.png"
import { useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Header = () => {
    const local = useLocation();

    const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);

    return (
        <header className="cabecalho">
            <div className={`${local.pathname === "/" ? "img-cabecalho" : "img-cabecalho-on"}`}>
                <img src={logo} alt="logo dev-res" />
            </div>
            <div>
                <h1 className="titulo">{`${local.pathname === "/" ? "Bem-vindo" : ""}`}</h1>
            </div>
            <div>
                <button onClick={() => setCartVisible(!cartVisible)} className={`cart__button ${local.pathname === "/admin/*" ? "" : "cart__on"}`}>
                    <CiShoppingCart />
                    {cartItems.length > 0 && <span className="cart__status">{cartItems.length}</span>}
                </button>
            </div>
        </header>
    )
}

export default Header;