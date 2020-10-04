import { all, call, put, takeLatest } from "redux-saga/effects";
import callApi from "global/services/api";
import ActionTypes from "./actionTypes";
import { CartResponse } from "./types";
import { initCartSuccess } from "./actions";

function* initCart() {
  const response: CartResponse = yield call(callApi, {
    method: "get",
    route: "/api/v1/get_cart",
  });
  if (response.success) {
    yield put(initCartSuccess(response.response));
  }
}

export default function* cartSaga() {
  yield all([takeLatest(ActionTypes.INIT_CART, initCart)]);
}
