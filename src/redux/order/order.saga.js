import { put, takeEvery } from "@redux-saga/core/effects";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../services/local-storage.service";
import { setOrder } from "./order.actions";
import { GET_ORDER, FORM_ORDER } from "./order.types";

export function* handleOrderLoad() {
  const order = yield getFromLocalStorage("order");
  yield put(setOrder(order));
}

export function* handleFormOrder({ payload }) {
  yield put(setOrder(payload));
  setToLocalStorage("order", payload);
}

export default function* orderSaga() {
  yield takeEvery(GET_ORDER, handleOrderLoad);
  yield takeEvery(FORM_ORDER, handleFormOrder);
}
