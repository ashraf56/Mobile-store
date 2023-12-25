import React from 'react';
import Search from './Search';
import Allfilter from './Allfilter';

const Header = () => {
    return (
        <div className='container mx-auto rounded-full'>
            <div className="hero min-h-[50vh] rounded-3xl " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', objectFit: 'contain' }}>
                <div className='hero-overlay bg-opacity-20 backdrop-blur-sm rounded-3xl '></div>


                <div className="max-w-5xl mx-auto text-center w-full z-10">
                    <h1 className='text-2xl uppercase font-extrabold font-sans text-sky-100'> PixelPulse</h1>
                    <Search></Search>
                    <Allfilter></Allfilter>

                </div>

            </div>
        </div>
    );
};

export default Header;