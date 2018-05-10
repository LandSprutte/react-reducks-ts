import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import commonReducer, {
  defaultState as commonDefaultState,
  ICommonState
} from './common/reducers';

export interface IAppState {
  common: ICommonState;
}

export const appDefaultState: IAppState = {
  common: commonDefaultState
};

// DucksFeatureReducers Goes here:
export const rootReducer = combineReducers({
  common: commonReducer,
  routing: routerReducer
});
