import { useEffect, useState } from 'react';
import { register, sessionModal, user } from '../../stores/users';
import { useStore } from '@nanostores/react';

const useRegister = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirm, setConfirm] = useState('');
  const [confirmError, setConfirmError] = useState(null);
  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState(false);
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

  const handleSubmit = async () => {
    let error = false;
    if (email.length === 0) {
      setEmailError('Obligatorio');
      error = true;
    }
    if (password.length === 0) {
      setPasswordError('Obligatorio');
      error = true;
    }

    if (!terms) {
      setTermsError(true);
      user.set({
        ...user.get(),
        status: 'ERROR',
        message: 'Debes aceptar términos y condiciones',
      });
    }

    if (error || emailError !== null || passwordError !== null || !terms)
      return;

    register(email, password);
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
    if (name === 'password') {
      setPassword(value);
      if (value.length < 8) {
        setPasswordError('Mínimo 8 caracteres');
        if (confirm && value !== confirm)
          setConfirmError('La confirmación no coincide');
        return;
      }
      if (confirm && value === confirm) setConfirmError(null);

      setPasswordError(null);
    }
    if (name === 'confirm') {
      setConfirm(value);
      if (value !== password) {
        setConfirmError('La confirmación no coincide');
        return;
      }
      setConfirmError(null);
    }
  }

  const handleTerms = () => {
    setTerms(!terms);
    setTermsError(false);
  };

  const closeMessage = () => {
    user.set({ ...user.get(), status: 'SUCCESS', message: '' });
  };

  return {
    userSession,
    email,
    password,
    confirm,
    terms,
    emailError,
    termsError,
    passwordError,
    confirmError,
    handleChange,
    handleTerms,
    handleSubmit,
    closeMessage,
  };
};

export default useRegister;
