import React from "react";
import {useState} from "react"
function PlantCard({image,name,price}) {
  const [inStock, setInstock] = useState(true)
  function handleStock(){
    setInstock((prevCount) => (!prevCount))
  }
  return (
    <li className="card" data-testid="plant-item">

      <img src={image} alt={name}/>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
    
      {true ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
