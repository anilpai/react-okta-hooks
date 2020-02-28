import React from 'react'
import useAuth from '../../useAuth'

const LogoutButton = () => {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout('/landing')
  }

  return <button type="button" onClick={handleLogout}>Logout</button>
}

export default LogoutButton