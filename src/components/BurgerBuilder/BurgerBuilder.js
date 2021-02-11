import React, { Component } from "react";
import Burger from "./Burger";
import Controls from "./Controls";

const INGREDIENT_PRICE = {
  salad: 30,
  cheese: 60,
  meat: 90,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: "cheese", amount: 0 },
      { type: "salad", amount: 0 },
      { type: "meat", amount: 0 },
    ],
    totalPrice: 50,
  };

  addIngredientHandle = (type) => {
    const newIngredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    for (let item of newIngredients) {
      if (item.type === type) {
        item.amount++;
      }
    }
    this.setState({ ingredients: newIngredients, totalPrice: newPrice });

    // Below the code in my other thought
    // const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    // let matchType = this.state.ingredients.find((item) => item.type === type);
    // matchType.amount++;
    // this.setState({
    //   ...this.state.ingredients,
    //   matchType,
    //   totalPrice: newPrice,
    // });
  };

  removeIngredientHandle = (type) => {
    const newIngredients = [...this.state.ingredients];
    for (let item of newIngredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({ ingredients: newIngredients });

    // Below the code in my other thought
    // let matchType = this.state.ingredients.find((item) => item.type === type);
    // if (matchType.amount !== 0) {
    //   matchType.amount--;
    // }
    // this.setState({ ...this.state.ingredients, matchType });
  };
  render() {
    return (
      <div className="d-flex flex-md-row flex-column">
        <Burger ingredients={this.state.ingredients} />
        <Controls
          addIngredient={this.addIngredientHandle}
          removeIngredient={this.removeIngredientHandle}
          price={this.state.totalPrice}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
