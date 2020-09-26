import { ActionType } from "typesafe-actions";
import { DefaultTheme } from "styled-components";
import * as actions from "./actions";
import { THEMES } from "./constants";

export type ThemingActions = ActionType<typeof actions>;

export interface ThemingType {
  currentTheme: keyof typeof THEMES;
}
