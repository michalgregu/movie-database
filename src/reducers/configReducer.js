import * as TYPES from "../actions/types";

const initialState = { loading: true, selected: "Popular" };

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case TYPES.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};
