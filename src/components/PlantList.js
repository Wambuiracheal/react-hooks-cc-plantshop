import React from "react";
import PlantCard from "./PlantCard";


function PlantList({plants}) {
  return (
    <ul className="cards">
      {plants.length > 0?plants.map(plant => (
        <li key={plant.id}>
          <PlantCard 
            name={plant.name}
            price={plant.price}
            image={plant.image}
          />
        </li>
      )):null}
    </ul>
  );
}

export default PlantList;
