import "./CardapioTela.css";
import Navegacao from "../Navegacao";
import Card from "../Cards";

const CardapioTela = ({pratos}) => {

    return (
        <main className="main__container">
            <nav className="nav-bar">
                <ul>
                    <Navegacao key='1' to="/lacarte">La carte</Navegacao>
                    <Navegacao key='2' to="/lanches">Lanches</Navegacao>
                    <Navegacao key='3' to="/pasta">Pasta</Navegacao>
                    <Navegacao key='4' to="/bebidas">Bebidas</Navegacao>
                    <Navegacao key='5' to="/sobremesas">Sobremesas</Navegacao>
                </ul>
            </nav>
            <section className="menu">
                {pratos.map((prato) => <Card id={prato.id} preco={prato.preco} img={prato.imagem}>{prato.nome}</Card>)}
            </section>
        </main >
    )

}


export default CardapioTela;