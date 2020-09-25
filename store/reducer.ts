import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
// Import reducers
import cartReducer from "./core/cart";
import sessionReducer from "./core/session";

const reducer = (state = { app: "init", page: "init" }, action: any) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
      return state;
    case "APP":
      return { ...state, app: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  wrapper: reducer,
  cart: cartReducer,
  session: sessionReducer,
});

export default rootReducer;
