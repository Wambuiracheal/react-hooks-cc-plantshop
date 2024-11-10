import React,{useState} from "react";


function NewPlantForm({plants, setPlants}) {
  const [newPlant, setNewPlant] = useState({
    name:"",
    image:"",
    price:0
  })
  function handleChange(e){
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value

    setNewPlant({
      ...newPlant,
      [name]:value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:6001/plants',{
      method:"POST",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(plant => setPlants([...plants,plant]))
    .catch((err) => console.log(err))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
