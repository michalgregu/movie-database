import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers/rootReducer";
import { routerMiddleware } from "connected-react-router";
import history from "./history";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  );
}
