import { ActionObservable } from 'react-redux-action-observer';
import { applyMiddleware, createStore, Middleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers/root';

export const actionObservable = new ActionObservable();

const middlewares: Middleware[] = [actionObservable.createMiddleware(), logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
