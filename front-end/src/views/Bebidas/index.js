import "./Bebidas.css";
import pratos from "../../json/bebidas.json";
import CardapioTela from "../../components/CardapioTela";

const LaCarte = () => {
    return (
        <CardapioTela pratos={pratos} />
    )
};

export default LaCarte;