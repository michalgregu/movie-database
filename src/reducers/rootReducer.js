import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    config: configReducer,
    movies: moviesReducer,
  });

export default createRootReducer;
