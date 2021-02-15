import axios from "axios";
import {
  ADD_INGREDIENT,
  LOAD_ORDERS,
  ORDERS_LOAD_FAILED,
  REMOVE_INGREDIENT,
  RESET_INGREDIENTS,
  UPDATE_PURCHASABLE,
} from "./actionTypes";

export const addIngredient = (ingType) => {
  return { type: ADD_INGREDIENT, payload: ingType };
};

export const removeIngredient = (ingType) => {
  return { type: REMOVE_INGREDIENT, payload: ingType };
};

export const updatePurchasable = () => {
  return { type: UPDATE_PURCHASABLE };
};

export const resetIngredients = () => {
  return { type: RESET_INGREDIENTS };
};

const loadOrders = (orders) => {
  return { type: LOAD_ORDERS, payload: orders };
};

const ordersLoadFailed = () => {
  return { type: ORDERS_LOAD_FAILED };
};

export const fetchOrders = () => {
  return (dispath) => {
    axios
      .get(
        `https://burger-builder-website-default-rtdb.firebaseio.com/orders.json`
      )
      .then((res) => dispath(loadOrders(res.data)))
      .catch((err) => dispath(ordersLoadFailed()));
  };
};
