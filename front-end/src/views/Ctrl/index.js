import CtrlNav from "../../components/CtrlNav";
import "./Ctrl.css";
import CardCtrl from "../../components/CardCtrl";

const Ctrl = () => {
    return (
        <>
            <CtrlNav />
            <section className="Cards-api">
                <CardCtrl />
            </section>
        </>
  );
};

export default Ctrl;
