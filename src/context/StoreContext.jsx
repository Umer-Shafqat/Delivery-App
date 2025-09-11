import { createContext } from "react"
import { useState } from "react"
import { food_list } from "../assets/assets"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
const [cartitems, setCartitems] = useState({});

const addToCart = (itemId) => {
  if(!cartitems[itemId]){
    setCartitems(prev => ({...prev, [itemId]: 1}))
  }else{
    setCartitems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
  }
}

const removeFromCart = (itemId) => {
    setCartitems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
  }

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartitems){
      if(cartitems[item] > 0){
      let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += cartitems[item] * itemInfo.price;
      }
    }
    return totalAmount;
}

    const contextValue = {
      food_list,
      cartitems,
      addToCart,
      removeFromCart,
      getTotalCartAmount
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;