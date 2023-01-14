import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Labranzas</h4>
              <p className="text-gray-400">
                Av Segurola 1523 <br />
                Capital Federal, 1407 Argentina <br />
                <br />
                <strong>Teléfono:</strong> +54 11 5804 6525
                <br />
                <strong>Email:</strong> decolabranzas@hotmail.com
                <br />
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Links</h4>
              <ul className="text-gray-400">
                <li className="pb-4">
                  <Icon
                    className="w-6 inline text-purple-500"
                    icon="mdi:chevron-right"
                  />
                  <a href="#" className="hover:text-purple-500">
                    Términos y condiciones
                  </a>
                </li>
                <li className="pb-4">
                  <Icon
                    className="w-6 inline text-purple-500"
                    icon="mdi:chevron-right"
                  />
                  <a href="#" className="hover:text-purple-500">
                    Políticas de privacidad
                  </a>
                </li>
                <li className="pb-4">
                  <Icon
                    className="w-6 inline text-purple-500"
                    icon="mdi:chevron-right"
                  />
                  <a href="#" className="hover:text-purple-500">
                    Cómo comprar?
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="text-2xl pb-4">Newsletter</h4>
              <p className="text-gray-400 pb-2">
                Recibe novedades y promociones
              </p>
              <form className="flex flex-wrap">
                <input
                  className="text-gray-400 w-2/3 p-2 border-2 border-purple-600 focus:border-purple-300"
                  placeholder="email@example.com"
                  type="text"
                  name=""
                  id=""
                />
                <button className="p-2 w-1/3 border-2 bg-white hover:bg-purple-200 border-purple-600 text-purple-600 transition ease-in-out delay-150">
                  Suscribete
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 gap-6 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              Copyright{' '}
              <strong>
                <span className="text-gray-400">Labranzas</span>
              </strong>
              . Derechos resevados
            </div>
            <div>
              Design by{' '}
              <a className="text-purple-300" href="#">
                TiDev
              </a>
            </div>
          </div>
          <div className="text-center text-xl text-black">
            <a
              className="p-1 rounded-full bg-purple-300 hover:bg-purple-400 mx-1 inline-block"
              href="#"
            >
              <Icon className="w-8" icon="mdi:facebook" />
            </a>
            <a
              className="p-1 rounded-full bg-purple-300 hover:bg-purple-400 mx-1 inline-block"
              href="#"
            >
              <Icon className="w-8" icon="mdi:twitter" />
            </a>
            <a
              className="p-1 rounded-full bg-purple-300 hover:bg-purple-400 mx-1 inline-block"
              href="#"
            >
              <Icon className="w-8" icon="mdi:instagram" />
            </a>
            <a
              className="p-1 rounded-full bg-purple-300 hover:bg-purple-400 mx-1 inline-block"
              href="#"
            >
              <Icon className="w-8" icon="mdi:whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
