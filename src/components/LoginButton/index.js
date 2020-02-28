import React from 'react'
import useAuth from '../../useAuth'

const LoginButton = () => {
  const { login, auth } = useAuth()

  const handleLogin = () => {
    localStorage.setItem(
      "securePath",
      JSON.stringify(auth._history.location.pathname)
    );
    login('/');
  }

  return <button type="button" onClick={handleLogin}>LogIn</button>
}

export default LoginButton