import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import FavoritesFlyout from '../FavoritesFlyout';
import FavoritesButton from './FavoritesButton';
import SessionButton from './SessionButton';
import Link from 'next/link';

const initialState = {
  user: null,
  status: 'SUCCESS',
  error: '',
};

const Menu = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <header className="w-full h-14 z-30 bg-gray-700 bg-opacity-95 hidden lg:flex justify-between items-center px-5 sticky top-0">
        <span className="text-gray-100 text-2xl sm:text-3xl">Labranzas</span>

        <nav>
          <ul className="flex list-none opacity-95">
            <li
              className={`p-4 transition duration-300 ease-in-out hover:bg-gray-600 currentPath === ''
          ? bg-gray-900 : ''`}
            >
              <Link href="#" className="text-gray-100">
                Inicio
              </Link>
            </li>
            {/* Submenu  */}
            <div className="group inline-block">
              <li
                className={`hover:bg-gray-600 p-4 transition duration-300 ease-in-out group relative ${
                  currentPath === 'productos' ? 'bg-gray-900' : ''
                }`}
              >
                <Link href="#" className="text-gray-100 px-4">
                  Productos
                  <Icon
                    className="w-6 inline text-gray-100"
                    icon="mdi:chevron-down"
                  />
                </Link>

                <ul className="absolute top-14 -left-0 bg-gray-700 whitespace-nowrap text-gray-100 transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out origin-top">
                  <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600">
                    <Link href="#">Centros de mesa</Link>
                  </li>
                  <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600">
                    <Link href="">Souvenirs</Link>
                  </li>
                  <li className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600">
                    <Link href="">Hogar</Link>
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
              <Link href="#" className="text-gray-100 px-4">
                Cómo comprar?
              </Link>
            </li>
            <li
              className={`p-4 transition duration-300 ease-in-out hover:bg-gray-600 ${
                currentPath === 'contacto' ? 'bg-gray-900' : ''
              }`}
            >
              <Link href="#" className="text-gray-100 px-4">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <SessionButton />
          <FavoritesButton />
          <button className="p-2 rounded-full transition duration-300 ease-in-out hover:hover:bg-gray-600">
            <Icon
              className="w-6 text-2xl inline text-gray-100"
              icon="mdi:cart-outline"
            />
          </button>
        </div>
        <FavoritesFlyout />
      </header>
    </>
  );
};

export default Menu;
