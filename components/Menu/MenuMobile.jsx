import { useStore } from '@nanostores/react';
import { sessionModal, user } from '@/stores/users';
import { Icon } from '@iconify/react';
import FavoritesButton from './FavoritesButton';
import FavoritesFlyout from '../Favorites/FavoritesFlyout';
import SessionButton from './SessionButton';
import Link from 'next/link';
import Modal from '../Modal/Modal';
import Tabs from '../auth/Tabs';
import { useEffect, useRef, useState } from 'react';

const MenuMobile = ({ categories }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const btnMenuRef = useRef();

  const $sessionModal = useStore(sessionModal);

  const closeModal = () => {
    sessionModal.set(false);
    user.set({ ...user.get(), status: 'SUCCESS', message: '' });
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (!btnMenuRef.current.contains(e.target)) {
        setIsOpenMenu(false);
      }
    };

    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <>
      <header className="sticky z-50 top-0 w-full h-12 bg-gray-700 bg-opacity-95 lg:hidden flex justify-between items-center px-5">
        <button
          ref={btnMenuRef}
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="p-2 relative rounded-full transition duration-300 ease-in-out hover:hover:bg-gray-600"
        >
          <Icon
            id="menu"
            className="text-gray-100 w-6 text-2xl hover:cursor-pointer"
            icon="mdi:menu"
          />
        </button>
        <span className="text-gray-100 text-xl sm:text-3xl">Lab</span>

        <div>
          <SessionButton />
          <FavoritesButton />
          <button className="p-2 rounded-full transition duration-300 ease-in-out hover:hover:bg-gray-600">
            <Icon
              className="w-6 inline text-gray-100"
              icon="mdi:cart-outline"
            />
          </button>
        </div>
        <nav
          id="menu-container"
          className={`transition duration-300 ease-in-out origin-top-left bg-gray-700 text-gray-100 absolute top-12 -left-0 ${
            isOpenMenu ? 'scale-100' : 'scale-0'
          }`}
        >
          <ul>
            <li className="hover:bg-gray-600 transition duration-300 ease-in-out">
              <Link className="px-6 py-3 block" href="/">
                Inicio
              </Link>
            </li>
            {categories.map((cat) => (
              <li
                key={cat.name}
                className="hover:bg-gray-600 transition duration-300 ease-in-out"
              >
                <Link
                  className="px-6 py-3 block"
                  href={`/categorias/${cat.name}`}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            {/* <li className="hover:bg-gray-600 transition duration-300 ease-in-out">
              <Link className="px-6 py-3 block" href="#">
                Centros de mesa
              </Link>
            </li>
            <li className=" hover:bg-gray-600 transition duration-300 ease-in-out">
              <Link className="px-6 py-3 block" href="#">
                Souvenirs
              </Link>
            </li>
            <li className="hover:bg-gray-600 transition duration-300 ease-in-out">
              <Link className="px-6 py-3 block" href="#">
                Hogar
              </Link>
            </li> */}
            <li className=" hover:bg-gray-600 transition duration-300 ease-in-out">
              <Link className="px-6 py-3 block" href="#">
                Contacto
              </Link>
            </li>
            <li className=" hover:bg-gray-600 transition duration-300 ease-in-out">
              <Link className="px-6 py-3 block" href="#">
                Cómo comprar?
              </Link>
            </li>
          </ul>
        </nav>
        <FavoritesFlyout />
      </header>
      <Modal isVisible={$sessionModal} closeModal={closeModal}>
        <Tabs />
      </Modal>
    </>
  );
};

export default MenuMobile;
