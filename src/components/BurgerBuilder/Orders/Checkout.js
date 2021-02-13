import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Spinner from "../../Spinner/Spinner";
import { resetIngredients } from "../../../redux/actionsCreator";

class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash On Delivery",
    },
    isLoading: false,
    isModalOpen: false,
    modalMsg: null,
    alertType: null,
  };

  inputChangeHandler = (e) => {
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });
  };

  goBack = () => {
    this.props.history.goBack("/");
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.props.ingredients,
      customer: this.state.values,
      totalPrice: this.props.totalPrice,
      orderTime: new Date(),
    };
    axios
      .post(
        "https://burger-builder-website-default-rtdb.firebaseio.com/orders.json",
        order
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMsg: "Your Order Placed Successfully!",
            alertType: "success",
          });
          this.props.resetIngredients();
        } else {
          this.setState({
            isLoading: false,
            isModalOpen: true,
            modalMsg: "Something Went Wrong! Order Again!",
            alertType: "danger",
          });
        }
      })
      .catch((err) =>
        this.setState({
          isLoading: false,
          isModalOpen: true,
          modalMsg: "Something Went Wrong! Order Again!",
          alertType: "danger",
        })
      );
  };
  render() {
    const form = (
      <div>
        <h4
          style={{
            border: "1px solid gray",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          Payment: {this.props.totalPrice} BDT
        </h4>
        <form
          onSubmit={this.submitHandler}
          style={{
            border: "1px solid gray",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            margin: "10px 0",
          }}
        >
          <textarea
            name="deliveryAddress"
            value={this.state.values.deliveryAddress}
            className="form-control"
            placeholder="Your Delivery Address"
            onChange={(e) => this.inputChangeHandler(e)}
          />
          <br />
          <input
            name="phone"
            value={this.state.values.phone}
            className="form-control"
            placeholder="Your Phone Number"
            onChange={(e) => this.inputChangeHandler(e)}
          />
          <br />
          <select
            name="paymentType"
            value={this.state.values.paymentType}
            className="form-control"
            onChange={(e) => this.inputChangeHandler(e)}
          >
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="bKash">bKash</option>
          </select>
          <br />
          <Button
            type="submit"
            className="btn-pink mr-auto"
            disabled={!this.props.purchasable}
          >
            Place Order
          </Button>
          <Button color="secondary" className="ml-1" onClick={this.goBack}>
            Cancel
          </Button>
        </form>
      </div>
    );
    return (
      <div>
        {this.state.isLoading ? <Spinner /> : form}
        <Modal isOpen={this.state.isModalOpen}>
          <ModalBody>
            <Alert className="text-center" color={this.state.alertType}>
              {this.state.modalMsg}
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button
              className="btn-pink"
              onClick={() => this.props.history.push("/orders")}
            >
              Go to Orders
            </Button>
            <Button onClick={this.goBack}>Back to Burger Builder</Button>
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

const mapDispatchToProps = { resetIngredients };

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
