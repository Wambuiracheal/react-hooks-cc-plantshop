import React,{useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,setPlants}) {

  return (
    <ul className="cards">
      {plants.length > 0?plants.map(plant => (
        <li key={plant.id}>
          <PlantCard 
            name={plant.name}
            price={plant.price}
            image={plant.image}
            id={plant.id}
            plants={plants}
            setPlants={setPlants}
          />
        </li>
      )):null}
    </ul>
  );
}

export default PlantList;
