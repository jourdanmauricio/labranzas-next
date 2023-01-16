import PageLayout from '@/components/PageLayout';
import Menu from '@/components/Menu/Menu';
import MenuMobile from '@/components/Menu/MenuMobile';
import Hero from '@/components/Hero';
import Spinner from '@/components/Spinner/Spinner';
import Message from '@/components/Message/Message';
import Modal from '@/components/Modal/Modal';
import { recoveryPassword, sessionModal, user } from '@/stores/users';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';

const RecoveryPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirm, setConfirm] = useState('');
  const [confirmError, setConfirmError] = useState(null);

  const [userSession, setUserSession] = useState({
    user: null,
    status: 'SUCCESS',
    message: '',
  });

  const router = useRouter();
  const { token } = router.query;
  if (token) sessionModal.set(true);

  const $user = useStore(user);

  useEffect(() => {
    if ($user.status === 'RECOVERY') {
      setUserSession({
        user: null,
        status: 'SUCCCESS',
        message: '',
      });
    }
  }, [$user]);

  function handleChange(name, value) {
    if (name === 'password') {
      setPassword(value);
      if (value.length < 8) {
        setPasswordError('Mínimo 8 caracteres');
        if (confirm && value !== confirm)
          setConfirmError('La confirmación no coincide');
        return;
      }
      if (confirm && value === confirm) setConfirmError(null);

      setPasswordError(null);
    }
    if (name === 'confirm') {
      setConfirm(value);
      if (value !== password) {
        setConfirmError('La confirmación no coincide');
        return;
      }
      setConfirmError(null);
    }
  }

  const handleSubmit = async () => {
    let error = false;
    if (password.length === 0) {
      setPasswordError('Obligatorio');
      error = true;
    }

    if (error || passwordError !== null || confirmError !== null) return;

    const response = await recoveryPassword(password, token);
    console.log('response', response);
    if (response === 'PASSWORD-CHANGED')
      router.push({
        pathname: '/',
      });
  };

  const closeMessage = () => {
    user.set({ ...user.get(), status: 'SUCCESS', message: '' });
  };

  const closeModal = () => {
    user.set({ ...user.get(), status: 'SUCCESS', message: '' });
    router.push({
      pathname: '/',
    });
  };

  return (
    <>
      <PageLayout title="Labranzas | Home">
        <MenuMobile />
        <Hero />
        <Menu />

        <Modal isVisible="true" closeModal={closeModal}>
          {/* <div
          onClick={handleClose}
          id="wrapper"
          className="fixed z-40 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
            <button
              // onClick={() => closeModal()}
              className="text-white text-xl place-self-end"
            >
              X
            </button> */}
          <div className="bg-white p-2 w-full rounded">
            <div className="relative">
              {userSession.status === 'LOADING' && <Spinner />}
              <div className="p-4">
                <form className="min-h-[400px] flex flex-col">
                  <Message
                    msg={userSession.message}
                    closeMessage={closeMessage}
                  />
                  <div className="grow flex flex-col justify-evenly">
                    <h3 className="text-center">Restablecer contraseña</h3>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="********"
                        required
                      />
                      <p
                        className={`absolute block text-sm tracking-wider	text-red-500 transition-opacity duration-1000 ease-out ${
                          passwordError ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {passwordError}
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Confirmar contraseña
                      </label>
                      <input
                        type="password"
                        name="confirm"
                        id="confirm"
                        value={confirm}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="********"
                        required
                      />
                      <p
                        className={`absolute block text-sm tracking-wider	text-red-500 transition-opacity duration-1000 ease-out ${
                          confirmError ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {confirmError}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                  >
                    Restablecer contraseña
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* </div>
        </div> */}
        </Modal>
      </PageLayout>
    </>
  );
};

export default RecoveryPassword;
