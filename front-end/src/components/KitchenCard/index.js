import { getCards, getOrders, updateOrder } from "../../services/api";
import { useCallback, useContext, useEffect, useState } from "react";
import "./KitchenCard.css";
import AppContext from "../../context/AppContext";

const KitchenCard = () => {
  const [orders, setOrders] = useState();

  const { plateList, setPlateList } = useContext(AppContext);

  const fetchPlates = useCallback( async () => {
    const platesApi = await getCards();
    setPlateList(platesApi.data);  
  },[setPlateList]);

  useEffect(() => {
    if(!plateList && plateList.length === 0){
      fetchPlates();
    }
  }, [plateList, fetchPlates]);


  const fetchOrders = useCallback(async () => {
    const ordersApi = await getOrders();
    setOrders(ordersApi);
  }, [setOrders]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const namePlates = (id) => {
    return plateList?.find((item) => item.id === id)?.nome;
  };

  const handleFinish = (id) => {
    const data = {
      id,
      status: "finalizado"
    }
    updateOrder(data).then(response => {
      window.location.reload();
    }
    );
  }

  return (
    <>
      <ul>
        {orders?.map((order) => (
          <>
            <h3>Mesa {order?.mesa}</h3>
            <p>Pedidos  : </p>
            <ul>
              {order?.pratos.map((prato) => (
                <li>
                  <p>
                    {namePlates(prato?.plate_id)}<br/>quantidade: {prato?.quantidade}
                  </p>
                </li>
              ))}
            </ul>
            <button onClick={() => handleFinish(order?.numero_do_pedido)}>Finalizar</button>
          </>
        ))}
      </ul>
    </>
  );
};

export default KitchenCard;
