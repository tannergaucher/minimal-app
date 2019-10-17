import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { LoginPage, SignupPage, IndexPage } from '../pages'

const StyledMain = styled.main`
  margin: 0 0.5rem;
  min-height: 100vh;
`

export default function Main() {
  return (
    <StyledMain>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </StyledMain>
  )
}
