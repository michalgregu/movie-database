import * as TYPES from "../actions/types";

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOVIES_DISCOVER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
