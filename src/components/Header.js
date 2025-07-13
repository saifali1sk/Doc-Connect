import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Doc-Connect</Link>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/appointments">Book Appointment</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Link to="/login" className="login-button">Login</Link>
        </header>
    );
};

export default Header;
