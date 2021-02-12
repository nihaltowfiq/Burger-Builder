import React, { Component } from "react";
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
    console.log(this.state.values);
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.submitHandler}
          style={{
            border: "1px solid gray",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
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
          <Button type="submit" className="btn-pink mr-auto">
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

export default Checkout;
