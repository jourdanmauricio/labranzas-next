import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
import useRegister from './useRegister';

const Register = ({ toggleTab }) => {
  const {
    userSession,
    email,
    password,
    confirm,
    terms,
    emailError,
    termsError,
    passwordError,
    confirmError,
    closeMessage,
    handleChange,
    handleTerms,
    handleSubmit,
  } = useRegister();

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
                  className={`absolute block tracking-wider text-sm text-red-500 transition-opacity duration-1000 ease-out ${
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
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
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
