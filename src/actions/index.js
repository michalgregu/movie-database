import * as TYPES from "./types";
import tmdb from "../apis/tmdb";

const KEY = "98f9ea95150a1fbb9c37be468dd850a9";

export const initializeState = (name) => async (dispatch) => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch(getConfig());
  await dispatch(getGenres());
  await dispatch(getDiscover(name));
  dispatch({ type: TYPES.REMOVE_LOADING });
};

export const getGenres = () => async (dispatch) => {
  const response = await tmdb.get("/genre/movie/list", {
    params: {
      api_key: KEY,
    },
  });
  dispatch({ type: TYPES.GET_GENRES, payload: response.data.genres });
};

export const getDiscover = (name) => async (dispatch) => {
  const response = await tmdb.get(`/movie/${name.toLowerCase()}`, {
    params: {
      api_key: KEY,
    },
  });
  dispatch({ type: TYPES.FETCH_MOVIES_DISCOVER, payload: response.data });
};

export const getConfig = () => async (dispatch) => {
  const response = await tmdb.get("/configuration", {
    params: {
      api_key: KEY,
    },
  });
  dispatch({ type: TYPES.GET_CONFIG, payload: response.data });
};