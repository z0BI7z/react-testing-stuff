import React, { useState } from 'react';
import Modal from './modal';

const ToggleModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [full, setFull] = useState(false);

  return (
    <React.Fragment>
      <div>
        <h2>Modal</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? 'close' : 'open'}
        </button>
        <button onClick={() => setFull(!full)}>
          {full ? 'set min' : 'set full'}
        </button>
      </div>
      <Modal open={open} onCancel={() => setOpen(false)} fullscreen={full}>
        <div style={{ padding: '.5rem 1rem' }}>
          <p>hello</p>
          <button onClick={() => setOpen(false)}>close</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ToggleModal;
