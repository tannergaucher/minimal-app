import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h3>Minimal App</h3>
      </Link>
    </header>
  )
}
