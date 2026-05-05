import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from "react";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage setPlants={setPlants} plants={plants} />
    </div>
  );
}

export default App;
    