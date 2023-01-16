import { useEffect, useState } from 'react';
import { forgotPassword, login, sessionModal, user } from '@/stores/users';
import { useStore } from '@nanostores/react';

const useLogin = () => {
  const [action, setAction] = useState('LOGIN');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [emailForgot, setEmailForgot] = useState('');
  const [emailForgotError, setEmailForgotError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [userSession, setUserSession] = useState({
    user: null,
    status: 'SUCCESS',
    message: '',
  });

  const $user = useStore(user);

  useEffect(() => {
    setUserSession($user);
    if (userSession.user) {
      sessionModal.set(false);
    }
  }, [$user, userSession.user]);

  const handleSubmit = () => {
    let error = false;
    if (email.length === 0) {
      setEmailError('Obligatorio');
      error = true;
    }
    if (password.length === 0) {
      setPasswordError('Obligatorio');
      error = true;
    }

    if (error || emailError !== null || passwordError !== null) return;

    login(email, password);
  };

  const handleForgot = async () => {
    if (emailForgot.length === 0) {
      setEmailForgotError('Obligatorio');
      return;
    }

    await forgotPassword(emailForgot);
  };

  function handleChange(name, value) {
    if (name === 'email') {
      const pattern =
        '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$';
      setEmail(value);
      let regex = new RegExp(pattern);
      regex.exec(value) === null
        ? setEmailError('Ingresa un email válido')
        : setEmailError(null);
    }
    if (name === 'emailForgot') {
      const pattern =
        '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$';
      setEmailForgot(value);
      let regex = new RegExp(pattern);
      regex.exec(value) === null
        ? setEmailForgotError('Ingresa un email válido')
        : setEmailForgotError(null);
    }

    if (name === 'password') {
      setPassword(value);
      if (value.length < 8) {
        setPasswordError('Mínimo 8 caracteres');
        return;
      }
      setPasswordError(null);
    }
  }

  const closeMessage = () => {
    console.log('closeMessage');
    user.set({ ...user.get(), status: 'SUCCESS', message: '' });
  };

  return {
    userSession,
    action,
    setAction,
    email,
    password,
    emailForgot,
    emailError,
    passwordError,
    emailForgotError,
    closeMessage,
    handleChange,
    handleForgot,
    handleSubmit,
  };
};

export default useLogin;
