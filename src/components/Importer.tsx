import React from 'react';
import Modal from './Modal';
import Rerender from 'components/Rerender';

const Importer = () => {
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
