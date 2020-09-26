import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
// Import reducers
import wrapperReducer from "./core/wrapper";
import cartReducer from "./core/cart";
import sessionReducer from "./core/session";
import themeReducer from "./core/theming";

const rootReducer = combineReducers({
  wrapper: wrapperReducer,
  cart: cartReducer,
  session: sessionReducer,
  theming: themeReducer,
});

export default rootReducer;
