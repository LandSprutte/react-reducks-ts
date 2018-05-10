import { CommonStateAction } from './actions';
import * as types from './types';

export interface ICommonState {
  networkCalls: number;
}

export const defaultState: ICommonState = {
  networkCalls: 0
};

export const commonReducer = (
  state: ICommonState = defaultState,
  action: CommonStateAction
): ICommonState => {
  switch (action.type) {
    case types.INCREMENT_NETWORK_CALLS:
      return {
        ...state,
        networkCalls: state.networkCalls + 1
      };

    default:
      return state;
  }
};

export default commonReducer;
