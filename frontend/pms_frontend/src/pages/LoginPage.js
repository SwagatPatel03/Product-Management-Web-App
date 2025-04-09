import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Auth/Login';

const LoginPage = () => {
  return (
    <div className="form-container">
      <Login />
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p>
          Don't have an account?{' '}
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;