import {
  ADD_INGREDIENT,
  AUTH_SUCCESS,
  LOAD_ORDERS,
  ORDERS_LOAD_FAILED,
  REMOVE_INGREDIENT,
  RESET_INGREDIENTS,
  UPDATE_PURCHASABLE,
} from "./actionTypes";

const INGREDIENT_PRICE = {
  salad: 30,
  cheese: 60,
  meat: 90,
};

const initialState = {
  ingredients: [
    { type: "cheese", amount: 0 },
    { type: "salad", amount: 0 },
    { type: "meat", amount: 0 },
  ],
  orders: [],
  orderLoading: true,
  orderError: false,
  totalPrice: 50,
  purchasable: false,
  email: null,
  userId: null,
};

export const Reducer = (state = initialState, action) => {
  const newIngredients = [...state.ingredients];
  switch (action.type) {
    case ADD_INGREDIENT:
      const incrementPrice =
        state.totalPrice + INGREDIENT_PRICE[action.payload];
      for (let item of newIngredients) {
        if (item.type === action.payload) {
          item.amount++;
        }
      }
      return {
        ...state,
        ingredients: newIngredients,
        totalPrice: incrementPrice,
      };
    case REMOVE_INGREDIENT:
      const decrementPrice =
        state.totalPrice - INGREDIENT_PRICE[action.payload];
      for (let item of newIngredients) {
        if (item.type === action.payload) {
          if (item.amount <= 0) return state;
          item.amount--;
        }
      }
      return {
        ...state,
        ingredients: newIngredients,
        totalPrice: decrementPrice,
      };
    case UPDATE_PURCHASABLE:
      const sum = state.ingredients.reduce(
        (sum, element) => sum + element.amount,
        0
      );
      return { ...state, purchasable: sum > 0 };
    case RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          { type: "cheese", amount: 0 },
          { type: "salad", amount: 0 },
          { type: "meat", amount: 0 },
        ],
        totalPrice: 50,
        purchasable: false,
      };
    case LOAD_ORDERS:
      let newOrders = [];
      for (let key in action.payload) {
        newOrders.push({ ...action.payload[key], id: key });
      }
      return {
        ...state,
        orders: newOrders,
        orderLoading: false,
      };
    case ORDERS_LOAD_FAILED:
      return {
        ...state,
        orderError: true,
        orderLoading: false,
      };

    //ALTER AUTH CASES
    case AUTH_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};
