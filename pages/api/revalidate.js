// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string,
// };

export default async function handler(req, res) {
  if (req.headers['revalidate'] === process.env.REVALIDATE_TOKEN) {
    await res.revalidate('/');

    const dataCat = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/web`
    );
    const categories = await dataCat.json();

    Promise.all(
      categories.map(async (path) => {
        await res.revalidate(`/categorias/${path.name}`);
      })
    );

    res.status(200).json({ revalidate: true });
  } else {
    return res.status(401).end();
  }
}
