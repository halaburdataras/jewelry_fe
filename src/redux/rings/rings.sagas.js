import { setRingLoading, setRings } from "./rings.actions";
import { takeEvery, call, put } from "redux-saga/effects";
import { getAllRings } from "./rings.operation";
import { GET_RINGS } from "./rings.types";

export function* handleRingsLoad({ payload }) {
  try {
    yield put(setRingLoading(true));
    const rings = yield call(getAllRings, payload);
    yield put(setRings(rings));
    yield put(setRingLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* ringSaga() {
  yield takeEvery(GET_RINGS, handleRingsLoad);
}
