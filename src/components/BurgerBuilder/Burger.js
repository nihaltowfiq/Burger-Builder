import React from "react";
import Ingredient from "./Ingredient";

const Burger = () => {
  return (
    <div className="my-4">
      <Ingredient type="bread_top" />
      <Ingredient type="cheese" />
      <Ingredient type="salad" />
      <Ingredient type="meat" />
      <Ingredient type="bread_bottom" />
    </div>
  );
};

export default Burger;
