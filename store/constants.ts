import { cartInitialState } from "./core/cart/reducer";
import { sessionInitialState } from "./core/session/reducer";

export const applicationInitialState = {
  cart: cartInitialState,
  session: sessionInitialState,
};
