import { all, fork } from "redux-saga/effects";
// Import Sagas
import { cartSaga } from "store/core/cart";

function* rootSaga() {
  yield all([fork(cartSaga)]);
}

export default rootSaga;
