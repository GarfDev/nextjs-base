import { createSelector } from "reselect";
import rootSelector from "store/selectors";

const cartSelector = createSelector(rootSelector, (state) => state.cart);

export default cartSelector;
