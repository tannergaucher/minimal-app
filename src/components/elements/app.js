import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header, Footer } from '../elements'
import { IndexPage, LoginPage, SignupPage } from '../pages'

import { UserProvider } from '../context/user-context'

function App() {
  return (
    <UserProvider value={null}>
      <Router>
        <div className="App">
          <Header />
          <main>
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
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
