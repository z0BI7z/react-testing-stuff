import React, {
  useEffect,
  useState,
  useCallback,
  FunctionComponent,
} from 'react';
import useInterval from '../hooks/useInterval';

interface ActionsProps {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

const Actions: FunctionComponent<ActionsProps> = ({ start, stop, reset }) => {
  console.log('actions rerender');
  return (
    <React.Fragment>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </React.Fragment>
  );
};

const TimedCounter = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const [isRunning, start, stop] = useInterval(inc, 500);

  useEffect(() => {
    if (count === 10) {
      stop();
    }
  }, [count, stop]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    console.log('start updated');
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
