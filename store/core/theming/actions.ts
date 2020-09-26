import { action } from "typesafe-actions";
import ActionTypes from "./actionTypes";

export const initTheme = () => action(ActionTypes.INIT_THEME);

export const changeTheme = () => action(ActionTypes.CHANGE_THEME);
