// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string,
// };

export default async function handler(req, res) {
  // await res.revalidate('/');
  await res.revalidate;
  res.status(200).json({ revalidate: true });
}
