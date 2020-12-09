import React, { useEffect, useState } from 'react';
import { Action } from 'react-redux-action-observer';
import { actionObservable } from '../redux/store';

const ActionObserver = () => {
  const [action, setAction] = useState<Action>({ type: 'INIT' });

  useEffect(() => {
    const unsubscribe = actionObservable.subscribe((newAction) => {
      setAction(newAction);
    });
    return unsubscribe;
  });

  return (
    <div>
      <h2>Action Observer</h2>
      <pre>{JSON.stringify(action, null, 2)}</pre>
    </div>
  );
};

export default ActionObserver;
