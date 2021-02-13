import {
  ADD_INGREDIENT,
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
