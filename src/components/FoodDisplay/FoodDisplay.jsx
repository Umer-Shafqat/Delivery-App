import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/Storecontext'
const FoodDisplay = ({ category }) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'> 
      {food_list.map(food => (
        <div key={food._id} className="food-item">
          <img src={food.image} alt={food.name} />
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <span>${food.price}</span>
        </div>
      ))}
    </div>
  )
}

export default FoodDisplay

