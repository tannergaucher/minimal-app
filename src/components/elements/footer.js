import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0 0.5rem;
`

export default function Footer() {
  return (
    <StyledFooter>
      <Link to="/">
        <h3>Minimal App</h3>
      </Link>
    </StyledFooter>
  )
}
