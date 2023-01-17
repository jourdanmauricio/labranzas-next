import { useStore } from '@nanostores/react';
import { sessionModal, user } from '@/stores/users';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import FavoritesFlyout from '../Favorites/FavoritesFlyout';
import FavoritesButton from './FavoritesButton';
import SessionButton from './SessionButton';
import Link from 'next/link';
import Modal from '../Modal/Modal';
import Tabs from '../auth/Tabs';

const initialState = {
  user: null,
  status: 'SUCCESS',
  message: '',
};

const Menu = ({ categories }) => {
  const $sessionModal = useStore(sessionModal);

  const router = useRouter();
  const currentPath = router.pathname;

  const closeModal = () => {
    sessionModal.set(false);
    user.set({ ...user.get(), status: 'SUCCESS', message: '' });
  };

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
              <Link href="/" className="text-gray-100">
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

                <div className="grid grid-cols-3 gap-4 p-6 min-w-max absolute top-14 left-0 -translate-x-1/3 bg-gray-700 whitespace-nowrap text-gray-100 transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out origin-top">
                  {categories.map((cat) => (
                    <Link
                      className="p-2 transition duration-300 ease-in-out hover:bg-gray-600"
                      href={`/categorias/${cat.name}`}
                      key={cat.id}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>

                {/* <ul className="absolute top-14 -left-0 bg-gray-700 whitespace-nowrap text-gray-100 transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out origin-top">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className="pt-3 p-4 transition duration-300 ease-in-out hover:bg-gray-600"
                    >
                      <Link href="#">{cat.name}</Link>
                    </li>
                  ))}
                </ul> */}
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

      <Modal isVisible={$sessionModal} closeModal={closeModal}>
        <Tabs />
      </Modal>
    </>
  );
};

export default Menu;
