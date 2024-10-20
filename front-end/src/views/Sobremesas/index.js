import CardapioTela from "../../components/CardapioTela";
import pratos from "../../json/sobremesas.json";
import "./Sobremesas.css";

const Sobremesas = () => {
    return (
        <CardapioTela pratos={pratos}/>
    )
};

export default Sobremesas;