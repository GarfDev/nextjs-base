import { createSelector } from "reselect";
import rootSelector from "store/selectors";

export const mainSelector = createSelector(rootSelector, (state) => state.main);

export const cartActiveSelector = createSelector(
  mainSelector,
  (state) => state.activeCart
);
