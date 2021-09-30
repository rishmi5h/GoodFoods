import "./styles.css";
import React, { useState } from "react";
const foodDb = {
  "North Indian": [
    {
      Paneer: "4/5"
    },
    {
      halwa: "5/5"
    }
  ],
  "South Indian": [
    {
      Vada: "4.5/5"
    },
    {
      Idli: "5/5"
    },
    {
      Dosa: "4.5/5"
    }
  ],
  Drinks: [
    {
      Mojito: "4/5"
    },
    {
      "Mogu Mogu": "5/5"
    }
  ]
};

export default function App() {
  const [selectedCusine, setCusine] = useState("North Indian");
  const [selectedFoodItems, setFoodItems] = useState(foodDb["North Indian"]);
  function lectureClickHandler(currentCusine) {
    setCusine(currentCusine);
    setFoodItems(foodDb[currentCusine]);
  }

  return (
    <div className="App">
      <h1>Good Foods</h1>
      <p style={{ fontSize: "smaller" }}>Checkout My Favorite Food Items</p>
      <div>
        {Object.keys(foodDb).map((currentCusine) => (
          <button onClick={() => lectureClickHandler(currentCusine)}>
            {currentCusine}
          </button>
        ))}
      </div>
      <br />
      <div className="outputSpace">
        {console.log(selectedFoodItems)}
        {Object.values(selectedFoodItems).map((item) => (
          <div className="output">
            <h1>{Object.keys(item)}</h1>
            <p>Rating : {Object.values(item)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
