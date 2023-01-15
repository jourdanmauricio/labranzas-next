import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Labranzas | Producto</title>
      </Head>
      <h1 className="text-4xl">Este es el producto ...</h1>
    </>
  );
}
