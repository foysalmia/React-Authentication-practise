import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
    console.log(user);
    const handleSignOut = async () => {
        const success = await signOut();
        if (success) {
            toast("User Signout successfully.");
        }

    }
    return (
        <div>
            <nav>
                <Link className="uppercase mx-2 hover:text-red-300" to="/">Home</Link>
                <Link className="uppercase mx-2 hover:text-red-300" to="/product">Product</Link>
                {user ?
                    <button className='bg-green-200 p-1 rounded hover:bg-green-400' onClick={handleSignOut}>LogOut</button> :
                    <span>
                        <Link className="uppercase mx-2 hover:text-red-300" to="/login">Login</Link>
                        <Link className="uppercase mx-2 hover:text-red-300" to="/register">Register</Link>
                    </span>
                }
                <ToastContainer />
            </nav>
        </div>
    );
};

export default Navbar;