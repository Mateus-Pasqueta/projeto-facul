import "./Kitchen.css";
import KitchenCard from "../../components/KitchenCard";
import CtrlNav from "../../components/CtrlNav";

const Kitchen = () => {
    return (
        <section className="pedidos">
            <CtrlNav />
            <div className="pedidos__cards">
                <KitchenCard />
            </div>
        </section>
    )
};

export default Kitchen;