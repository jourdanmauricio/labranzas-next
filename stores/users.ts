import { persistentAtom } from '@nanostores/persistent';

export type User = {
  id: number | null;
  email: string;
  token: string;
  role: string;
};

const initialState = {
  id: null,
  email: '',
  token: '',
  role: '',
};

export const favoritesItems = persistentAtom<User>('User:', initialState, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const register = async (email: string, password: string) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email, password, role: 'customer' }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/users`);
  const user = await data.json();

  console.log('user', user);
};
