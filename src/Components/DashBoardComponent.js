// src/DashboardComponent.js
import React from 'react';
import '../Style/DashboardComponent.css'; // New CSS for Dashboard

function DashboardComponent() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard Overview</h1>

      {/* Stats Overview */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>Total Users</h2>
          <p>500</p>
        </div>
        <div className="stat-card">
          <h2>Active Sessions</h2>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h2>Server Uptime</h2>
          <p>99.9%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        <h2>Performance Charts</h2>
        <div className="chart-placeholder">Chart 1</div>
        <div className="chart-placeholder">Chart 2</div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>User1 logged in</li>
          <li>User2 created a post</li>
          <li>Server restart performed</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardComponent;
