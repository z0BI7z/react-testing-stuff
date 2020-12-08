import { combineReducers } from 'redux';
import { lastActionReducer } from './last-action';

export const rootReducer = combineReducers({
  lastAction: lastActionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
