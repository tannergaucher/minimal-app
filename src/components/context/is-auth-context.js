import React, { useState, createContext, useLayoutEffect } from 'react'

export default function MyIsAuthContext({ children }) {
  const [isAuth, setIsAuth] = useState(false)

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setIsAuth(true)
    }
  }, [])

  return (
    <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </IsAuthContext.Provider>
  )
}

export const IsAuthContext = createContext()
