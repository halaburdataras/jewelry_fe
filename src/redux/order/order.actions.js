import { SET_ORDER, GET_ORDER, FORM_ORDER } from "./order.types";

export const getOrder = () => ({
  type: GET_ORDER,
});

export const setOrder = (payload) => ({
  type: SET_ORDER,
  payload,
});

export const formOrder = (payload) => ({
  type: FORM_ORDER,
  payload,
});
