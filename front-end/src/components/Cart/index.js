import { useContext, useEffect, useState } from "react";
import CartItem from "../CartItem";
import "./Cart.css"
import AppContext from "../../context/AppContext";
import { Button } from "react-bootstrap";
import { addOrder } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, cartVisible, setCartItems } = useContext(AppContext);
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(0);  

    const handleOrder = () => {
        if(!cartItems && cartItems.length === 0) {
            alert("O carrinho não pode estar vazio");
            return
        }
        const plates_id = []
        cartItems.forEach((item) => {
            const plate = {
                id: item.id,
                qtd : item.quantidade
            }
            plates_id.push(plate);
        })

        const order = {
            mesa: 1,
            plates_id,
        }
        addOrder(order)
        .then(response => {
            alert(response.message);
            setCartItems([]);
            navigate('/');
        });
    }

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
            <div className="cart-resume">R${Number(totalPrice).toFixed(2)}</div>
            <Button variant="secondary" onClick={handleOrder}>
              Pedir
            </Button>
        </section>
    )
};

export default Cart;