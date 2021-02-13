import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

class Checkout extends Component {
  state = {
    values: {
      deliveryAddress: "",
      phone: "",
      paymentType: "Cash On Delivery",
    },
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };
  render() {
    return (
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
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

export default connect(mapStateToProps)(Checkout);
