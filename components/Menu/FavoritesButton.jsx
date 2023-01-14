import { useStore } from '@nanostores/react';
import { isFavoritesOpen, favoritesItems } from '../../stores/favorites';
import { Icon } from '@iconify/react';

export default function FavoritesButton() {
  // lee el valor del store con el hook `useStore`
  const $isFavoritesOpen = useStore(isFavoritesOpen);
  // escribe en el store importado usando `.set`
  const $favoritesItems = useStore(favoritesItems);

  return (
    <button
      disabled={$favoritesItems.length === 0}
      onClick={() => isFavoritesOpen.set(!$isFavoritesOpen)}
      className="p-2 relative rounded-full transition duration-300 ease-in-out hover:hover:bg-gray-600"
    >
      <Icon
        className="w-6 text-2xl inline text-gray-100"
        icon="mdi:cards-heart"
      />
      {$favoritesItems.length > 0 && (
        <span className="w-4 bg-purple-500 rounded-full absolute top-0 right-0 text-xs text-gray-100">
          {$favoritesItems.length}
        </span>
      )}
    </button>
  );
}
