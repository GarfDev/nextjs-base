import { Cart } from "./core/cart/types";
import { SessionType } from "./core/session/types";
import { ThemingType } from "./core/theming/types";
import { WrapperType } from "./core/wrapper/types";

export interface ApplicationRootState {
  cart: Cart;
  wrapper: WrapperType;
  session: SessionType;
  theming: ThemingType;
}
