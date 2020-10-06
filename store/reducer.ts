import { combineReducers } from "redux";
// import { HYDRATE } from "next-redux-wrapper";
// Import reducers
import wrapperReducer from "./core/wrapper";
import cartReducer from "./core/cart";
import mainReducer from "./core/main";
import themeReducer from "./core/theming";

const rootReducer = combineReducers({
  wrapper: wrapperReducer,
  cart: cartReducer,
  main: mainReducer,
  theming: themeReducer,
});

export default rootReducer;
