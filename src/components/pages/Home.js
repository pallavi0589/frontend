import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <h1>Welcome to Transportation SPA</h1>
                <div>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                    <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
