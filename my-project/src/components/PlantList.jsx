import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants, onToggleSoldOut, onDeletePlant }) => {
  return (
    // Render a list of PlantCard components for each plant
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleSoldOut={onToggleSoldOut}
          onDeletePlant={onDeletePlant}
        />
      ))}
    </div>
  );
};

export default PlantList;
