import React from "react";

function PlantCard({ plant, onToggleSoldOut, onDeletePlant }) {
  const { id, name, image, price, soldOut } = plant;

  // handleSoldOutClick function to toggle the SoldOut status
  const handleSoldOutClick = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ soldOut: !soldOut }),
    })
      .then((res) => res.json())
      .then((updated) => onToggleSoldOut(id));
  };
  // function to handle deleting a plant
  const handleDeleteClick = () => {
    fetch("http://localhost:6001/plants/${id}", {
      method: "DELETE",
    }).then(() => onDeletePlant(id));
  };
  return (
    <div className="plant-card">
      <img src="{image}" alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleSoldOutClick}>
        {soldOut ? "Sold Out" : "Mark as Sold Out"}
      </button>
      <button
        onClick={handleDeleteClick}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
}

export default PlantCard;
