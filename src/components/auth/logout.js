import React, { useContext } from 'react'

import { IsAuthContext } from '../context/is-auth-context'

export default function Logout() {
  const { setIsAuth } = useContext(IsAuthContext)

  return (
    <button
      onClick={e => {
        e.preventDefault()
        localStorage.removeItem('token')
        setIsAuth(false)
      }}
    >
      Logout
    </button>
  )
}
