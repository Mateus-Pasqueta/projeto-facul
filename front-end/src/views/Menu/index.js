import { Link } from "react-router-dom";
import "./Menu.css";
import laCarte from "../../img/LaCarte.png";
import rodizio from "../../img/Rodizio.png";

const Menu = () => {
    return (
        <main>
            <section className="menu-items">
                <div>
                    <Link>
                        <img className="menu-img" src={rodizio} alt="rodizio"/>
                    </Link>
                </div>
                <div>
                    <Link to="/lacarte">
                        <img className="menu-img" src={laCarte} alt="à la carte"/>
                    </Link>
                </div>
            </section>
              
        </main>
        
    )
};

export default Menu;