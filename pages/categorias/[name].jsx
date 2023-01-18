import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import Menu from '@/components/Menu/Menu';
import MenuMobile from '@/components/Menu/MenuMobile';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Category = ({ products, categories, catName }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout>
      <MenuMobile categories={categories}></MenuMobile>
      <Menu categories={categories}></Menu>

      {categories && (
        <div className="flex">
          <aside className="hidden sm:block min-w-max border-r">
            <nav>
              <ul>
                <li className="my-6 border-t border-b  text-center">
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
                      className="px-6 py-2 block"
                      href={`/categorias/${cat.name}`}
                    >
                      {cat.name} ({cat.cantidad})
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <section className="py-2">
            <div className="text-center p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-16 place-items-center">
              {products.map((product) => (
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
