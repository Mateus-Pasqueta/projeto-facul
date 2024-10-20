import { useContext } from "react";
import CartItem from "../CartItem";
import "./Cart.css"
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {
    const { cartItems, cartVisible } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.preco + acc
    }, 0);  

    return (
        <section className={`cart ${cartVisible ? "cart__active" : ""}`}>
            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} img={item.img} titulo={item.children} preco={item.preco} />)}
            </div>
            <div className="cart-resume">{formatCurrency(totalPrice)}</div>
        </section>
    )
};

export default Cart;