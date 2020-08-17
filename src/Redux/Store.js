/* eslint-disable no-underscore-dangle */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from "redux";
// import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

import reducers from "./RootReducer";

const createHistory = require("history").createBrowserHistory;

const history = createHistory();
// const routeMiddleware = routerMiddleware(history);
const middlewars = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    // router: routerReducer,
  }),
  composeEnhancer(applyMiddleware(...middlewars)),
);
export { store, history };
