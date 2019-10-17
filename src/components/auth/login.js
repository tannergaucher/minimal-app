import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        // set data.user to user context
        // navigate to index page
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
