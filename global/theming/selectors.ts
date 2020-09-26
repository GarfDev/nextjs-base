import { createSelector } from "reselect";
import rootSelector from "store/selectors";
import { Light, Dark } from "./index";

export const currentThemeSelector = createSelector(rootSelector, (state) => {
  const currentThemeStyles =
    state.theming.currentTheme === "LIGHT" ? Light : Dark;
  return currentThemeStyles;
});
