import { createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), reduxDevtools)
);

export default store;
