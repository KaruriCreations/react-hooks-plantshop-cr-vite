import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <li key={plant.id}>
          <PlantCard plant={plant} />
        </li>
      ))}
    </ul>
  );
}

export default PlantList;
