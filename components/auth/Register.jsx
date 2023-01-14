import { useState } from 'react';

const Register = ({ toggleTab }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [terminos, setTerminos] = useState(true);

  const handleSubmit = () => {
    console.log('Register', email, password, confirm);
  };

  const handleTerms = () => {
    console.log('Terms', terminos);
    setTerminos(!terminos);
    console.log(!terminos);
  };

  return (
    <div className="p-4 min-h-[400px]">
      <form className="flex flex-col gap-6">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="********"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Confirmar contraseña
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="********"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              Terms: {terminos}
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={terminos}
                onChange={handleTerms}
              />
              {/* className="w-4 h-4 bg-gray-50 rounded border border-gray-300
              focus:ring-3 focus:ring-blue-300" */}
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-800"
            >
              Acepto los términos y condiciones
            </label>
          </div>

          <div className="text-sm place-self-end font-medium text-gray-500">
            <div>
              Ya tienes cuenta?&nbsp;
              <span
                onClick={() => toggleTab(1)}
                className="ml-1 text-blue-700 hover:underline"
              >
                Iniciar sesión
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default Register;
