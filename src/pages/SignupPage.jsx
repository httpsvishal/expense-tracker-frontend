import React, { useState } from 'react'
import AuthComp from '../components/AuthComp'

const SignupPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const formData = {
        name,
        email,
        password,
    }

    return (
        <AuthComp
            title='Signup'
            buttonText='Signup'
            onSubmit={(e) => {
                e.preventDefault()
                console.log('Signup')
            }}
            formData={formData}
            >
            <input type='text'
                className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <input type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4'
                placeholder='Email'  
                />
            <input 
                type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' 
                className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4' />
            <input type='password' placeholder='Confirm Password' 
            className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4' 
            />


        </AuthComp>
    )
}

export default SignupPage
