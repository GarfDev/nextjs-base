import { ApiResponse } from "global/services/api/types";
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
  id?: string;
  itemCount: number;
  items: {
    [id: string]: CartItem;
  };
  currency: string;
  itemSubTotalPrice: number;
  originalTotalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface RemoteCart {
  _id: string;
  currency: string;
  discounts_applied: string[];
  items: {
    [id: string]: CartItem;
  };
  itemCount: number;
  itemSubTotalPrice: number;
  originalTotalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartResponse extends ApiResponse {
  response: RemoteCart;
}
