import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { logout, sessionModal, user } from '@/stores/users';
import Link from 'next/link';

const initialState = {
  user: null,
  status: 'SUCCESS',
  message: '',
};

const SessionButton = () => {
  const [userSession, setUserSession] = useState(initialState);
  const $user = useStore(user);

  useEffect(() => {
    setUserSession($user);
  }, [$user]);

  return (
    <>
      {!userSession.user?.id ? (
        <button
          onClick={() => sessionModal.set(true)}
          className="p-1 border border-gray-100 transition duration-300 ease-in-out hover:hover:bg-gray-600"
        >
          <span className="text-gray-100 px-4">Iniciar sesión</span>
        </button>
      ) : (
        <div className="group inline-block">
          <div
            className={`p-4 transition duration-300 ease-in-out group relative cursor-pointer`}
          >
            <span className="text-gray-100 p-1 border border-gray-100 transition duration-300 ease-in-out hover:bg-gray-600">
              Mi cuenta
            </span>

            <ul className="absolute top-14 -left-0 bg-gray-50 border border-gray-800 whitespace-nowrap text-gray-800 transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out origin-top">
              <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-50">
                <Link href="#">Mis datos</Link>
              </li>
              <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-50">
                <Link href="">Mis pedidos</Link>
              </li>
              <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-50">
                <Link href="">Checkout</Link>
              </li>
              <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-50">
                <button onClick={() => logout()}>Salir</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SessionButton;
