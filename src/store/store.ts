import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { appDefaultState, rootReducer } from '../state/ducks';

const middleware = [thunk];
const reducer = rootReducer;

const getStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));

  const store = createStore(reducer, appDefaultState, enhancer);

  return store;
};

export const configureStore = () => {
  const store = getStore();

  return { store };
};
