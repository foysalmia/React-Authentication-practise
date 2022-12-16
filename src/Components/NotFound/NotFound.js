import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p className='text-6xl'>Page Not Found</p>
            <img className='mx-auto mt-10' src="https://webartdevelopers.com/blog/wp-content/uploads/2018/09/Simple-Pure-CSS3-404-Error-Page.gif" alt="BigCo Inc. logo" />
            <p onClick={() => navigate("/")} className='mt-3 mb-60 text-green-600 hover:text-red-600 cursor-pointer font-bloder'>Go back to home? </p>
        </div>
    );
};

export default NotFound;