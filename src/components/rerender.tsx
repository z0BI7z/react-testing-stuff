import React, { useCallback, useState } from 'react';
import emptyFunc from 'utils/empty-func';

interface ChildProps {
  inc: () => void;
}

const Child: React.FC<ChildProps> = ({ inc = emptyFunc }) => {
  return <button onClick={inc}>Inc</button>;
};

const MemoChild = React.memo(Child);

const Rerender: React.FC = () => {
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
