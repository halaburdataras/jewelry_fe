import { call, takeEvery } from "@redux-saga/core/effects";
import { createCheckout } from "./checkout.operation";
import { ADD_CHECKOUT } from "./checkout.types";

export function* handleAddCheckout({ payload }) {
  try {
    console.log("2");

    yield call(createCheckout, payload);
    console.log("3");
  } catch (error) {
    console.log(error);
  }
}

export default function* checkoutSaga() {
  yield takeEvery(ADD_CHECKOUT, handleAddCheckout);
}
