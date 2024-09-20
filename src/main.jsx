import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProfileFinder from './Components/index.jsx'
import GithubProfileFinder from './Components/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GithubProfileFinder />
  </React.StrictMode>,
)
