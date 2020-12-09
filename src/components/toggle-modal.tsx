import React, { useState } from 'react';
import Modal from './modal';

const ToggleModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div>
        <h2>Modal</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? 'close' : 'open'}
        </button>
      </div>
      <Modal open={open} onCancel={() => setOpen(false)}>
        <div>hello</div>
        <button onClick={() => setOpen(false)}>close</button>
      </Modal>
    </React.Fragment>
  );
};

export default ToggleModal;
