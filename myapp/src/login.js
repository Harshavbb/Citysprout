// login.js
import './login.css';
import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // New email state
  const [mobileNumber, setMobileNumber] = useState(''); // New mobile number state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    if (isRegistering) {
      // Registration validation
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, mobileNumber, password }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Registration successful:', data);
          // Redirect or update UI after successful registration
        } else {
          setError(data.message); // Set error message if registration fails
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again.'); // Handle network errors
      }
    } else {
      // Login submission
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Login successful:', data);
          localStorage.setItem('token', data.token); // Store token
          // Redirect or update UI after successful login
        } else {
          setError(data.message); // Set error message if login fails
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again.'); // Handle network errors
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className='loginh2'>{isRegistering ? 'Register' : 'Login'}</h2>
      <h6>{isRegistering ? 'Create an account' : 'To get started'}</h6>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {isRegistering && (
          <>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="tel"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isRegistering && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button className="button1" type="submit">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>

      {/* Toggle between login and register */}
      <div className="toggle-link">
        <span>
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
        </span>
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login here' : 'Register here'}
        </button>
      </div>
    </div>
  );
}
