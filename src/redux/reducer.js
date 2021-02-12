import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
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
  totalPrice: 50,
  purchasable: false,
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
    default:
      return state;
  }
};
