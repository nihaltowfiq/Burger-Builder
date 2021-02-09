import React from "react";
import "./Ingredient.css";
import breadTop from "../../assests/images/top.png";
import breadBottom from "../../assests/images/bottom.png";
import salad from "../../assests/images/salad.png";
import cheese from "../../assests/images/cheese.png";
import meat from "../../assests/images/meat.png";

const Ingredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread_top":
      ingredient = (
        <div>
          <img src={breadTop} alt="Bread Top" />
        </div>
      );
      break;
    case "bread_bottom":
      ingredient = (
        <div>
          <img src={breadBottom} alt="Bread Bottom" />
        </div>
      );
      break;
    case "meat":
      ingredient = (
        <div>
          <img src={meat} alt="Meat" />
        </div>
      );
      break;
    case "salad":
      ingredient = (
        <div>
          <img src={salad} alt="Salad" />
        </div>
      );
      break;
    case "cheese":
      ingredient = (
        <div>
          <img src={cheese} alt="Cheese" />
        </div>
      );
      break;
    default:
      ingredient = null;
  }
  return <div className="ingredient">{ingredient}</div>;
};

export default Ingredient;
