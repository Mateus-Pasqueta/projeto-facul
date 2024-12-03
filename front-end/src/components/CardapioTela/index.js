import "./CardapioTela.css";
import Navegacao from "../Navegacao";
import Card from "../Cards";

const CardapioTela = ({ pratos }) => {

    return (
        <main className="main__container">
            <nav className="nav-bar">
                <ul>
                    <Navegacao key='1' to="/lacarte">La carte</Navegacao>
                </ul>
            </nav>
            <section className="menu">
                {pratos.map((prato) => <Card id={prato.id} preco={prato.preco} img={prato.img}>{prato.nome}</Card>)}
            </section>
        </main >
    )

}


export default CardapioTela;