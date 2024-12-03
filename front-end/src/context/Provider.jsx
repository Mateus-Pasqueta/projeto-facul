import { useState } from "react";
import AppContext from "./AppContext";

const Provider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [plateList, setPlateList ] = useState([]);
  
  const value = {
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible,
    plateList,   
    setPlateList,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;