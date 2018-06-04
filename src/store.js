import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

import logger from "redux-logger";

export const getStore = history => {
  const middlewares = [routerMiddleware(history), thunk, logger];

  return createStore(rootReducer, applyMiddleware(...middlewares));
};
