import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ handleClose,children }) => {
  // 1. Get the target container (e.g., document.body)
  const portalRoot = document.body;

  // 2. Use createPortal to render children into the target
  return ReactDOM.createPortal(
    <div className="custom-modal-overlay" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        overflowY:'auto',
        flexWrap:'wrap'
      }} onClick={()=>{handleClose()}}>
      {children}
    </div>,
    portalRoot // 3. The destination DOM node
  );
};
 

export default Modal;