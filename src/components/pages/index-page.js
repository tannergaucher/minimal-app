import React, { useContext } from 'react'

import { StyledPage } from '../styles'
import { UserContext } from '../context'

export default function IndexPage() {
  const { loading, user } = useContext(UserContext)

  return (
    <StyledPage>
      <h1>Index Page</h1>
      {loading && <h3>Loading user...</h3>}
      {user && <h3>Hi {user.email}</h3>}
      {!loading && !user && <h3>No Authed User</h3>}
    </StyledPage>
  )
}
