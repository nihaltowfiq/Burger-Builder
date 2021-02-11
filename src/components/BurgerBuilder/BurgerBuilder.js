import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
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
    modalOpen: false,
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
  };

  removeIngredientHandle = (type) => {
    const newIngredients = [...this.state.ingredients];
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    for (let item of newIngredients) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.state.ingredients} />
          <Controls
            addIngredient={this.addIngredientHandle}
            removeIngredient={this.removeIngredientHandle}
            price={this.state.totalPrice}
            toggleModal={this.toggleModal}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Continue to checkout</Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;
