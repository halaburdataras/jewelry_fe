import { createSelector } from "reselect";
import { selectPromotion } from "../promotion/promotion.reducer";

export const promotionSelector = createSelector(
  selectPromotion,
  (promotion) => promotion
);
