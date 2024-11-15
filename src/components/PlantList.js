import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,setPlants}) {

  return (
    <ul className="cards">
    {plants.length > 0 ? plants.map((planttain) => (
      <PlantCard
        key={planttain.id}
        name={planttain.name}
        price={planttain.price}
        image={planttain.image}
        id={planttain.id}
        plants={plants}
        setPlants={setPlants}
      />
    )) : null}
  </ul>
  );
}

export default PlantList;
