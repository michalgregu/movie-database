import * as TYPES from "../actions/types";

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOVIES_DISCOVER:
    case TYPES.CHANGE_PAGE:
    case TYPES.FETCH_MOVIES_GENRES:
    case TYPES.FETCH_MOVIES_SEARCH:
    case TYPES.FETCH_MOVIE_RECOMMENDATION:
      return {
        ...state,
        ...action.payload,
      };
    case TYPES.SET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.REMOVE_MOVIES_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
