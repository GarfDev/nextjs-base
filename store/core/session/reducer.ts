import ActionTypes from "./actionTypes";
import { SessionType, SessionActions } from "./types";

export const sessionInitialState: SessionType = {};

const sessionReducer = (
  state = sessionInitialState,
  action: SessionActions
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default sessionReducer;
