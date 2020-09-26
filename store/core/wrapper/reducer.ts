import { HYDRATE } from "next-redux-wrapper";
import { WrapperType } from "./types";

export const initialState: WrapperType = {
  app: "init",
  page: "init",
};

const reducer = (state = initialState, action: any): WrapperType => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
      return state;
    case "APP":
      return { ...state, app: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default reducer;
