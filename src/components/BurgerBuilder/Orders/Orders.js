import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { fetchOrders } from "../../../redux/actionsCreator";
import Spinner from "../../Spinner/Spinner";
import Order from "./Order";

const Orders = ({ fetchOrders, orders, orderLoading, orderError, email }) => {
  const filterOrders = orders.filter((item) => item.email === email);
  console.log(filterOrders);
  useEffect(() => fetchOrders(), [fetchOrders]);
  let order = null;
  if (orderError) {
    order = (
      <Alert className="text-center font-weight-bold" color="danger">
        Sorry Failed to Load Orders!
      </Alert>
    );
  } else {
    if (orders.length === 0) {
      order = (
        <Alert className="text-center font-weight-bold" color="warning">
          You have <strong>no</strong> Orders!
        </Alert>
      );
    } else {
      order = (
        <div>
          <h3 className="text-center m-3">
            Your Total Order: {filterOrders.length}
          </h3>
          {filterOrders.map((order) => (
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
    email: state.email,
    userId: state.userId,
  };
};

const mapDispatchToProps = {
  fetchOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
