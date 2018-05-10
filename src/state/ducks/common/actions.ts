import { IFluxStandardAction } from '../FluxStandardAction';
import * as types from './types';

export interface IIncrementNetworkCalls extends IFluxStandardAction {
  type: types.INCREMENT_NETWORK_CALLS;
}

export type CommonStateAction = IIncrementNetworkCalls;

export const incrementNetworkCalls = (): IIncrementNetworkCalls => ({
  type: types.INCREMENT_NETWORK_CALLS
});

export interface ICommonActions {
  incrementNetworkCalls(): IIncrementNetworkCalls;
}

export default {
  incrementNetworkCalls
};
