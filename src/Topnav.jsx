import React from 'react';
import img from '../public/vite.svg'
const Topnav = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-2xl uppercase font-extrabold font-sans "><img src={img} alt="logo" /></a>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Topnav;