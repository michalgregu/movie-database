import * as TYPES from "./types";
import tmdb from "../apis/tmdb";

import { animateScroll as scroll } from "react-scroll";

const KEY = "98f9ea95150a1fbb9c37be468dd850a9";

export const initializeState = (name) => async (dispatch) => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch(getConfig());
  await dispatch(getListOfGenres());
  await dispatch(getDiscover(name));
  dispatch({ type: TYPES.REMOVE_LOADING });
};

export const getConfig = () => async (dispatch) => {
  const response = await tmdb.get("/configuration", {
    params: {
      api_key: KEY,
    },
  });
  dispatch({ type: TYPES.GET_CONFIG, payload: response.data });
};

export const setSelected = (name) => async (dispatch) => {
  scroll.scrollToTop({ smooth: "easeOutQuint" });
  dispatch({
    type: TYPES.SET_SELECTED,
    payload: name.toLowerCase().replace(/ /g, "_"),
  });
};

export const setSortBy = (sortBy) => (dispatch) => {
  dispatch({
    type: TYPES.SET_SORTBY,
    payload: sortBy,
  });
};

export const setSearch = (search, page = 1) => async (dispatch) => {
  dispatch({
    type: TYPES.SET_SEARCH,
    payload: search,
  });
  dispatch(getSearch(search));
};

export const getListOfGenres = () => async (dispatch) => {
  const response = await tmdb.get("/genre/movie/list", {
    params: {
      api_key: KEY,
    },
  });
  dispatch({ type: TYPES.GET_GENRES, payload: response.data.genres });
};

export const getSearch = (search, page = 1) => async (dispatch) => {
  dispatch({ type: TYPES.SET_MOVIES_LOADING });
  const response = await tmdb.get("/search/movie", {
    params: {
      api_key: KEY,
      query: search,
      page,
    },
  });
  dispatch({
    type: TYPES.FETCH_MOVIES_SEARCH,
    payload: response.data,
  });
  dispatch({ type: TYPES.REMOVE_MOVIES_LOADING });
};

export const getGenres = (id, page = 1, sortBy = "popularity") => async (
  dispatch
) => {
  dispatch({ type: TYPES.SET_MOVIES_LOADING });
  const response = await tmdb.get("/discover/movie", {
    params: {
      api_key: KEY,
      with_genres: id,
      sort_by: sortBy + ".desc",
      page,
    },
  });
  dispatch({ type: TYPES.FETCH_MOVIES_GENRES, payload: response.data });
  dispatch({ type: TYPES.REMOVE_MOVIES_LOADING });
};

export const getDiscover = (name, page = 1) => async (dispatch) => {
  dispatch({ type: TYPES.SET_MOVIES_LOADING });
  const response = await tmdb.get(
    `/movie/${name.toLowerCase().replace(/ /g, "_")}`,
    {
      params: {
        api_key: KEY,
        page,
      },
    }
  );
  dispatch({ type: TYPES.FETCH_MOVIES_DISCOVER, payload: response.data });
  dispatch({ type: TYPES.REMOVE_MOVIES_LOADING });
};

export const getMovie = (id) => async (dispatch) => {
  dispatch({ type: TYPES.SET_MOVIES_LOADING });
  const response = await tmdb.get(`/movie/${id}`, {
    params: {
      api_key: KEY,
      append_to_response: "videos,recommendations",
    },
  });
  dispatch({ type: TYPES.FETCH_MOVIE_DETAILS, payload: response.data });
  dispatch({
    type: TYPES.FETCH_MOVIES_DISCOVER,
    payload: response.data.recommendations,
  });
  dispatch({ type: TYPES.REMOVE_MOVIES_LOADING });
};

export const getRecommendation = (id, page) => async (dispatch) => {
  const response = await tmdb.get(`/movie/${id}/recommendations`, {
    params: {
      api_key: KEY,
      page,
    },
  });
  dispatch({ type: TYPES.FETCH_MOVIE_RECOMMENDATION, payload: response.data });
};
