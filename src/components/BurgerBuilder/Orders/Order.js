import React from "react";

const orderCardStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "20px",
  marginBottom: "10px",
  boxShadow: "1px 1px #888888",
};

const ingredientsStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "5px",
  marginRight: "10px",
};

const Order = ({ order }) => {
  return (
    <div style={orderCardStyle}>
      <p>
        Order Number: <span className="text-warning">{order.id}</span>
      </p>
      <p>Delivery Address: {order.customer.deliveryAddress}</p>
      <hr />
      {order.ingredients.map((item) => (
        <span key={item.type} style={ingredientsStyle}>
          {item.amount}x{" "}
          <span style={{ textTransform: "capitalize" }}>{item.type}</span>
        </span>
      ))}
      <hr />
      <p>Total: {order.totalPrice} BDT</p>
    </div>
  );
};

export default Order;
