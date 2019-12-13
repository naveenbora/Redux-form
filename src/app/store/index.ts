import { combineReducers } from 'redux';
import { CounterReducer } from './counter.reducer';

export class IAppState {
  counter: any;  
};

export const rootReducer = combineReducers<IAppState>({
  counter: CounterReducer
});


