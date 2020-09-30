import { action } from "typesafe-actions";
import ActionTypes from "./actionTypes";
import { CartItem } from "./types";

export const initCart = () => {
  return action(ActionTypes.INIT_CART);
};

export const addItem = (item: CartItem) => {
  return action(ActionTypes.ADD_ITEM, { item });
};

export const updateItem = (id: string, newItem: CartItem) => {
  return action(ActionTypes.UPDATE_ITEM, { id, newItem });
};

export const removeItem = (id: string) => {
  return action(ActionTypes.REMOVE_ITEM, { id });
};

export const resetCart = () => {
  return action(ActionTypes.RESET_CART);
};
