import { useStore } from '@nanostores/react';
import {
  isFavoritesOpen,
  favoritesItems,
  removeFavoriteItem,
} from '../stores/favorites';
import Image from 'next/image';

export default function FavoritesFlyout() {
  const $isFavoritesOpen = useStore(isFavoritesOpen);
  const $favoritesItems = useStore(favoritesItems);

  const handleDelete = (id) => {
    removeFavoriteItem(id);
    if ($favoritesItems.length <= 1) isFavoritesOpen.set(false);
  };

  return (
    <aside
      className={`absolute p-6 bg-gray-50 top-12 lg:top-14 right-0 border-2 h-screen overflow-y-auto transition duration-300 ease-in-out origin-top-right ${
        $isFavoritesOpen ? 'scale-100' : 'scale-0'
      }`}
    >
      <h2 className="text-center text-xl text-gray-800">Favoritos</h2>
      <button
        onClick={() => isFavoritesOpen.set(false)}
        className="absolute text-xs top-2 right-2 cursor-pointer p-1 rounded-md text-gray-700  hover:bg-gray-100"
      >
        Cerrar
      </button>
      <hr />
      {favoritesItems.length > 0 &&
        $favoritesItems.map((item) => (
          <div key={item.id} className="text-sm flex gap-2 border-b-2">
            <Image
              width={56}
              height={56}
              className="w-14"
              src={item.thumbnail}
              alt={item.thumbnail}
            />
            <div className="w-full flex flex-col justify-between">
              <p>{item.title}</p>
              <div className="flex justify-between text-gray-800">
                <p>{item.seller_custom_field}</p>
                <p>${item.price}</p>
                <span
                  onClick={(e) => handleDelete(item.id)}
                  className="text-xs cursor-pointer p-1 rounded-md text-red-500  hover:bg-red-50"
                >
                  Borrar
                </span>
              </div>
            </div>
          </div>
        ))}
    </aside>
  );
}
