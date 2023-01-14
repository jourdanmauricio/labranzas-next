import Head from 'next/head';
import { FC } from 'react';
import Footer from './Footer/Footer';

interface MyProps {
  title?: string;
  children: React.ReactNode;
}

const PageLayout: FC<MyProps> = ({ children, title = 'Labranzas' }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Labranzas - Tienda de insumos para eventos y decoración para el hogar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
