import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import HomePage from './pages/home/HomePage.js'
import About from './pages/about/About.js'

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root_home'),
)

ReactDOM.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
  document.getElementById('root_about'),
)
