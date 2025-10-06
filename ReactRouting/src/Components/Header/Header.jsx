import './Header.css';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='bg-amber-300 h-20 max-w-[1200px] mx-auto text-center'>
            <h2 className='p-2'>Header</h2>
            <nav className='flex gap-2 justify-center items-center text-center text-blue-700'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/work">Work</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;