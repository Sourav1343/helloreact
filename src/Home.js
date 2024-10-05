import React, { useEffect, useState } from 'react';
 // Importing the CSS file
import './Style/Home.css';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkScheme);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="hero-section">
        <h1>Welcome to My React Learning App</h1>
        <p>Explore React components, routing, and learn how to develop with a clean architecture!</p>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <div className="home-buttons">
          <button className="btn-primary">Learn Components</button>
          <button className="btn-secondary">Get Started</button>
        </div>
      </div>
      <div className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>Our components are fully responsive and work on all devices.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Routing</h3>
            <p>Navigate between different pages seamlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Reusable Components</h3>
            <p>Create and reuse components for a clean architecture.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
