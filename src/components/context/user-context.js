import React, { useState, createContext, useLayoutEffect } from 'react'

export const UserContext = createContext()

export default function MyUserContext({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // becuase useEffect causes UI to flicker
  useLayoutEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token')
    token ? fetchUser(token) : setLoading(false)

    async function fetchUser(token) {
      try {
        const res = await fetch(`/.netlify/functions/get-user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
          }),
        })

        const { data } = await res.json()
        setUser(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}
