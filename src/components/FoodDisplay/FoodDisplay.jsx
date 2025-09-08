import React from 'react'
import './FoodDisplay.css'

const FoodDisplay = () => {

  const {food_list} = React.useContext(StoreContext);
  return (
    <div>
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

