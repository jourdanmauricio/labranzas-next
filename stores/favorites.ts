// import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

// export const isFavoritesOpen = atom(false);
export const isFavoritesOpen = persistentAtom<boolean>(
  'isFavoritesOpen:',
  false,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export type FavoriteItem = {
  id: number;
  seller_custom_field: string;
  title: string;
  price: number;
  thumbnail: string;
};

// export const favoritesItems = atom<FavoriteItem[]>([]);

export const favoritesItems = persistentAtom<FavoriteItem[]>(
  'favoritesItems:',
  [],
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export const isFavorite = (id: number) => {
  const found = favoritesItems.get().find((fav: FavoriteItem) => fav.id === id);
  return found ? true : false;
};

export function addFavoriteItem(favorite: FavoriteItem) {
  favoritesItems.set([...favoritesItems.get(), favorite]);
  console.log('Store', favoritesItems);
}

export function removeFavoriteItem(id: number) {
  favoritesItems.set(favoritesItems.get().filter((fav) => fav.id !== id));
}
