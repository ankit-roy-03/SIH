import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the menu icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in session storage to determine login status
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear the token from session storage and update login status
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="bg-maingreen py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Branding or Logo */}
        <div className="text-beige text-lg font-bold">
          <Link to="/">Agrotechh</Link>
        </div>

        {/* Menu Button with Icon */}
        <button
          onClick={toggleMenu}
          className="text-lightyellow hover:text-beige font-semibold focus:outline-none"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Navigation Links (Dropdown) */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-6 top-16 bg-darkgreen text-lightgreen rounded-lg shadow-lg py-4 w-48`}
        >
          <Link to="/" className="block px-4 py-2 hover:bg-beige hover:text-green">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="block px-4 py-2 hover:bg-beige hover:text-green">
                User Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left hover:bg-beige hover:text-green focus:outline-none"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-4 py-2 hover:bg-beige hover:text-green">
                Login
              </Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-beige hover:text-green">
                Register
              </Link>
            </>
          )}
          <Link to="/about" className="block px-4 py-2 hover:bg-beige hover:text-green">
            About
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-beige hover:text-green">
            Contact
          </Link>
          <Link to="/admin" className="block px-4 py-2 hover:bg-beige hover:text-green">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
