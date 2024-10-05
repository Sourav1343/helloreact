// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'; // Separate Home Component
import DashboardComponent from './Components/DashBoardComponent'; // New Dashboard Component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-title">My React App</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={DashboardComponent} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
