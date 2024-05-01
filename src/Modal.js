import React, { useState } from 'react';
import './Modal.css'; // Import CSS for styling modal

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="modal-container">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>×</span>
            <h2>Modal Title</h2>
            <p>This is a simple modal using React.js</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
