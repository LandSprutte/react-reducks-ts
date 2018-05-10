import { ICommonState } from './reducers';

export const getCommonViewState = (state: ICommonState) => ({
  networkCalls: state.networkCalls
});
