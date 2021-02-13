import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../../redux/actionsCreator";

const Orders = ({ fetchOrders, orders, orderLoading, orderError }) => {
  useEffect(() => fetchOrders(), [fetchOrders]);
  console.log(orders);
  console.log(orderLoading);
  console.log(orderError);
  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderError: state.orderError,
  };
};

const mapDispatchToProps = {
  fetchOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
