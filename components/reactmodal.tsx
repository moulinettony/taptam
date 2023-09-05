import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set your root element here

const YourComponentName: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Success Modal"
        appElement={document.getElementById('root') as HTMLElement} // Cast to HTMLElement
        className="w-1/2"
      >
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>

    </div>
  );
};

export default YourComponentName;

