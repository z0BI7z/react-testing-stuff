import { LastActionState } from 'redux/reducers/last-action';
import { RootState } from 'redux/reducers/root';
import 'reselect';

export const selectLastAction = (state: RootState): LastActionState =>
  state.lastAction;
