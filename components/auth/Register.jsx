import { useEffect, useState } from 'react';
import { register, sessionModal, user } from '../../stores/users';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
import { useStore } from '@nanostores/react';

const Register = ({ toggleTab }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirm, setConfirm] = useState('');
  const [confirmError, setConfirmError] = useState(null);
  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [userSession, setUserSession] = useState({
    user: null,
    status: 'SUCCESS',
    error: '',
  });

  const $user = useStore(user);

  useEffect(() => {
    setUserSession($user);
    if (userSession.user) {
      sessionModal.set(false);
    }
  }, [$user, userSession.user]);

  const handleSubmit = async () => {
    let error = false;
    if (email.length === 0) {
      setEmailError('Obligatorio');
      error = true;
    }
    if (password.length === 0) {
      setPasswordError('Obligatorio');
      error = true;
    }

    if (!terms) {
      setTermsError(true);
      user.set({
        ...user.get(),
        status: 'ERROR',
        error: 'Debes aceptar términos y condiciones',
      });
    }

    if (error || emailError !== null || passwordError !== null || !terms)
      return;

    register(email, password);
  };

  function handleChange(name, value) {
    if (name === 'email') {
      const pattern =
        '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$';
      setEmail(value);
      let regex = new RegExp(pattern);
      regex.exec(value) === null
        ? setEmailError('Ingresa un email válido')
        : setEmailError(null);
    }
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

  const handleTerms = () => {
    setTerms(!terms);
    setTermsError(false);
  };
  const closeMessage = () => {
    console.log('closeMessage');

    user.set({ ...user.get(), status: 'SUCCESS', error: '' });
  };

  return (
    <>
      <div className="relative">
        {userSession.status === 'LOADING' && <Spinner />}
        <div className="p-4">
          <form className="min-h-[400px] flex flex-col">
            <Message msg={userSession.error} closeMessage={closeMessage} />
            <div className="grow flex flex-col justify-evenly">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="email@example.com"
                  required
                />
                <p
                  className={`absolute block tracking-wider text-sm text-red-500 opacity-0 transition-opacity duration-1000 ease-out ${
                    emailError ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {emailError}
                </p>
              </div>

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
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="********"
                  required
                />
                <p
                  className={`absolute block text-sm tracking-wider	text-red-500 opacity-0 transition-opacity duration-1000 ease-out ${
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
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="********"
                  required
                />
                <p
                  className={`absolute block text-sm tracking-wider	text-red-500 opacity-0 transition-opacity duration-1000 ease-out ${
                    confirmError ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {confirmError}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={terms}
                      onChange={handleTerms}
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className={`ml-2 text-sm font-medium  ${
                      termsError ? 'text-red-500' : 'text-gray-800'
                    }`}
                  >
                    Acepto los términos y condiciones
                  </label>
                </div>

                <div className="text-sm place-self-end font-medium text-gray-500">
                  <div>
                    Ya tienes cuenta?&nbsp;
                    <button
                      type="button"
                      onClick={() => toggleTab(1)}
                      className="ml-1 text-blue-700 hover:underline"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
