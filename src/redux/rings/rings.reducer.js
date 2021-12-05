import { SET_RINGS, SET_RING, SET_RING_LOADING } from "./rings.types";

export const selectRing = ({ Ring }) => ({
  items: Ring.list,
  loading: Ring.ringLoading,
  ring: Ring.ring,
});

export const initialState = {
  list: [],
  ring: null,
  ringLoading: false,
};

const ringReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RINGS:
      return {
        ...state,
        list: action.payload,
      };
    case SET_RING:
      return {
        ...state,
        ring: action.payload,
      };
    case SET_RING_LOADING:
      return {
        ...state,
        ringLoading: action.payload,
      };
    default:
      return state;
  }
};

export default ringReducer;
