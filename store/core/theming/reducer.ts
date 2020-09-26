import _ from "lodash";
import Cookies from "js-cookie";
import { ThemingActions, ThemingType } from "./types";
import ActionTypes from "./actionTypes";
import { THEMES } from "./constants";

export const themingInitialState: ThemingType = {
  currentTheme: "LIGHT",
};

const reducer = (state = themingInitialState, action: ThemingActions) => {
  switch (action.type) {
    case ActionTypes.INIT_THEME: {
      const previousTheme = Cookies.get("theme");
      if (previousTheme) {
        return { currentTheme: previousTheme };
      }
      Cookies.set("theme", state.currentTheme);
      return state;
    }
    //
    case ActionTypes.CHANGE_THEME: {
      // Desire which is Next Theme
      const currentTheme = THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
      // Store new value to Cookie
      Cookies.set("theme", currentTheme);
      return { currentTheme };
    }
    // Default case
    default: {
      return state;
    }
  }
};

export default reducer;
