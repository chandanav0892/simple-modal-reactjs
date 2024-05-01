import React, { useState } from 'react';
import './Modal.css'; // Import CSS for styling modal

function CustomModal() {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <button className="custom-button" onClick={openModal}>
        Custom Width Modal
      </button>

      {show && (
        <div className="modal-container">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="custom-modal">
            <div className="modal-header">
              <h2 className="modal-title">Custom Modal Styling</h2>
              <span className="close-btn" onClick={closeModal}>×</span>
            </div>
            <div className="modal-body">
              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                ipsam atque a dolores quisquam quisquam adipisci possimus
                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                deleniti rem!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomModal;
