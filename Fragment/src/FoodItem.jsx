import React from 'react'

const FoodItem = ({item}) => {
  return (
    <div>
      {item.map((product)=>(
        <div key={product}>
            <li>{product}</li>
          </div>
      ))}
    </div>
  )
}

export default FoodItem
