import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Link to="/">Food Website</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-900 dark:text-gray-100">
            Home
          </Link>
          <Link to="/add-food" className="text-gray-900 dark:text-gray-100">
          Recipe Registry
          </Link>
          <Link to="/about" className="text-gray-900 dark:text-gray-100">
            About
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md"></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
