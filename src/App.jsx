// src/App.jsx
import foods from "./foods.json";
import "./App.css";
import { Row, Divider, Button } from "antd";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodState, setFoodState] = useState(foods);

  const onFoodCreate = (newFood) => {
    setFoodState([...foodState, newFood]);
  };

  const onSearch = (search) => {
    const term = new RegExp(search, "i");
    const newfoods = foodState.filter((food) => term.test(food.name));
    setFoodState(newfoods);
  };

  const onDelete = (name) => {
    const newfoods = foodState.filter((food) => food.name !== name);
    setFoodState(newfoods);
  };

  return (
    <div className="App">
      <AddFoodForm onFinish={onFoodCreate} />

      <Button> Hide Form / Add New Food </Button>
      <Divider>Search</Divider>

      <Search onUpdate={onSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodState.map((food) => {
          return <FoodBox food={food} deleteFun={onDelete} />;
        })}
      </Row>
    </div>
  );
}
export default App;
