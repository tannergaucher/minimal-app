import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Header, Footer, Main } from '../elements'

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}

export default App
