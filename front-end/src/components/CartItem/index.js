import "./Cart-item.css"
import { MdDelete } from "react-icons/md";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const CartItem = (props) => {
    const { cartItems, setCartItems } = useContext(AppContext);

    const {id, titulo, preco, img, quantidade} = props;
    
    const handleRemove = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id)
        setCartItems(updatedItems);
    };

    const addQuantity = () => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
            )
        );
    };

    const removeQuantity = () => {  
        if (quantidade > 1) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
                )
            );
        }
    };

    return (
        <div key={id} className="cart__item">
            <img src={img} alt="imagem do item" className="cart__item__img"/>
            <div className="cart__item__content">
                <h3 className="cart__item__title">{titulo}</h3>
                <h3 className="cart__item__price">R${Number(preco).toFixed(2)};</h3>
                <div className="quatity__box">
                    <button className="quantity__button" onClick={removeQuantity}>-</button>
                    <span>{quantidade}</span>
                    <button className="quantity__button" onClick={addQuantity}>+</button>
                </div>
                <button onClick={() => handleRemove(id)} type="button" className="button__delete"><MdDelete /></button>
            </div>
        </div>
    )
}

export default CartItem