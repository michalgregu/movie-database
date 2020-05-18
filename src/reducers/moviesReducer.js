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
    case TYPES.NEXT_PAGE:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
