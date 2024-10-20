import "./Inicio.css"
import logo from "../../img/Dev_res.png";
import { Link } from "react-router-dom";

const Inicio = () => {
    return ( 
        <main>
            <div className="img-container">
                <img src={logo} alt="logo dev-res"/>
            </div>
            <div className="link-container"> 
                <Link className="link" to="/menu">Iniciar atendimento</Link>
            </div>
        </main>
    )
};

export default Inicio;