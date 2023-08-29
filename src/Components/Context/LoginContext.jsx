import React, { createContext, useContext, useState,useEffect } from 'react';
 
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const nav=useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoginState === 'true');
  }, [isAuth]);
  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuth(false);
    setIsLoggedIn(false)
    nav('/')
  };

  const value = {
    isAuth,
    login,
    logout,
    isLoggedIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
