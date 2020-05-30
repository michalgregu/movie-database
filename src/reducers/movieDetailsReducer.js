import * as TYPES from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOVIE_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
