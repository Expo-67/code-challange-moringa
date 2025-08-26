import { useEffect, useState } from "react";
import PlantList from "./components/PlantList";
import NewPlantForm from "./components/NewPlantForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // state variables for plants and search term
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  //  useEffect to fetch plants data from the server(db.json)
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // function to handle adding a new plant
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // function to handle toggling the soldOut status of a plant
  const handleToggleSoldOut = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  //  function to handle filtering plants based on search
  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // function to handle deleting a plant
  const handleDeletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  return (
    <div className="app">
      <h1>Plantsy</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList
        plants={filteredPlants}
        onToggleSoldOut={handleToggleSoldOut}
        onDeletePlant={handleDeletePlant}
      />
    </div>
  );
}

export default App;
