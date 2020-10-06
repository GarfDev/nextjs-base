import _ from "lodash";
import ActionTypes from "./actionTypes";
import { Main, MainActions } from "./types";

const initialState: Main = {
  activeCart: false,
};

const reducer = (state = initialState, actions: MainActions): Main => {
  switch (actions.type) {
    case ActionTypes.TOGGLE_CART:
      const newState = _.cloneDeep(state);
      newState.activeCart = !newState.activeCart;
      return newState;
    default:
      return state;
  }
};

export default reducer;
