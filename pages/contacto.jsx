import { Inter } from '@next/font/google';
import PageLayout from '@/components/PageLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Contacto() {
  return (
    <>
      <PageLayout title="Labranzas | Contacto">
        <h1 className="text-4xl">Formulario de contacto</h1>
      </PageLayout>
    </>
  );
}
