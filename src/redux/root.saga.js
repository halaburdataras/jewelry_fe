import { all } from "redux-saga/effects";
import cartSaga from "./cart/cart.saga";
import ringSaga from "./rings/rings.sagas";
import orderSaga from "./order/order.saga";
import checkoutSaga from "./checkout/checkout.saga";

export function* rootSaga() {
  yield all([ringSaga(), cartSaga(), orderSaga(), checkoutSaga()]);
}
