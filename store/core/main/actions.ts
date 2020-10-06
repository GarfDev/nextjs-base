import { action } from "typesafe-actions";
import ActionTypes from "./actionTypes";

export const toggleCart = () => action(ActionTypes.TOGGLE_CART);
