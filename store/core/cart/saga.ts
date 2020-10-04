import { all, call, put, takeLatest } from "redux-saga/effects";
import callApi from "global/services/api";
import ActionTypes from "./actionTypes";
import { CartResponse } from "./types";
import { initCartSuccess } from "./actions";
import { cartResponseToState } from "./adapters";

function* callInitCart() {
  const response: CartResponse = yield call(callApi, {
    method: "get",
    route: "/cart/get",
  });
  if (response.success) {
    yield put(initCartSuccess(cartResponseToState(response)));
  }
}

export default function* cartSaga() {
  yield all([takeLatest(ActionTypes.INIT_CART, callInitCart)]);
}
