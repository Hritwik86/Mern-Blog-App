import React, { createContext, useContext, useState } from 'react';

const AuthContextPart = createContext();

export const AuthProvider = ({ children }) => {
  // const[user,setUser] = useState(null);
  const [user, setUser] = useState(() => {
    const savingUser = localStorage.getItem('user');

    return savingUser ? JSON.parse(savingUser) : null;
  });
  const isAuthenticated = !!user;

  const logIn = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContextPart.Provider
      value={{
        user,
        isAuthenticated,
        logIn,
        logout,
      }}
    >
      {' '}
      {children}
    </AuthContextPart.Provider>
  );
};

export const useAuthPart = () => {
  return useContext(AuthContextPart);
};
