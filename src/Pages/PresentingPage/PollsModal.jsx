import React from 'react';

const PollsModal = ({ isOpen, toggle }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '50px',
      zIndex: 1000,
    }}>
      <button onClick={toggle}>Close</button>
      <h1>Modal Content</h1>
      <p>This is a simple modal</p>
    </div>
  );
}

export default PollsModal;
