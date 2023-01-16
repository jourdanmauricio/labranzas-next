import Spinner from '@/components/Spinner/Spinner';
import Message from '@/components/Message/Message';
import useLogin from './useLogin';

const Login = ({ toggleTab }) => {
  const {
    userSession,
    action,
    setAction,
    email,
    emailForgot,
    password,
    emailError,
    passwordError,
    emailForgotError,
    closeMessage,
    handleChange,
    handleForgot,
    handleSubmit,
  } = useLogin();
  return (
    <>
      <div className="relative">
        {userSession.status === 'LOADING' && <Spinner />}
        <div className="p-4">
          {action === 'FORGOT' && (
            <form className="min-h-[400px] flex flex-col">
              <Message msg={userSession.message} closeMessage={closeMessage} />
              <div className="grow flex flex-col justify-evenly">
                <h3 className="text-center">Recuperar contraseña</h3>
                <div>
                  <label
                    htmlFor="emailForgot"
                    className="block mb-2 text-sm font-medium text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="emailForgot"
                    id="emailForgot"
                    value={emailForgot}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="email@example.com"
                    required
                  />
                  <p
                    className={`absolute block tracking-wider text-sm text-red-500 opacity-0 transition-opacity duration-1000 ease-out ${
                      emailForgotError ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {emailForgotError}
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    Enviaremos un email para generar la contraseña
                  </p>
                  <p className="font-medium text-gray-800">
                    Si no lo encuentra, revise elementos no deseados o spam
                  </p>
                </div>

                <div className="text-sm place-self-end font-medium text-gray-500">
                  <div>
                    Ya tienes cuenta?&nbsp;
                    <span
                      onClick={() => setAction('LOGIN')}
                      className="ml-1 text-blue-700 hover:underline"
                    >
                      Iniciar sesión
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleForgot}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
              >
                Recuperar contraseña
              </button>
            </form>
          )}
          {action === 'LOGIN' && (
            <form className="min-h-[400px] flex flex-col">
              <Message msg={userSession.message} closeMessage={closeMessage} />
              <div className="grow flex flex-col justify-evenly">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm tracking-wider font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="email@example.com"
                    required
                  />
                  <p
                    className={`absolute block tracking-wider text-sm text-red-500 transition-opacity duration-1000 ease-out ${
                      emailError !== null ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {emailError}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block tracking-wider text-sm font-medium text-gray-600"
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
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                  <button
                    onClick={() => setAction('FORGOT')}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Olvidó su contraseña?
                  </button>

                  <div className="h-[20px] flex text-sm justify-end	font-medium text-gray-500">
                    No tienes cuenta?&nbsp;
                    <button
                      type="button"
                      onClick={() => toggleTab(2)}
                      className="text-blue-700 hover:underline"
                    >
                      Crear cuenta
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-lg rounded-lg py-2.5 text-center"
              >
                Iniciar sesión
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
