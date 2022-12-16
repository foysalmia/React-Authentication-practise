import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleNameChange = e => setName(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handlesubmit = (e) => {
        createUserWithEmailAndPassword(email, password);
        e.preventDefault();
    }

    if (user) {
        toast("User created successfully..");
    }
    console.log(user);

    return (

        <div className='mt-5'>
            <p className='text-3xl'>Please Register <span className='text-green-300 font-bold'>{name}</span></p>
            <form onSubmit={handlesubmit}>
                <input onBlur={handleNameChange} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' type="text" name="name" placeholder='enter your name' />
                <input onBlur={handleEmailChange} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' type="text" name="email" placeholder='enter your email' />
                <input onBlur={handlePasswordChange} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' type="password" name="password" placeholder='enter password' />
                <input className='block w-80 mx-auto m-4 bg-slate-600 p-2 rounded text-white' type="submit" />
            </form>
            <p className='text-center text-2xl'>Already have an account ? <span onClick={() => navigate("/login")} className='text-green-700 cursor-pointer hover:text-red-700'>Please Login</span></p>
            <ToastContainer />
        </div>
    );
};

export default Register;