import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Labranzas | Producto</title>
      </Head>
      <main className={styles.main}>
        <h1 className="text-4xl">Este es el producto ...</h1>
      </main>
    </>
  );
}
