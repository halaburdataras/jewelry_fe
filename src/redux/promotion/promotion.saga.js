import { takeEvery, call, put } from "redux-saga/effects";
import { setPromotionLoading, setPromotions } from "./promotion.actions";
import { getAllPromotions } from "./promotion.operation";
import { GET_PROMOTIONS } from "./promotion.types";

export function* handlePromotionsLoad({ payload }) {
  try {
    yield put(setPromotionLoading(true));
    const promotions = yield call(getAllPromotions, payload);
    yield put(setPromotions(promotions));
    yield put(setPromotionLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* promotionSaga() {
  yield takeEvery(GET_PROMOTIONS, handlePromotionsLoad);
}
