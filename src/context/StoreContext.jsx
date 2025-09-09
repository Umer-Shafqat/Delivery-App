import { createContext, useEffect } from "react"
import { useState } from "react"
import { food_list } from "../assets/assets"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
const [cartitems, setCartitems] = useState({});

const addToCart = (itemid) => {
  if(!cartitems[itemid]){
    setCartitems(prev => ({...prev, [itemid]: 1}))
  }else{
    setCartitems(prev => ({...prev, [itemid]: prev[itemid] + 1}))
  }
}

const removeFromCart = (itemid) => {
    setCartitems(prev => ({...prev, [itemid]: prev[itemid] - 1}))
  }


useEffect(() => {
  console.log(cartitems);
}, [cartitems]);

    const contextValue = {
      food_list,
      cartitems,
      addToCart,
      removeFromCart
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;