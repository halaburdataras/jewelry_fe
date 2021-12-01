import { createSelector } from "reselect";
import { selectRing } from "../rings/rings.reducer";

export const ringSelector = createSelector(selectRing, (ring) => ring);
