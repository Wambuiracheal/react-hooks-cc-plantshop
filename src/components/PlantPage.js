import React,{useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
 
function PlantPage() {
  const[plants,setPlants] = useState([])
  const[searchPlants, setSearchPlants] = useState("")
  useEffect(() =>{
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => {
        setPlants(data)
    })
  },[])
  const displayPlants = plants.filter((green) =>
    green.name.toLowerCase().includes(searchPlants.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm plants = {plants} setPlants = {setPlants}/>
       <Search lookup={setSearchPlants}/>
      <PlantList  plants = {displayPlants} setPlants = {setPlants}/>
    </main>
  );
}

export default PlantPage;
