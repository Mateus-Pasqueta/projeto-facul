import { useContext } from "react";
import "./Cards.css";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

const Card = ( props ) => {

    const { id, img, textoAlt, children, preco} = props

    const { cartItems, setCartItems } = useContext(AppContext);
    
    const handleAddCart = () => {
        setCartItems([...cartItems, props]);
    }

    return(
        <div key={id} className="card">
            <div className="card-img">
                <img src={img} alt={textoAlt}/> 
            </div>
            <div className="card-titulo">
                <h3>{children}</h3>
                <p>{formatCurrency(preco)}</p>
                <button 
                className="btn"
                onClick={ handleAddCart }
                >Pedir</button>
            </div>
        </div>
    )
};

export default Card;