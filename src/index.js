import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './app.scss'
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
