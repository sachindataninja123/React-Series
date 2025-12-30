import { createStore, compose, applyMiddleware } from "redux";
import { weatherReducer } from "./reducer/weatherReducer";
import { thunk } from "redux-thunk";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  weatherReducer,
  compose(applyMiddleware(thunk), reduxDevtools)
);

export default store;
