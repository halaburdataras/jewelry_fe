import { put, takeEvery } from "@redux-saga/core/effects";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../services/local-storage.service";
import { setCart } from "./cart.actions";
import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_CART,
  REMOVE_FROM_CART,
  SET_CART_ITEM_QUANTITY,
} from "./cart.types";

export function* handleCartLoad() {
  const cart = yield getFromLocalStorage("cart");
  yield put(setCart(cart));
}

export function* handleAddCartItem({ payload }) {
  const cart = getFromLocalStorage("cart");

  const possibleItemInCart = cart.find((item) => item.id === payload.id);

  let newCart;
  if (possibleItemInCart) {
    newCart = cart.map((item) => {
      item.id === payload.id && item.quantity++;
      return item;
    });
  } else {
    newCart = [...cart, { ...payload, quantity: 1 }];
  }
  yield put(setCart(newCart));
  setToLocalStorage("cart", newCart);
}

export function* handleSetCartItemQuantity({ payload }) {
  const { id, value } = payload;
  const cart = getFromLocalStorage("cart");
  const newCart = cart.map((el) => {
    if (el.id === id) el.quantity = value;
    return el;
  });
  setToLocalStorage("cart", newCart);
  yield put(setCart(newCart));
}

export function* handleRemoveCartItem({ payload }) {
  const cart = getFromLocalStorage("cart");
  const newCart = cart.filter((item) => item.id !== payload);
  yield put(setCart(newCart));
  setToLocalStorage("cart", newCart);
}

export function* handleClearCart() {
  yield put(setCart([]));
  setToLocalStorage("cart", []);
}

export default function* cartSaga() {
  yield takeEvery(GET_CART, handleCartLoad);
  yield takeEvery(ADD_TO_CART, handleAddCartItem);
  yield takeEvery(REMOVE_FROM_CART, handleRemoveCartItem);
  yield takeEvery(SET_CART_ITEM_QUANTITY, handleSetCartItemQuantity);
  yield takeEvery(CLEAR_CART, handleClearCart);
}
