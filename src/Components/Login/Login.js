import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = e => setName(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handlesubmit = (e) => {
        console.log(name, email, password);
        e.preventDefault();
    }

    return (

        <div className='mt-5'>
            <p className='text-3xl'>Please Login <span className='text-green-300 font-bold'>{name}</span></p>
            <form onSubmit={handlesubmit}>
                <input onBlur={handleNameChange} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' type="text" name="name" placeholder='enter your name' />
                <input onBlur={handleEmailChange} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' type="text" name="email" placeholder='enter your email' />
                <input onBlur={handlePasswordChange} className='block w-80 mx-auto m-4 bg-slate-100 p-2 border-2 border-gray-500 rounded' type="password" name="password" placeholder='enter password' />
                <input className='block w-80 mx-auto m-4 bg-slate-600 p-2 rounded text-white' type="submit" />
            </form>
        </div>
    );
};

export default Login;