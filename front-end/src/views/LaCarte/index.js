import "./LaCarte.css";
import pratos from "../../json/lacarte.json";
import CardapioTela from "../../components/CardapioTela";

const LaCarte = () => {
    return (
        <CardapioTela pratos={pratos} />
    )
};

export default LaCarte;