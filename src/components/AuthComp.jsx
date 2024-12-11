import React from 'react'
import ContinueWithGoogleButton from './ContinueWithGoogleButton.jsx'
import './GoogleButtonCss.css'
import { useGoogleLogin } from '@react-oauth/google';
import Juggler from './Juggler';

const AuthComp = ({ title, buttonText, onSubmit, children }) => {
    
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            // Send the token to your backend
            const response = await fetch('http://localhost:5000/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: tokenResponse.credential }),
            });

            const data = await response.json();
            console.log(data);
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });
    return (
        <div className='h-[100vh] bg-[url(src/assets/background.jpg)] p-10 bg-cover bg-left-bottom flex justify-end '>
            <Juggler />
            <div className='w-full flex justify-end md:w-1/2 p-4 ps-10 h-full'>
                <div className='flex w-4/5 flex-col gap-4 justify-center items-start h-full'>
                    <h1 className='text-5xl font-bold text-white'>{title}</h1>
                    <h2 className='text-sm w-2/3 tracking-wider text-[#a9a9a9]'>Money Monitor is an intuitive expense tracker app that helps you manage your finances
                        effortlessly by providing real-time insights into your spending and
                        savings.</h2>
                    <form onSubmit={onSubmit} className='flex w-1/2 flex-col items-center'>
                        {children}
                        <button className='bg-white w-full border rounded-3xl text-black px-4 py-2 mt-4'>{buttonText}</button>
                    </form>
                    <div className='w-1/2'>
                        <button className='bg-white w-1/2 text-black px-4 py-2 mt-4 gsi-material-button' onClick={login}>
                            <ContinueWithGoogleButton />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthComp
