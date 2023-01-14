import { useState } from 'react';
import Modal from '../Modal/Modal';
import Tabs from '../auth/Tabs';

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="p-1 border border-gray-100 transition duration-300 ease-in-out hover:hover:bg-gray-600"
      >
        <span className="text-gray-100 px-4">Iniciar sesión</span>
      </button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <Tabs />
      </Modal>
    </>
  );
};

export default LoginButton;
