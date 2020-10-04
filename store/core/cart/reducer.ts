import ActionTypes from "./actionTypes";
import { Cart, CartActions } from "./types";

export const cartInitialState: Cart = {
  itemCount: 0,
  currency: "USD",
  items: {},
  itemSubTotalPrice: 0,
  originalTotalPrice: 0,
  createdAt: "",
  updatedAt: "",
};

const cartReducer = (state = cartInitialState, action: CartActions) => {
  switch (action.type) {
    //
    case ActionTypes.INIT_CART_SUCCESS: {
      const { cart } = action.payload;
      return cart;
    }
    //
    case ActionTypes.ADD_ITEM: {
      const { item } = action.payload;
      return { ...state, [item.id]: item };
    }
    //
    case ActionTypes.UPDATE_ITEM: {
      const { id, newItem } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: newItem,
        },
      };
    }
    //
    case ActionTypes.REMOVE_ITEM: {
      const { id } = action.payload;
      const newCartItems = state.items;
      delete newCartItems[id];
      return { ...state, items: newCartItems };
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
