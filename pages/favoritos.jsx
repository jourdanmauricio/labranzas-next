import { useStore } from '@nanostores/react';
import PageLayout from '@/components/PageLayout';
import Menu from '@/components/Menu/Menu';
import MenuMobile from '@/components/Menu/MenuMobile';
import { favoritesItems } from '@/stores/favorites';
import { useEffect, useState } from 'react';
import FavoriteItem from '@/components/Favorites/FavoriteItem';
import { Icon } from '@iconify/react';

const Favoritos = ({ categories }) => {
  const $favoritesItems = useStore(favoritesItems);
  const [favItems, setFavItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [order, setOrder] = useState('Ordenar por');

  const filterFav = favItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.seller_custom_field.toLowerCase().includes(searchText.toLowerCase())
  );

  const oderFav = [].concat(filterFav).sort((a, b) => {
    switch (order) {
      case 'INITIAL':
        return filterFav;
      case 'MIN-VALUE':
        return parseFloat(a.price) - parseFloat(b.price);
      case 'MAX-VALUE':
        return parseFloat(b.price) - parseFloat(a.price);
    }
  });

  useEffect(() => {
    setFavItems($favoritesItems);
  }, [$favoritesItems]);

  return (
    <>
      <PageLayout title="Labranzas | Home">
        <header>
          <MenuMobile />
          <Menu categories={categories} />
        </header>
        <h1 className="pt-10 text-3xl text-gray-800 text-center">Favoritos</h1>

        <section className="p-4 sm:p-10">
          <article className="h-10 p-1 sm:px-3 text-sm text-gray-700 flex items-center justify-between border border-gray-300">
            <p className="hidden sm:inline-block">
              Favoritos {filterFav.length} de {favItems.length}
            </p>
            <div className="flex justify-end items-center relative">
              <input
                className="border border-gray-300 rounded p-1 w-full"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Icon
                icon="mdi:search"
                className="absolute text-lg right-0 w-8 rotate-90"
              />
            </div>
            <div>
              <select
                className="border border-gray-300 bg-white rounded p-1 w-full"
                name="select"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              >
                <option value="INITIAL">Ordenar por</option>
                <option value="MIN-VALUE">Menor precio</option>
                <option value="MAX-VALUE">Mayor precio</option>
              </select>
            </div>
          </article>
          <article className="">
            {oderFav.length > 0 && (
              <ul>
                {oderFav.map((item) => (
                  <FavoriteItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </article>
        </section>
      </PageLayout>
    </>
  );
};

export default Favoritos;

export async function getStaticProps() {
  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/web`
  );
  const categories = await dataCat.json();

  return {
    props: {
      categories,
    },
  };
}
