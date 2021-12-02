import {
  GET_PROMOTIONS,
  SET_PROMOTIONS,
  SET_PROMOTION_LOADING,
} from "./promotion.types";

export const getPromotions = () => ({
  type: GET_PROMOTIONS,
});

export const setPromotions = (payload) => ({
  type: SET_PROMOTIONS,
  payload,
});

export const setPromotionLoading = (payload) => ({
  type: SET_PROMOTION_LOADING,
  payload,
});
