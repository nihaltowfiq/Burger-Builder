import React, { Component } from "react";
import Burger from "./Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "cheese", amount: 2 },
      { type: "salad", amount: 1 },
      { type: "meat", amount: 2 },
    ],
  };
  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default BurgerBuilder;
