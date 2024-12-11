import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <div className='m-0 p-0 font-serif '>
    <Router>
      <Routes>
        <Route path = '/' element={<SignupPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
