import { SET_ORDER } from "./order.types";

export const initialState = {
  items: [],
};

const orderReducer = (state = initialState, action = {}) => {
  if (action.type === SET_ORDER) {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default orderReducer;
