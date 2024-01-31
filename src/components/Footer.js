import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Transportation SPA. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
