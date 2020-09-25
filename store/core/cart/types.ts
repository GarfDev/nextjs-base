import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type CartActions = ActionType<typeof actions>;

export interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
  checkout: boolean;
  date_added: number;
}

export interface Cart {
  [id: string]: CartItem;
}
