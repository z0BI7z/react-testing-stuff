import { applyMiddleware, createStore, Middleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers/root';

const middlewares: Middleware[] = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
