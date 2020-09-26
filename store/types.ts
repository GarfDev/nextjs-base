import { Cart } from "./core/cart/types";
import { SessionType } from "./core/session/types";
import { ThemingType } from "./core/theming/types";

export interface ApplicationRootState {
  cart: Cart;
  session: SessionType;
  theming: ThemingType;
}
