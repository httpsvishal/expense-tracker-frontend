import React from 'react'
import AuthComp from '../components/AuthComp'

const SignupPage = () => {
    return (
        <AuthComp
            title='Signup'
            buttonText='Signup'
            onSubmit={(e) => {
                e.preventDefault()
                console.log('Signup')
            }}>
            <input type='text'
                className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4'
                placeholder='Name'  />
            <input type='email'
             className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4'
            placeholder='Email'  />
            <input type='password' placeholder='Password' 
            className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4' />
            <input type='password' placeholder='Confirm Password' 
            className='bg-transparent border w-full border-white text-white rounded-md px-4 py-2 mt-4' 
            />


        </AuthComp>
    )
}

export default SignupPage
