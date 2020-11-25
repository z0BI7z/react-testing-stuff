import React, { useCallback, useState, FunctionComponent as FC } from 'react';

interface ChildProps {
  inc: () => void;
}

const Child: FC<ChildProps> = ({ inc }) => {
  return <button onClick={inc}>Inc</button>;
};

const MemoChild = React.memo(Child);

const Rerender: FC = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <h2>{'Rerender'}</h2>
      <p>{count}</p>
      <Child inc={inc} />
      <MemoChild inc={inc} />
    </div>
  );
};

export default Rerender;
