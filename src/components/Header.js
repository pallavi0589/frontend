import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="brand">
                <Link to="/">Transportation SPA</Link>
            </div>
            <nav className="navigation">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </header>
    );
};

export default Header;
