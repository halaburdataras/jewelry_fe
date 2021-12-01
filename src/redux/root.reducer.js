import { combineReducers } from "redux";
import Ring from "./rings/rings.reducer";

export const rootReducer = () =>
  combineReducers({
    Ring,
  });
