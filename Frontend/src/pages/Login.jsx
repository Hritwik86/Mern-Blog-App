import React from 'react';
import { useAuthPart } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { logIn, user, isAuthenticated } = useAuthPart();
  const navigatingPart = useNavigate();

  const handlingLogin = () => {
    logIn({
      id: 1,
      name: 'Hritwik',
    });
    navigatingPart('/dashboard');
  };
  console.log('LogIn Page');
  console.log('User:', user);
  console.log('Authenticated:', isAuthenticated);
  return (
    // <div>Login Page</div>
    <>
      <button onClick={handlingLogin} className="bg-blue-600 text-white">
        Fake Log in Babes
      </button>
    </>
  );
};

export default Login;
