import { useRef, useState, useEffect, useCallback } from 'react';

const useInterval = (
  func: Function,
  duration: number
): [boolean, () => void, () => void] => {
  const ref = useRef<number>();
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      ref.current = setInterval(func, duration);
    }
    return () => {
      if (running) {
        clearInterval(ref.current);
      }
    };
  }, [func, duration, running]);

  const start = useCallback(() => {
    setRunning(true);
  }, []);

  const stop = useCallback(() => {
    setRunning(false);
  }, []);

  return [running, start, stop];
};

export default useInterval;
