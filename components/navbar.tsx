// components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="p-4 flex lg:justify-around justify-between items-center sticky z-10 top-0 bg-gray-100 shadow">
        <a href="/">
            <img src='/images/logo.svg' className="text-2xl font-bold"></img>
        </a>
        <div className="max-lg:hidden space-x-4 text-black">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <a href="#">
            <img src='/images/card.svg' className="text-2xl font-bold"></img>
        </a>
    </nav>
  );
}

export default Navbar;
