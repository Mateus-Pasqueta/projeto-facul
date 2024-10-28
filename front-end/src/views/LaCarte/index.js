import "./LaCarte.css";
import CardapioTela from "../../components/CardapioTela";
import { getCards } from "../../services/api";
import { useCallback, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";

const LaCarte = () => {
    const { plateList, setPlateList } = useContext(AppContext);

    const fetchPlates = useCallback( async () => {
        const platesApi = await getCards();
        setPlateList(platesApi.data);  
      },[setPlateList]);
    
      useEffect(() => {
        fetchPlates();
      }, [fetchPlates]);
    

    return (
        <CardapioTela pratos={plateList} />
    )
};

export default LaCarte;