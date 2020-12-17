import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

interface ModalBaseProps {
  fullscreen?: boolean;
}

const ModalBase = styled.div<ModalBaseProps>`
  z-index: 1001;
  background-color: white;
  overflow: scroll;
  border-radius: ${(props) => (props.fullscreen ? '' : '3px')};
  height: ${(props) => (props.fullscreen ? '100%' : '')};
  width: ${(props) => (props.fullscreen ? '100%' : '')};
  box-shadow: ${(props) =>
    props.fullscreen ? '' : '0 3px 0.5rem rgba(0, 0, 0, 0.1)'};
`;

interface ModalProps {
  open: boolean;
  onCancel?: () => void;
  fullscreen?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onCancel = () => {},
  fullscreen = false,
  children,
}) => {
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
        fullscreen={fullscreen}
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
