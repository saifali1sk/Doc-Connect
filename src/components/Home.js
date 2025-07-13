import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Your Health, Our Priority. Welcome to Doc-Connect!</h1>
                    <p>Easily find and book appointments with top-rated doctors near you.</p>
                    <Link to="/appointments" className="cta-button">Book an Appointment Now</Link>
                </div>
            </section>

            <section className="how-it-works">
                <h2>Simple Steps to Better Health</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-icon">🔍</div>
                        <h3>Find a Doctor</h3>
                        <p>Search by specialty to find the right doctor for you.</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">📅</div>
                        <h3>Book an Appointment</h3>
                        <p>Choose a date and time that works for you.</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">🏥</div>
                        <h3>Visit the Clinic</h3>
                        <p>Get the expert care you need.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
