import { Icon } from '@iconify/react';
import FavoritesButton from './FavoritesButton';
import FavoritesFlyout from '../FavoritesFlyout';
import SessionButton from './SessionButton';

const MenuMobile = () => {
  return (
    <header className="sticky z-50 top-0 w-full h-12 bg-gray-700 bg-opacity-95 lg:hidden flex justify-between items-center px-5">
      <Icon
        id="menu"
        className="text-gray-100 w-8 hover:cursor-pointer"
        icon="mdi:menu"
      />
      <span className="text-gray-100 text-xl sm:text-3xl">Lab</span>

      <div>
        <SessionButton />
        <FavoritesButton />
        <button className="p-2 rounded-full transition duration-300 ease-in-out hover:hover:bg-gray-600">
          <Icon className="w-6 inline text-gray-100" icon="mdi:cart-outline" />
        </button>
      </div>
      <nav
        id="menu-container"
        className="scale-0 transition duration-300 ease-in-out origin-top-left bg-gray-700 text-gray-100 absolute top-12 -left-0"
      >
        <ul>
          <li className="px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out">
            <a href="#">Inicio</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out">
            <a href="#">Centros de mesa</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out">
            <a href="#">Souvenirs</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out">
            <a href="#">Hogar</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out">
            <a href="#">Contacto</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-600 transition duration-300 ease-in-out">
            <a href="#">Cómo comprar?</a>
          </li>
        </ul>
      </nav>
      <FavoritesFlyout />
    </header>
  );
};

export default MenuMobile;

{
  /* <script is:inline>
  const menu = document.getElementById('menu');
  const containerMenu = document.getElementById('menu-container');
  menu.addEventListener('click', () => {
    if (containerMenu.classNameList.contains('scale-100')) {
      containerMenu.classNameList.remove('scale-100');
      containerMenu.classNameList.add('scale-0');
    } else {
      containerMenu.classNameList.add('scale-100');
      containerMenu.classNameList.remove('scale-0');
    }
  });
  window.addEventListener('click', function (e) {
    e.preventDefault();
    if (!containerMenu.contains(e.target) && !menu.contains(e.target)) {
      if (containerMenu.classNameList.contains('scale-100')) {
        containerMenu.classNameList.remove('scale-100');
        containerMenu.classNameList.add('scale-0');
      }
    }
  });
</script> */
}
