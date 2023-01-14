import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
        <button
          onClick={() => onClose()}
          className="text-white text-xl place-self-end"
        >
          X
        </button>
        <div className="bg-white p-2 w-full rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
