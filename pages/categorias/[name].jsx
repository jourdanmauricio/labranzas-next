import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import Menu from '@/components/Menu/Menu';
import MenuMobile from '@/components/Menu/MenuMobile';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchFilterOrder from '../../components/SearchFilterOrder';
import { useState } from 'react';

const Category = ({ products = [], categories, catName }) => {
  const router = useRouter();
  const [order, setOrder] = useState('Ordenar por');
  const [searchText, setSearchText] = useState('');
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const filterProducts = products.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.seller_custom_field.toLowerCase().includes(searchText.toLowerCase())
  );

  const orderProducts = [].concat(filterProducts).sort((a, b) => {
    switch (order) {
      case 'INITIAL':
        return filterProducts;
      case 'MIN-VALUE':
        return parseFloat(a.price) - parseFloat(b.price);
      case 'MAX-VALUE':
        return parseFloat(b.price) - parseFloat(a.price);
    }
  });

  return (
    <PageLayout>
      <MenuMobile categories={categories}></MenuMobile>
      <Menu categories={categories}></Menu>

      {categories && (
        <div className="flex px-2">
          <aside className="hidden text-sm tracking-wider sm:block max-w-[240px] border-r">
            {/* min-w-max */}
            <nav>
              <ul>
                <li className="h-12 my-4 border-t border-b flex justify-center items-center  border-gray-300">
                  <span className="text-xl ">Categorías</span>
                </li>
                {categories.map((cat) => (
                  <li
                    key={cat.name}
                    className={`hover:bg-gray-300 transition duration-300 ease-in-out ${
                      cat.name === catName ? 'underline' : ''
                    }`}
                  >
                    <Link
                      className="p-2 block"
                      href={`/categorias/${cat.name}`}
                    >
                      {cat.name} ({cat.cantidad})
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <section className="py-4 w-full">
            <SearchFilterOrder
              searchText={searchText}
              setSearchText={setSearchText}
              order={order}
              setOrder={setOrder}
              total={products.length}
              partial={filterProducts.length}
              feature={catName}
            />

            <div className="text-center p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 place-items-center">
              {orderProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      )}
    </PageLayout>
  );
};

export default Category;

export async function getCategory(name) {
  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/categoryweb/${name}`
  );
  const category = await dataCat.json();

  return category;
}

export async function getStaticProps({ params }) {
  const products = await getCategory(params.name);

  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/web`
  );
  const categories = await dataCat.json();
  return {
    props: {
      products,
      categories,
      catName: params.name,
    },
  };
}

export async function getCategories() {
  const dataCat = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/web`
  );
  const categories = await dataCat.json();

  return categories.map((cat) => {
    return {
      params: {
        name: cat.name,
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = await getCategories();
  return {
    paths,
    fallback: true,
  };
}
