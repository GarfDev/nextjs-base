import ActionTypes from "./actionTypes";
import { Cart, CartActions } from "./types";

export const cartInitialState: Cart = {};

const cartReducer = (state = cartInitialState, action: CartActions) => {
  switch (action.type) {
    //
    case ActionTypes.ADD_ITEM: {
      const { item } = action.payload;
      return { ...state, [item.id]: item };
    }
    //
    case ActionTypes.UPDATE_ITEM: {
      const { id, newItem } = action.payload;
      return { ...state, [id]: newItem };
    }
    //
    case ActionTypes.REMOVE_ITEM: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    //
    case ActionTypes.RESET_CART: {
      return cartInitialState;
    }
    //
    default: {
      return state;
    }
  }
};

export default cartReducer;
