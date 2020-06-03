import * as TYPES from "../actions/types";

const initialState = {
  loading: true,
  selected: "popular",
  sortBy: { value: "popularity", label: "Popularity" },
  isMobileOpen: false,
};

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
    case TYPES.GET_CONFIG:
      return {
        ...state,
        tmdb_config: action.payload,
      };
    case TYPES.SET_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };
    case TYPES.SET_SORTBY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case TYPES.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case TYPES.SET_MOBILE_ON:
      return {
        ...state,
        isMobileOpen: true,
      };
    case TYPES.SET_MOBILE_OFF:
      return {
        ...state,
        isMobileOpen: false,
      };
    default:
      return state;
  }
};
