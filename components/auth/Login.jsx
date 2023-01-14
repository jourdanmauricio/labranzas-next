import { useState } from 'react';

const Login = ({ toggleTab }) => {
  const [action, setAction] = useState('LOGIN');
  return (
    <div className="p-4 min-h-[400px]">
      {action === 'FORGOT' && (
        <form className="h-full flex flex-col gap-9	justify-between" action="#">
          <h3>Recuperar contraseña</h3>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="email@example.com"
              required
            />
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

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Recuperar contraseña
          </button>
        </form>
      )}
      {action === 'LOGIN' && (
        <form className="flex flex-col gap-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="********"
              required
            />
          </div>
          <div className="h-[70px] flex flex-col sm:flex-row items-start justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="remember"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-800"
              >
                Recuérdame
              </label>
            </div>
            <button
              onClick={() => setAction('FORGOT')}
              className="place-self-end justify-self-end text-sm text-blue-700 hover:underline"
            >
              Olvidó su contraseña?
            </button>
          </div>

          <div className="h-[20px] flex text-sm justify-end	font-medium text-gray-500">
            No tienes cuenta?&nbsp;
            <span
              onClick={() => toggleTab(2)}
              className="text-blue-700 hover:underline"
            >
              Crear cuenta
            </span>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Iniciar sesión
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
