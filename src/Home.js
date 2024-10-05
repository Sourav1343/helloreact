import React from 'react';
import './Style/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My React Learning App</h1>
      <p>Explore React components, routing, and learn how to develop with a clean architecture!</p>
      <div className="home-buttons">
        <button className="btn-primary">Learn Components</button>
        <button className="btn-secondary">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
