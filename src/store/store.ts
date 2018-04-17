import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../state/ducks";

const middleware = [thunk];
const reducer = rootReducer;

const getStore = () => {
  const enhancer = compose(
    applyMiddleware(...middleware)
    // window.devToolsExtension ? window.devToolsExtension() : noop => noop
  );

  const store = createStore(reducer, enhancer);

  return store;
};

export const configureStore = () => {
  const store = getStore();

  return { store };
};
