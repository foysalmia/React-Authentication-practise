import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
                <Link className="uppercase mx-2 hover:text-red-300" to="/">Home</Link>
                <Link className="uppercase mx-2 hover:text-red-300" to="/product">Product</Link>
                <Link className="uppercase mx-2 hover:text-red-300" to="/login">Login</Link>
                <Link className="uppercase mx-2 hover:text-red-300" to="/register">Register</Link>
            </nav>
        </div>
    );
};

export default Home;