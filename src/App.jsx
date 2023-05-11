// src/App.jsx
import foods from "./foods.json";
import "./App.css";
import { Row, Divider, Button } from "antd";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  const [foodState, setFoodState] = useState(foods);

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodState.map((food) => {
          return <FoodBox food={food} />;
        })}
      </Row>
    </div>
  );
}
export default App;
