import {
  SET_RINGS,
  SET_RING,
  GET_RINGS,
  GET_RING,
  SET_RING_LOADING,
} from "./rings.types";

export const setRings = (payload) => ({
  type: SET_RINGS,
  payload,
});

export const setRing = (payload) => ({
  type: SET_RING,
  payload,
});

export const getRings = (payload) => ({
  type: GET_RINGS,
  payload,
});

export const getRing = (payload) => ({
  type: GET_RING,
  payload,
});

export const setRingLoading = (payload) => ({
  type: SET_RING_LOADING,
  payload,
});
