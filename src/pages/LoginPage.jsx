import React, { useState } from 'react'
import AuthComp from '../components/AuthComp'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <AuthComp 
        title='Login'
        buttonText='Login'
        onSubmit={(e) => {
            e.preventDefault()
            console.log('Login')
        }}
        formData={{email, password}}
    >
        <input type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
             className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4'
            placeholder='Email'  />
            <input type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' 
            className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4' />
    </AuthComp>
  )
}

export default LoginPage
