import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    Axios.get('api/auth/user_data').then((response) => {
      if (response.data.email) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  };

  const logout = async () => {
    Axios.get('/api/auth/logout')
      .then(() => {
        setIsAuth(false);
        return <Redirect to="/login" />;
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setCurrentUser,
        currentUser,
        setIsAuth,
        checkAuth,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
