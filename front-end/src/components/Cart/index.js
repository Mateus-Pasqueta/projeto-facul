import { useContext, useEffect, useState } from "react";
import CartItem from "../CartItem";
import "./Cart.css"
import AppContext from "../../context/AppContext";

const Cart = () => {
    const { cartItems, cartVisible } = useContext(AppContext);

    const [totalPrice, setTotalPrice] = useState(0);  

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.preco * item.quantidade;
        }, 0);
        setTotalPrice(total);
    }, [cartItems]);

    return (
        <section className={`cart ${cartVisible ? "cart__active" : ""}`}>
            <div className="cart-items">
                {cartItems.map((item) => <CartItem id={item.id} img={item.img} titulo={item.nome} preco={item.preco} quantidade={item.quantidade}/>)}
            </div>
            {console.log(totalPrice)}
            <div className="cart-resume">R${Number(totalPrice).toFixed(2)}</div>
        </section>
    )
};

export default Cart;