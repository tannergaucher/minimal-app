import React, { useState, createContext } from 'react'

export const IsAuthContext = createContext()

export default function MyIsAuthContext({ children }) {
  const [isAuth, setIsAuth] = useState(false)

  // do useEffect stuff
  // take token from local storage

  return (
    <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </IsAuthContext.Provider>
  )
}
