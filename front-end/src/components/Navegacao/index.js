import { Link } from "react-router-dom";
import "./Navegacao.css";

const Navegacao = ({to, children}) => {
    return (
        <li className="nav-container">
            <Link className="nav-item" to={to}>{children}</Link>
        </li>
    )
};

export default Navegacao;