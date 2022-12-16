import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => setEmail(e.target.value);
    const handlePass = e => setPassword(e.target.value);
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        // console.log(email, password);
    }
    if (user) {
        toast("Logged In successfully");
    }

    return (
        <div className='mt-10'>
            <p className='text-4xl font-bold'>Please Login First</p>
            <form onSubmit={handleSignIn}>
                <input onBlur={handleEmail} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' name='email' type="email" placeholder='Enter your email'></input>
                <input onBlur={handlePass} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' name='password' type="password" placeholder='Enter your password'></input>
                <input className='block w-80 mx-auto m-4 bg-slate-600 p-2 rounded text-white' type="Submit"></input>
            </form>
            <ToastContainer />
            <p className='text-center text-2xl'>New to This site ? <span onClick={() => navigate("/register")} className='text-green-700 hover:text-red-700 cursor-pointer'>Please Register</span></p>
        </div>
    );
};

export default Login;