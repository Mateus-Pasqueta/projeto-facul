import "./CardCtrl.css";
import { deletePlate, getCards } from "../../services/api";
import { useCallback, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const CardCtrl = () => {
  const { plateList, setPlateList } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchPlates = useCallback( async () => {
    const platesApi = await getCards();
    setPlateList(platesApi.data);  
  },[setPlateList]);

  useEffect(() => {
    fetchPlates();
  }, [fetchPlates]);

  const removePlate = (id) => {
      deletePlate(id).then(response => console.log(response))
      window.location.reload();
    return
  };

  return (
    <>
      {plateList.map((plate) => {
        return (
          <div key={plate.id} className="ctrl__card">
            <div className="ctrl__card-img">
              <img src={plate.img} alt={plate.nome} />
            </div>
            <div className="ctrl__card-titulo">
              <h3>{plate.nome}</h3>
              <h3>R$ {Number(plate.preco).toFixed(2)}</h3>
              <div className="button__box">
                <button className="btn__ctrl" onClick={() => navigate(`/admin/control/addPlate/${plate.id}`)}>
                  Editar
                </button>
                <button className="btn__ctrl" onClick={() => { removePlate(plate.id) }}>
                  Remover
                </button>
              </div>
              
            </div>
          </div>
        );
      })}

    </>
  );
};

export default CardCtrl;
