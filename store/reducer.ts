import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
// Import reducers
import wrapperReducer from "./core/wrapper";
import cartReducer from "./core/cart";
import themeReducer from "./core/theming";

const rootReducer = combineReducers({
  wrapper: wrapperReducer,
  cart: cartReducer,
  theming: themeReducer,
});

export default rootReducer;
