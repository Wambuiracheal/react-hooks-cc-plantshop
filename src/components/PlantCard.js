import React from "react";
import {useState} from "react"

function PlantCard({id,name,image,price,plants,setPlants}) {
  //handling instock button toggle
  const [inStock, setInStock] = useState(true)

  function handleToggleStock() {
    setInStock((prevStock) => !prevStock)
  }

  const [newPlantData,setNewPlantData] = useState({
    name:"",
    image:"",
    price:0,
    id:0
})

  //DELETE
  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
        let remainingPlants = plants.filter(plant => plant.id !== id)
        setPlants(remainingPlants)
      })
      .catch(err => console.log(err))
  }

  //UPDATE
  function handleUpdate(e){
    let name = e.target.name
    let value = e.target.value

    setNewPlantData({
      ...newPlantData,
      [name]:value
    })

  }

  //UPDATING
  function handleSubmit(e){
    e.preventDefault (e)
    fetch(`http://localhost:6001/plants/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPlantData)
    })
    .then((res) => res.json())
    .then(plantsy => {
      let editedPlant = plants.map(plant => {
        if(plant.id === id){
          plant.name = plantsy.name
          plant.image = plantsy.image
          plant.price = plantsy.price
        }
        return (plant)
      })
      setPlants(editedPlant)
    })
    .catch(err => console.log(err))
  }

  return (
    <li className="card" data-testid="plant-item">

      <img src={image} alt={name} title={name}/>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button className={inStock ? "primary" : ""} onClick={handleToggleStock}>
          {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Newplant Name" value={newPlantData.name} onChange={handleUpdate}/>
            <input type="text" name="image" placeholder="Newimage URL" value={newPlantData.image} onChange={handleUpdate}/>
            <input type="number" name="price" step="0.01" placeholder="New Price" value={newPlantData.price} onChange={handleUpdate} />
            <button className="Edit-btn" type="submit">Edit Plant</button>
          </form>
          <button className="Delete-btn" onClick={handleDelete}>Delete</button>
     
    </li>
  );
}

export default PlantCard;
