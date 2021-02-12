import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Burger from "./Burger";
import Controls from "./Controls";
import Summary from "./Summary";
import {
  addIngredient,
  removeIngredient,
  updatePurchasable,
} from "../../redux/actionsCreator";

class BurgerBuilder extends Component {
  state = {
    modalOpen: false,
  };

  addIngredientHandle = (type) => {
    this.props.addIngredient(type);
    this.props.updatePurchasable();
  };

  removeIngredientHandle = (type) => {
    this.props.removeIngredient(type);
    this.props.updatePurchasable();
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  handleCheckout = () => {
    this.props.history.push("/checkout");
  };
  render() {
    return (
      <div>
        <div className="d-flex flex-md-row flex-column">
          <Burger ingredients={this.props.ingredients} />
          <Controls
            addIngredient={this.addIngredientHandle}
            removeIngredient={this.removeIngredientHandle}
            price={this.props.totalPrice}
            toggleModal={this.toggleModal}
            purchasable={this.props.purchasable}
          />
        </div>
        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
            <Summary ingredients={this.props.ingredients} />
          </ModalBody>
          <ModalFooter>
            <Button className="btn-pink" onClick={this.handleCheckout}>
              Continue to checkout
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = {
  addIngredient,
  removeIngredient,
  updatePurchasable,
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
