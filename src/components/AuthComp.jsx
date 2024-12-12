import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContinueWithGoogleButton from './ContinueWithGoogleButton.jsx';
import './GoogleButtonCss.css';
import { useGoogleLogin } from '@react-oauth/google';
import Juggler from './Juggler';
import background from '../assets/background.jpg';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, signup } from '../apis/apis.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;


const AuthComp = ({ title, buttonText, onSubmit, children,formData }) => {

    const navigate = useNavigate();
    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            // Send the token to your backend
            const response = await fetch(`${API_URL}/auth/google`, {
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

    const handleAuth = () => {
        
        if (buttonText === 'Signup') {
            navigate('/login');
        } else {
            navigate('/');
        }
    }

    const queryClient = useQueryClient();
    const mutationSignup = useMutation({
        mutationFn: signup,
        onMutate: () => {
            // Show loading toast and store the toastId
            const toastId = toast.loading('Signing up...');
            return { toastId };
        },
        onSuccess: (data, variables, context) => {
            // Update the toast with success message
            toast.dismiss(context.toastId);
            toast.success('Signup successful');
            queryClient.invalidateQueries({
                queryKey: ['user'],
                exact: true,
            });
        },
        onError: (error, variables, context,data) => {
            // Update the toast with error message
            console.log("hey");
            toast.dismiss(context.toastId);
            console.log(error);
            toast.error(error.message);
        }
    })

    const mutationLogin = useMutation({
        mutationFn: login,
        onMutate: () => {
            // Show loading toast and store the toastId
            const toastId = toast.loading('Logging in...');
            return { toastId };
        },
        onSuccess: (data, variables, context) => {
            // Update the toast with success message
            toast.dismiss(context.toastId);
            toast.success('Login successful');
            queryClient.invalidateQueries({
                queryKey: ['user'],
                exact: true,
                });
        },
        onError: (error, variables, context) => {
            // Update the toast with error message
            console.log("hey");
            toast.dismiss(context.toastId);
            console.log(error);
            toast.error(error.message);
        }
        })

    const {isLoading: signupLoading, data : signupData} = mutationSignup;

    const handleSubmit = () => {
        if (buttonText === 'Signup') {
            if (!formData.name || !formData.email || !formData.password) {
                toast.error("Please fill all the fields");
                return;
            }
            mutationSignup.mutate(formData);
            
        } else {
            if (!formData.email || !formData.password) {
                toast.error("Please fill all the fields");
                return;
            }
            mutationLogin.mutate(formData);
        }
    }



    return (
        <div className='font-sans h-[100vh] bg-[url(src/assets/background.jpg)] relative p-10 bg-cover bg-left-bottom flex items-center 1qw justify-end '
            style={{ backgroundImage: `url(${background})` }}
        >
            <ToastContainer
                theme='dark'
            />
            <Juggler />
            <button disabled ={signupLoading}  onClick={handleAuth} className='px-4 py-2 absolute top-10 right-10 bg-white border rounded-3xl text-black '  >{buttonText==='Signup' ? "Login " : "Signup"} </button>
            <div className='w-full flex justify-end lg:w-1/2 p-4 ps-10 h-full'>
                <div className='flex w-4/5 flex-col gap-4 justify-center items-start h-full'>
                    <h1 className='text-5xl font-bold text-white'>{title}</h1>
                    <h2 className='text-sm w-2/3 tracking-wider text-[#a9a9a9]'>Money Monitor is an intuitive expense tracker app that helps you manage your finances
                        effortlessly by providing real-time insights into your spending and
                        savings.</h2>
                    <form onSubmit={onSubmit} className='flex w-1/2 flex-col items-center'>
                        {children}
                        <button onClick={handleSubmit} className='bg-white w-full border rounded-3xl text-black px-4 py-2 mt-4'>{buttonText}</button>
                    </form>
                    <div className='w-1/2'>
                        <button className='bg-white w-1/2 text-black px-4 py-2 mt-4 gsi-material-button' onClick={loginWithGoogle}>
                            <ContinueWithGoogleButton />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthComp;
