import React from 'react';
import { Link, Links, NavLink } from 'react-router';

const Header = () => {
    // অ্যাক্টিভ লিঙ্কের জন্য একটি সিম্পল স্টাইল ফাংশন
    const navLinkStyles = ({ isActive }) => 
        isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "hover:text-primary transition-all";

    return (
        <div className="navbar bg-base-100 shadow-md px-4 md:px-8 sticky top-0 z-50">
            {/* Navbar Start: Logo বা নাম */}
            <div className="navbar-start">
                <Link to="/" className="text-xl font-bold text-primary tracking-tighter">
                    REZA <span className="text-neutral">DEV</span>
                </Link>
            </div>

            {/* Navbar Center: মেনু আইটেম (বড় স্ক্রিনের জন্য) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 text-[16px] font-medium">
                    <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
                    <li><NavLink to="/about" className={navLinkStyles}>About</NavLink></li>
                    <li><NavLink to="/blog" className={navLinkStyles}>Blog</NavLink></li>
                    <li><NavLink to="/service" className={navLinkStyles}>Service</NavLink></li>
                    <li><NavLink to="/portfolio" className={navLinkStyles}>Portfolio</NavLink></li>
                </ul>
            </div>

            {/* Navbar End: ইউজার প্রোফাইল বা বাটন */}
            <div className="navbar-end">
                <NavLink to="/user" className="btn btn-primary btn-sm rounded-full px-6">
                    User Profile
                </NavLink>
                
                {/* মোবাইল মেনু ড্রপডাউন (ছোট স্ক্রিনের জন্য) */}
                <div className="dropdown dropdown-end lg:hidden ml-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;