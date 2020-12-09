import React from 'react';

interface LintProps {
  hi: boolean;
}

const Lint: React.FC<LintProps> = ({ hi = '' }) => {
  const handleClick = () => {
    if (hi) {
      console.log('hi');
    }
  };

  if (!hi) {
    return null;
  }

  return (
    <div>
      <h2>Lint</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Lint;
