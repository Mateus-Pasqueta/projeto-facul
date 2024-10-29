import { Link } from "react-router-dom";
import "./CtrlNav.css";

const CtrlCardapio = () => {


    return(
        <>
        <aside className="barra__lateral">
                <nav>
                    <div>
                        <li className="funcoes">
                            <Link className="nav-item" to="/admin/control">cardápio</Link>
                        </li>
                        <li className="funcoes">
                            <Link className="nav-item" to="/admin/control/addPlate">adicionar prato</Link>
                        </li>
                        <li className="funcoes">
                            <Link className="nav-item" to="/admin/kitchen">Cozinha</Link>
                        </li>
                    </div>
                </nav>
        </aside>
        </>
    )
};

export default CtrlCardapio;