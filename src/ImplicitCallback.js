import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import useAuth from './useAuth';


const ImplicitCallback = () => {
  const { authenticated, handleAuthentication } = useAuth();

  useEffect(() => {
    handleAuthentication();
  }, [handleAuthentication]);

  if (authenticated) {

    const location = JSON.parse(localStorage.getItem("securePath")) || "/"
    localStorage.removeItem("securePath");

    return <Redirect to={location} />;
  }

  return <p>Logging in ... </p>;
};


export default ImplicitCallback;
