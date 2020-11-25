import { useRef, useState, useEffect, useCallback } from 'react';

const useInterval = (func: Function, time: number) => {
  const ref = useRef<number>();
  const [running, setRunning] = useState(false);

  useEffect(() => {
    console.log('rerunning');

    if (running) {
      ref.current = setInterval(func, time);
    }
    return () => {
      if (running) {
        console.log(`clearing ${ref.current}`);
        clearInterval(ref.current);
      }
    };
  }, [func, time, running]);

  const start = useCallback(() => {
    setRunning(true);
  }, []);

  const stop = useCallback(() => {
    setRunning(false);
  }, []);

  // const value = useMemo(
  //   () => ({
  //     start,
  //     stop,
  //     isRunning: running,
  //   }),
  //   [start, stop, running]
  // );

  return {
    start,
    stop,
    isRunning: running,
  };
};

export default useInterval;
