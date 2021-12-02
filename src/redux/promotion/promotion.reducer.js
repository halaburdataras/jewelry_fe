import { SET_PROMOTIONS, SET_PROMOTION_LOADING } from "./promotion.types";

export const selectPromotion = ({ Promotion }) => ({
  items: Promotion.list,
  loading: Promotion.promotionLoading,
});

export const initialState = {
  list: [],
  promotionLoading: false,
};

const promotionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PROMOTIONS:
      return {
        ...state,
        list: action.payload,
      };
    case SET_PROMOTION_LOADING:
      return {
        ...state,
        promotionLoading: action.payload,
      };
    default:
      return state;
  }
};

export default promotionReducer;
