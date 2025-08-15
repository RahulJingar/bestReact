import React from 'react'
import FoodItem from './FoodItem';

const App = () => {

  let foodItems = ['Dal','Green','Vegetable','Roti','Salad','Milk'];

  return (
    <div>
      <h1>Healthy Food</h1>
      <ul>
        <FoodItem item={foodItems}/>
      </ul>
    </div>
  )
}

export default App
