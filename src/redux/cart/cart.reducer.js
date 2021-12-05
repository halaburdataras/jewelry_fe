import { SET_CART } from "./cart.types";

export const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action = {}) => {
  if (action.type === SET_CART) {
    return {
      ...state,
      cart: action.payload,
    };
  }
  return state;
};

export default cartReducer;
