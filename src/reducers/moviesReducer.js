import * as TYPES from "../actions/types";

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOVIES_DISCOVER:
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
    case TYPES.CHANGE_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    case TYPES.FETCH_MOVIES_GENRES:
      return {
        ...state,
        ...action.payload,
      };
    case TYPES.FETCH_MOVIES_SEARCH:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
