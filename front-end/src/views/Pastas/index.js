import CardapioTela from "../../components/CardapioTela";
import pratos from "../../json/pastas.json";
import "./Pastas.css";

const Pastas = () => {
    return (
        <CardapioTela pratos={pratos}/>
    )
};

export default Pastas;