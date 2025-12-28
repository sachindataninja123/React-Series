import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
