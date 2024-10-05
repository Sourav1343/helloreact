// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Style/App.css';
import Home from './Home'; // Separate Home Component
import DashboardComponent from './Components/DashBoardComponent'; // New Dashboard Component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
