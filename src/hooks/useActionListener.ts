import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { selectLastAction } from 'redux/selectors/last-action';

const useActionListener = (
  callback: (values: any) => void,
  actionTypes: string[]
): void => {
  const store = useStore();

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const lastAction = selectLastAction(store.getState());
      if (actionTypes.includes(lastAction.type)) {
        callback(lastAction.payload);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [store, callback, actionTypes]);
};

export default useActionListener;
