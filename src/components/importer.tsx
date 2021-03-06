import Rerender from 'components/rerender';
import React from 'react';
import Modal from './modal';

const Importer: React.FC = () => {
  const handleClick = () => {
    console.log(
      `imported ${Modal} using a relative import 
      and ${Rerender} using an absolute import`
    );
  };
  return (
    <div>
      <h2>Importer</h2>
      <button onClick={handleClick}>Log</button>
    </div>
  );
};

export default Importer;
