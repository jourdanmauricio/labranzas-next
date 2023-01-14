import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
// import FavoritesFlyout from '../FavoritesFlyout';
// import FavoritesButton from './FavoritesButton';
import LoginButton from './LoginButton';

const Menu = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className="w-full h-14 z-50 bg-gray-700 bg-opacity-95 hidden lg:flex justify-between items-center px-5 sticky top-0">
      <span className="text-gray-100 text-2xl sm:text-3xl">Labranzas</span>

      <nav>
        <ul className="flex list-none">
          <li
            className={`p-4 transition duration-300 ease-in-out hover:bg-gray-600 currentPath === ''
          ? bg-gray-900 : ''`}
          >
            <a href="#" className="text-gray-100">
              Inicio
            </a>
          </li>
          {/* Submenu  */}
          <div className="group inline-block">
            <li
              className={`hover:bg-gray-600 p-4 transition duration-300 ease-in-out group relative ${
                currentPath === 'productos' ? 'bg-gray-900' : ''
              }`}
            >
              <a href="#" className="text-gray-100 px-4">
                Productos
                <Icon
                  className="w-6 inline text-gray-100"
                  icon="mdi:chevron-down"
                />
              </a>

              <ul className="absolute top-14 -left-0 bg-gray-700 whitespace-nowrap text-gray-100 transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out origin-top">
                <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600">
                  <a href="#">Centros de mesa</a>
                </li>
                <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600">
                  <a href="">Souvenirs</a>
                </li>
                <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600">
                  <a href="">Hogar</a>
                </li>
              </ul>
            </li>
          </div>
          {/* Submenu  */}
          <li
            className={`p-4 transition duration-300 ease-in-out hover:bg-gray-600 ${
              currentPath === 'questions' ? 'bg-gray-900' : ''
            }`}
          >
            <a href="#" className="text-gray-100 px-4">
              Cómo comprar?
            </a>
          </li>
          <li
            className={`p-4 transition duration-300 ease-in-out hover:bg-gray-600 ${
              currentPath === 'contacto' ? 'bg-gray-900' : ''
            }`}
          >
            <a href="#" className="text-gray-100 px-4">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <LoginButton />
        {/* <FavoritesButton /> */}

        <button className="p-2 rounded-full transition duration-300 ease-in-out hover:hover:bg-gray-600">
          <Icon className="w-6 inline text-gray-100" icon="mdi:cart-outline" />
        </button>
      </div>
      {/* <FavoritesFlyout /> */}
    </header>
  );
};

export default Menu;
