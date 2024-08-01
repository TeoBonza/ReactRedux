import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloUsers from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelloUsers names={['Admin', 'John']} />
  </React.StrictMode>,
)
