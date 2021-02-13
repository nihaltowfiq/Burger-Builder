import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { fetchOrders } from "../../../redux/actionsCreator";
import Spinner from "../../Spinner/Spinner";
import Order from "./Order";

const Orders = ({ fetchOrders, orders, orderLoading, orderError }) => {
  useEffect(() => fetchOrders(), [fetchOrders]);
  let order = null;
  if (orderError) {
    order = (
      <Alert className="text-center" color="danger">
        Sorry Failed to Load Orders!
      </Alert>
    );
  } else {
    if (orders.length === 0) {
      order = (
        <Alert className="text-center" color="warning">
          You have no Orders!
        </Alert>
      );
    } else {
      order = (
        <div>
          <h3 className="text-center m-3">Total Order: {orders.length}</h3>
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      );
    }
  }
  return <div>{orderLoading ? <Spinner /> : order}</div>;
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
