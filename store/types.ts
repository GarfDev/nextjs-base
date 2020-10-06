import { Main } from './core/main/types';
import { Cart } from "./core/cart/types";
import { ThemingType } from "./core/theming/types";
import { WrapperType } from "./core/wrapper/types";

export interface ApplicationRootState {
  cart: Cart;
  main: Main,
  wrapper: WrapperType;
  theming: ThemingType;
}
