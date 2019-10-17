import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/elements'
import * as serviceWorker from './serviceWorker'

import UserProvider from '../src/components/context/user-context'
import IsAuthProvider from '../src/components/context/is-auth-context'

ReactDOM.render(
  <IsAuthProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </IsAuthProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
