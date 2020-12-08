import { Action } from 'redux/actions';

export const NULL_ACTION = 'NULL_ACTION';

const INITIAL_STATE = {
  type: NULL_ACTION,
  payload: null,
};

export const lastActionReducer = (state = INITIAL_STATE, action: Action) => {
  if (!action.payload) {
    return {
      payload: null,
      ...action,
    };
  }
  return action;
};

export type LastActionState = ReturnType<typeof lastActionReducer>;
