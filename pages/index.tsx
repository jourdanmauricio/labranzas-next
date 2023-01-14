import { Inter } from '@next/font/google';
import PageLayout from '@/components/PageLayout';
import { FC } from 'react';
import { useEffect, useState } from 'react';
import Divider from '@/components/Divider';
import ProductCard from '@/components/ProductCard';
import Menu from '@/components/Menu/Menu';
import MenuMobile from '@/components/Menu/MenuMobile';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] });

interface productsFeatures {
  id: number;
  prod_id: number;
  new_product: string;
  featured: string;
  best_sellers: string;
  trend: string;
  price: number;
  available_quantity: number;
  title: string;
  thumbnail: string;
  seller_custom_field: string;
}

interface MyProps {
  newProducts: productsFeatures[];
  bestSellers: productsFeatures[];
  featured: productsFeatures[];
  trend: productsFeatures[];
}

const Home: FC<MyProps> = ({ newProducts, bestSellers, featured, trend }) => {
  // export default function Home({ newProds, bestSellers, featured, trend }) {
  // const [newProducts, setNewProducts] = useState([]);
  // const [bestSellers, setBestSellers] = useState([]);
  // const [featured, setFeatured] = useState([]);
  // const [trend, setTrend] = useState([]);

  // const fetchdata = async () => {
  //   const data = await fetch(
  //     `${process.env.NEXT_PUBLIC_BACKEND_API}/productsweb`
  //   );
  //   const products = await data.json();
  //   console.log(products);

  //   const newProds = products.filter(
  //     (prod: productsFeatures) => prod.new_product === '1'
  //   );
  //   setNewProducts(newProds);

  //   const bestSellers = products.filter(
  //     (prod: productsFeatures) => prod.best_sellers === '1'
  //   );
  //   setBestSellers(bestSellers);

  //   const featured = products.filter(
  //     (prod: productsFeatures) => prod.featured === '1'
  //   );
  //   setFeatured(featured);

  //   const trend = products.filter(
  //     (prod: productsFeatures) => prod.trend === '1'
  //   );
  //   setTrend(trend);
  // };

  // useEffect(() => {
  //   fetchdata();
  // }, []);
  return (
    <>
      <PageLayout title="Labranzas | Home">
        <MenuMobile />
        <Hero />
        <Menu />

        <h1 className="mt-16 text-2xl font-semibold text-center text-gray-900">
          Labranzas Tienda Online
        </h1>

        <h2 className="pt-2 text-xl text-center text-gray-900">
          Decoración para el hogar e insumos para eventos
        </h2>

        {newProducts.length > 0 && (
          <section className="py-16">
            <Divider text="Últimas publicaciones" />

            <div className="text-center p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-16 place-items-center">
              {newProducts.map((product: productsFeatures) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        <section className="py-16 bg-white">
          <article className="w-3/4 flex flex-col gap-6 items-center justify-center mx-auto">
            <h2 className="text-xl font-medium">Decoración para el hogar</h2>
            <p>
              Cumpleaños de 15, casamientos, eventos empresariales, regalos fin
              de año, etc. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Magnam facilis assumenda, dolores quo atque iusto sapiente
              ullam itaque nam ducimus dicta suscipit delectus dignissimos eos
              quas alias, consequuntur et a.
            </p>
            <ul>
              <li>Centros de mesa</li>
              <li>Souvenirs</li>
              <li>Caminos de mesa</li>
              <li>Decoración del salón</li>
            </ul>
            <button className="py-2 px-20 border-2 bg-white hover:bg-purple-200 border-purple-600 text-purple-600 transition ease-in-out delay-150">
              Ver productos
            </button>
          </article>
        </section>

        {bestSellers.length > 0 && (
          <section className="py-16">
            <Divider text="Más vendidos" />

            <div className="text-center p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-16 place-items-center">
              {bestSellers.map((product: productsFeatures) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
        <section className="py-16 bg-white">
          <article className="w-3/4 flex flex-col gap-6 items-center justify-center mx-auto">
            <h2 className="text-xl font-medium">Insumos para eventos</h2>
            <p>
              Cumpleaños de 15, casamientos, eventos empresariales, regalos fin
              de año, etc. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Magnam facilis assumenda, dolores quo atque iusto sapiente
              ullam itaque nam ducimus dicta suscipit delectus dignissimos eos
              quas alias, consequuntur et a.
            </p>
            <ul>
              <li>Centros de mesa</li>
              <li>Souvenirs</li>
              <li>Caminos de mesa</li>
              <li>Decoración del salón</li>
            </ul>
            <button className="py-2 px-20 border-2 bg-white hover:bg-purple-200 border-purple-600 text-purple-600 transition ease-in-out delay-150">
              Ver productos
            </button>
          </article>
        </section>

        {featured.length > 0 && (
          <section className="py-16">
            <Divider text="Destacados" />
            <div className="text-center p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-16 place-items-center">
              {featured.map((product: productsFeatures) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {trend.length > 0 && (
          <section className="py-16">
            <Divider text="Tendencia" />
            <div className="text-center p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-16 place-items-center">
              {trend.map((product: productsFeatures) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </PageLayout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/productsweb`
  );
  const products = await data.json();

  const newProducts = products.filter(
    (prod: productsFeatures) => prod.new_product === '1'
  );

  const bestSellers = products.filter(
    (prod: productsFeatures) => prod.best_sellers === '1'
  );

  const featured = products.filter(
    (prod: productsFeatures) => prod.featured === '1'
  );

  const trend = products.filter((prod: productsFeatures) => prod.trend === '1');

  return {
    props: {
      newProducts,
      bestSellers,
      featured,
      trend,
    },
  };
}
