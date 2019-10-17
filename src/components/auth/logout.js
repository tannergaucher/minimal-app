import React from 'react'

export default function Logout() {
  return (
    <button
      onClick={e => {
        e.preventDefault()
        localStorage.removeItem('token')
      }}
    >
      Logout
    </button>
  )
}
