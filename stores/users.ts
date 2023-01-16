import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export type User = {
  id: number | null;
  email: string;
  token: string;
  role: string;
};

export type UserState = {
  user: User | null;
  status: string;
  message: string;
};
const initialState = {
  user: null,
  status: 'SUCCESS',
  message: '',
};

export const user = persistentAtom<UserState>('User:', initialState, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const sessionModal = atom(false);

export const register = async (email: string, password: string) => {
  try {
    user.set({
      user: null,
      status: 'LOADING',
      message: '',
    });

    const options = {
      method: 'POST',
      body: JSON.stringify({ email, password, role: 'customer' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/users`,
      options
    );
    const { newUser, token } = await data.json();

    if (data.status === 409) throw 'El email ya se encuentra registrado';
    if (data.status !== 201) throw 'Error creando el usuario';

    user.set({
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
        token,
      },
      status: 'SUCCCESS',
      message: '',
    });
  } catch (err) {
    user.set({
      user: null,
      status: 'FAILED',
      message: err as string,
    });
  }
};

export const login = async (email: string, password: string) => {
  try {
    user.set({
      user: null,
      status: 'LOADING',
      message: '',
    });

    const options = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`,
      options
    );
    const { access_token } = await data.json();

    if (data.status !== 200)
      throw 'Credenciales incorrectas. Verifique usuario y contraseña';

    const optionsProfile = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    };

    const data2 = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/users/profile`,
      optionsProfile
    );
    const userData = await data2.json();

    user.set({
      user: {
        id: userData.id,
        email: userData.email,
        role: userData.role,
        token: access_token,
      },
      status: 'SUCCCESS',
      message: '',
    });
  } catch (err) {
    user.set({
      user: null,
      status: 'FAILED',
      message: err as string,
    });
  }
};

export const forgotPassword = async (email: string) => {
  user.set({
    user: null,
    status: 'LOADING',
    message: '',
  });
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/recovery`,
      options
    );
    const resRecovery = await data.json();

    if (data.status !== 200) throw 'Verifica el email ingresado';

    user.set({
      user: null,
      status: 'SUCCCESS',
      message:
        'Email enviado!. Sigue las instrucciones para generar la contraseña.',
    });
  } catch (err) {
    user.set({
      user: null,
      status: 'FAILED',
      message: err as string,
    });
  }
};

export const recoveryPassword = async (newPassword: string, token: string) => {
  user.set({
    user: null,
    status: 'LOADING',
    message: '',
  });
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({ newPassword, token }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/change-password`,
      options
    );
    const changePass = await data.json();

    if (data.status !== 200) throw 'Error generando el password';

    user.set({
      user: null,
      status: 'SUCCESS',
      message: 'Password generado correctamente',
    });

    return 'PASSWORD-CHANGED';
  } catch (err) {
    user.set({
      user: null,
      status: 'FAILED',
      message: err as string,
    });
  }
};

export const logout = () => {
  user.set(initialState);
};
