import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import HomePage from './pages/home/HomePage.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root'),
)
