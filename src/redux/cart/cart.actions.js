import {
  ADD_TO_CART,
  CLEAR_CART,
  SET_CART,
  REMOVE_FROM_CART,
  SET_CART_ITEM_QUANTITY,
  GET_CART,
} from "./cart.types";

export const getCart = () => ({
  type: GET_CART,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const clearCart = (payload) => ({
  type: CLEAR_CART,
  payload,
});

export const setQuantity = (payload) => ({
  type: SET_CART_ITEM_QUANTITY,
  payload,
});

export const setCart = (payload) => ({
  type: SET_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
