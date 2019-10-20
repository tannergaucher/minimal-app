import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Logout } from '../auth'
import { IsAuthContext } from '../context'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`

export default function Header() {
  const { isAuth } = useContext(IsAuthContext)

  return (
    <StyledHeader>
      <Link to="/">
        <h3>Minimal App</h3>
      </Link>
      {isAuth ? <Logout /> : <Link to="/login">Login</Link>}
    </StyledHeader>
  )
}
