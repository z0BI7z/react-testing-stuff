export const DUMMY_START = 'DUMMY_START';
export const DUMMY_SUCCESS = 'DUMMY_SUCCESS';
export const DUMMY_FAILURE = 'DUMMY_FAILURE';

export const dummyStart = () => ({
  type: DUMMY_START,
  payload: Date.now(),
});

export const dummySuccess = () => ({
  type: DUMMY_SUCCESS,
});

export const dummyFailure = () => ({
  type: DUMMY_FAILURE,
});
