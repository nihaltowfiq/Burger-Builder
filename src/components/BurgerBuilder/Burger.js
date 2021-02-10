import React from "react";
import "./Burger.css";
import Ingredient from "./Ingredient";

const Burger = ({ ingredients }) => {
  let ingredientArr = ingredients
    .map((item) => {
      let amountArr = [...Array(item.amount).keys()];
      return amountArr.map(() => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);

  if (ingredientArr.length === 0) {
    ingredientArr = <p>Please add some ingredients</p>;
  }

  return (
    <div className="my-4 burger">
      <Ingredient type="bread_top" />
      {ingredientArr}
      <Ingredient type="bread_bottom" />
    </div>
  );
};

export default Burger;
