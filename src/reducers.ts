import { combineReducers } from 'redux';

export type IGetState = () => IStoreState;

export interface IStoreState {
  [key: string]: any;
}

export const reducers = combineReducers({

});
