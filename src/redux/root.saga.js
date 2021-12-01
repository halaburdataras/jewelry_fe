import { all } from "redux-saga/effects";
import ringSaga from "./rings/rings.sagas";

export function* rootSaga() {
  yield all([ringSaga()]);
}
