import { useContext } from "react";
import "./Cards.css";
import AppContext from "../../context/AppContext";

const Card = ( props ) => {

    const { cartItems, setCartItems } = useContext(AppContext);
    
    const handleAddCart = () => {

        const itemExists = cartItems.some((item) => item.id === props.id);

        if (!itemExists) {
            setCartItems([
                ...cartItems,{
                    id: props.id,
                    img: props.img,
                    textoAlt: props.textoAlt,
                    preco: props.preco,
                    name: props.children,
                    quantidade: 1, 
                },
            ]);
        } else {
            alert("Item já está no carrinho!");
        }
    }
    

    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt={props.textoAlt}/> 
            </div>
            <div className="card-titulo">
                <h3>{props.children}</h3>
                <p>R${Number(props.preco).toFixed(2)}</p>
                <button 
                className="btn"
                onClick={handleAddCart}
                >Pedir</button>
            </div>
        </div>
    )
};

export default Card;