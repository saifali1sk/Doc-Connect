import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Providing quality healthcare through technology.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/appointments">Appointments</a></li>
                        <li><a href="/reviews">Reviews</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@doc-connect.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                © 2025 Doc-Connect. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
