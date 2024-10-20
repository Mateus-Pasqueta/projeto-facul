import CardapioTela from "../../components/CardapioTela";
import pratos from "../../json/lanches.json";
import "./Lanches.css";

const Lanches = () => {
    return (
        <CardapioTela pratos={pratos}/>
    )
};

export default Lanches;