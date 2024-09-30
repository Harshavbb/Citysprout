// dashboard.js
import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token'); // Get token from local storage

      try {
        const response = await fetch('http://localhost:5000/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user data');
        }

        const data = await response.json();
        setUserDetails(data); // Set user details
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while fetching the data'); // Set error message
      }
    };

    fetchUserDetails(); // Call the function to fetch user details
  }, []); // Run once on component mount

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">User Dashboard</div>
      <div className="dashboard-content">
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        {userDetails ? (
          <div className="user-info">
            <h3>Welcome, {userDetails.username}!</h3>
            <p>Email: {userDetails.email}</p>
            <p>Mobile Number: {userDetails.mobileNumber}</p>
            {/* Add more user details as needed */}
          </div>
        ) : (
          <p>Loading user details...</p> // Loading state
        )}
      </div>
    </div>
  );
};

export default Dashboard;
