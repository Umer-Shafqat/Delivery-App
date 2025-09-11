import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import React, { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
          return null; // ✅ ensure map always returns something
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;


