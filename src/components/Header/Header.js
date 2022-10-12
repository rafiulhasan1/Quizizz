import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between bg-sky-400  p-5  shadow-2xl'>
            <div>
                <h1 className='text-white text-3xl font-bold'>Quizizz</h1>
            </div>
            <div className='text-white text-2xl font-semibold '>
                <Link className='px-3 hover:text-gray-300' to='/'>Home</Link>
                {/* <Link className='px-3 hover:text-gray-300' to='/topic'>Topic</Link> */}
                <Link className='hover:text-gray-300' to='/statistics'>Statistics</Link>
                <Link className='px-3 hover:text-gray-300' to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;