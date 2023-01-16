import { useStore } from '@nanostores/react';
import {
  isFavoritesOpen,
  favoritesItems,
  removeFavoriteItem,
} from '@/stores/favorites';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FavoritesFlyout() {
  const $isFavoritesOpen = useStore(isFavoritesOpen);
  const $favoritesItems = useStore(favoritesItems);
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    setFavItems($favoritesItems);
  }, [$favoritesItems]);

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
      <Link
        onClick={() => isFavoritesOpen.set(false)}
        href="/favoritos"
        className="absolute tracking-wider text-xs top-2 left-2 cursor-pointer p-1 rounded-md text-gray-700  hover:bg-gray-100"
      >
        Ver detalle
      </Link>

      <button
        onClick={() => isFavoritesOpen.set(false)}
        className="absolute text-xs top-2 right-2 cursor-pointer p-1 rounded-md text-gray-700  hover:bg-gray-100"
      >
        <span className="tracking-wider">Cerrar</span>
      </button>

      <h2 className="text-center text-xl text-gray-800">Favoritos</h2>
      {/* <button
        onClick={() => isFavoritesOpen.set(false)}
        className="absolute text-xs top-2 right-2 cursor-pointer p-1 rounded-md text-gray-700  hover:bg-gray-100"
      >
        Cerrar
      </button> */}
      <hr className="mt-4" />
      {favItems.length > 0 && (
        <ul>
          {favItems.map((item) => (
            <li key={item.id} className="text-sm flex gap-2 border-b-2 py-2">
              <Image
                width={56}
                height={56}
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
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
