import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Homepage from './pages/homepage'

function App() {

  return (
    <div className='m-0 p-0 font-serif '>
    <Router>
      <Routes>
        <Route path = '/' element={<SignupPage />} />
        <Route path = '/login' element={<LoginPage />} />
        <Route path = '/home' element={<Homepage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
