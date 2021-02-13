import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../../redux/actionsCreator";
import Order from "./Order";

const Orders = ({ fetchOrders, orders, orderLoading, orderError }) => {
  useEffect(() => fetchOrders(), [fetchOrders]);
  const order = orders.map((order) => <Order key={order.id} order={order} />);
  return <div>{order}</div>;
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
