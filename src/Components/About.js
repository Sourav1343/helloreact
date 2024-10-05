// src/Components/About.js
import React from 'react';
import '../Style/About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to our React Dashboard application! This application is designed to help you monitor your work
                hours and provide insightful analytics in a visually appealing way. Our goal is to create a user-friendly
                experience for developers and teams to track their productivity efficiently.
            </p>
            <h2 className="about-subtitle">Our Mission</h2>
            <p className="about-description">
                Our mission is to empower individuals and teams to achieve their productivity goals by providing a robust
                platform that combines analytics, visualizations, and user-friendly design.
            </p>
            <h2 className="about-subtitle">Meet the Team</h2>
            <div className="team-container">
                <div className="team-member">
                    <h3>John Doe</h3>
                    <p>Lead Developer</p>
                </div>
                <div className="team-member">
                    <h3>Jane Smith</h3>
                    <p>UI/UX Designer</p>
                </div>
                <div className="team-member">
                    <h3>Michael Brown</h3>
                    <p>Project Manager</p>
                </div>
            </div>
        </div>
    );
};

export default About;
