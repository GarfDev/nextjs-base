import { stringify } from "querystring";
import { Cart, CartResponse } from "./types";

export const cartResponseToState = ({ response }: CartResponse): Cart => ({
  id: response._id,
  itemCount: response.itemCount,
  currency: response.currency,
  items: response.items,
  itemSubTotalPrice: response.itemSubTotalPrice,
  originalTotalPrice: response.originalTotalPrice,
  updatedAt: response.updatedAt,
  createdAt: response.createdAt,
});
