import React, { useEffect, useState, useCallback } from 'react';
import useInterval from '../hooks/useInterval';
import emptyFunc from 'utils/empty-func';

interface ActionsProps {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

const Actions: React.FC<ActionsProps> = ({
  start = emptyFunc,
  stop = emptyFunc,
  reset = emptyFunc,
}) => {
  console.log('actions rerender');
  return (
    <React.Fragment>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </React.Fragment>
  );
};

const TimedCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const [isRunning, start, stop] = useInterval(inc, 500);

  useEffect(() => {
    if (count >= 10) {
      stop();
    }
  }, [count, stop, isRunning]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    console.log('start, stop, or reset updated');
  }, [start, stop, reset]);

  return (
    <div>
      <h2>Interval</h2>
      <p>{count}</p>
      <div>
        <p>{`status: ${isRunning ? 'running' : 'stopped'}`}</p>
        <Actions key="actions" start={start} stop={stop} reset={reset} />
      </div>
    </div>
  );
};

export default TimedCounter;
