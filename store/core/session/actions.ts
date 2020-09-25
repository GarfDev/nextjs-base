import { update } from "lodash";
import { action } from "typesafe-actions";
import ActionTypes from "./actionTypes";

export const updateSession = (id: string) => {
  return action(ActionTypes.UPDATE_SESSION, { id });
};

export const resetSession = () => {
  return action(ActionTypes.RESET_SESSION);
};
