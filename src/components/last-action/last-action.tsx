import useActionListener from 'hooks/useActionListener';
import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { dummyStart, dummySuccess, DUMMY_START } from 'redux/actions/dummy';

const LastAction: React.FC = () => {
  const log = useCallback((values: any) => {
    console.log('i said:', values);
  }, []);
  const actionTypes = useMemo(() => [DUMMY_START], []);
  useActionListener(log, actionTypes);

  const dispatch = useDispatch();
  const startDummy = () => {
    dispatch(dummyStart());
  };
  const successDummy = () => {
    dispatch(dummySuccess());
  };

  return (
    <div>
      <h2>Last Action</h2>
      <button onClick={startDummy}>Start</button>
      <button onClick={successDummy}>Success</button>
    </div>
  );
};

export default LastAction;
