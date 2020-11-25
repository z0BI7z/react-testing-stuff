import React, { useState, useEffect, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalBase = styled.div`
  z-index: 1001;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0 3px 0.5rem rgba(0, 0, 0, 0.1);
  background-color: white;
`;

interface ModalProps {
  open: boolean;
  onCancel?: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ open, onCancel, children }) => {
  const [el] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  if (!open) {
    return null;
  }

  return createPortal(
    <ModalBackDrop
      onClick={() => {
        console.log('back');
        onCancel && onCancel();
      }}
    >
      <ModalBase
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </ModalBase>
    </ModalBackDrop>,
    el
  );
};

export default Modal;
