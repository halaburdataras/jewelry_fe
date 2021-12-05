import { combineReducers } from "redux";
import Ring from "./rings/rings.reducer";
import Cart from "./cart/cart.reducer";
import Order from "./order/order.reducer";
import Promotion from "./promotion/promotion.reducer";

export const rootReducer = () =>
  combineReducers({
    Ring,
    Cart,
    Order,
    Promotion,
  });
