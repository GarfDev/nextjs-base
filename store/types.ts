import { SessionType } from "./core/session/types";
import { Cart } from "./core/cart/types";

export interface ApplicationRootState {
  session: SessionType;
  cart: Cart;
}
