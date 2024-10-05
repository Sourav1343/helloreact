// src/Components/DashboardComponent.js

import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import '../Style/Dashboard.css';

// Register all necessary components
Chart.register(...registerables);

const DashboardComponent = () => {
  const [workHours, setWorkHours] = useState([]);
  const [workMinutes, setWorkMinutes] = useState([]);

  // Sample data (replace with your logic)
  const generateData = () => {
    const hours = [];
    const minutes = [];
    for (let i = 1; i <= 30; i++) { // Simulate data for a month
      hours.push(Math.floor(Math.random() * 8)); // Random hours (0-7)
      minutes.push(Math.floor(Math.random() * 60)); // Random minutes (0-59)
    }
    setWorkHours(hours);
    setWorkMinutes(minutes);
  };

  useEffect(() => {
    generateData();
  }, []);

  // Line Chart Data
  const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Hours Worked',
        data: workHours,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: 'Minutes Worked',
        data: workMinutes,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Total Work Time (in Hours)',
        data: workHours.map((hour, index) => hour + workMinutes[index] / 60),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ['Hours Worked', 'Minutes Worked'],
    datasets: [
      {
        data: [workHours.reduce((a, b) => a + b, 0), workMinutes.reduce((a, b) => a + b, 0)],
        backgroundColor: ['rgba(255, 205, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Work Hours Dashboard</h2>

      <div className="chart-container">
        <h3>Line Chart: Daily Work Hours and Minutes</h3>
        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      <div className="chart-container">
        <h3>Bar Chart: Total Work Time</h3>
        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      <div className="chart-container">
        <h3>Pie Chart: Work Distribution</h3>
        <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      <div className="table-container">
        <h3>Work Hours Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours Worked</th>
              <th>Minutes Worked</th>
            </tr>
          </thead>
          <tbody>
            {workHours.map((hour, index) => (
              <tr key={index}>
                <td>Day {index + 1}</td>
                <td>{hour}</td>
                <td>{workMinutes[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardComponent;
