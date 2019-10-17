import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/user-context'
import { IsAuthContext } from '../context/is-auth-context'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)
  const { setIsAuth } = useContext(IsAuthContext)

  const history = useHistory()

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        const res = await fetch(`/.netlify/functions/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })

        const { data } = await res.json()

        localStorage.setItem('token', data.token)
        setUser(data.user)
        setIsAuth(true)
        history.push(`/`)
      }}
    >
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Log In</button>
    </form>
  )
}
