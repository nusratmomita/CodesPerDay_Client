import React from 'react';
import { Link, NavLink } from 'react-router';
import siteLogo from '../assets/siteLogo.jfif'

const Header = () => {
    const links = 
    <>
        <NavLink to="/" className="ml-5 text-2xl font-bold"><li>Home</li></NavLink>
        <NavLink to="/courses" className="ml-5 text-2xl font-bold"><li>Courses</li></NavLink>
        <NavLink to="/interview" className="ml-5 text-2xl font-bold"><li>Interview Practice</li></NavLink>
        <NavLink to="/pricing" className="ml-5 text-2xl font-bold"><li>Pricing</li></NavLink>
    </> 
    return (
        <div className="navbar bg-base-100 shadow-sm p-4">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="navLinks menu menu-sm dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow text-5xl">
                    {
                        links
                    }
                </ul>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <img className="w-14 h-14 rounded-2xl" src={siteLogo} alt="" />
                    <Link to="/"
                        className="text-3xl font-extrabold">
                        CodesPerDay
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-5">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Join Us</a>
                <a className="btn ml-5">Login</a>
            </div>
        </div>
    );
};

export default Header;