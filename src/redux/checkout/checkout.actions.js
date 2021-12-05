import { ADD_CHECKOUT } from "./checkout.types";

export const addCheckout = (payload) => ({
  type: ADD_CHECKOUT,
  payload,
});
