import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../components/Auth/Register';

const RegisterPage = () => {
  return (
    <div className="form-container">
      <Register />
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p>
          Already have an account?{' '}
          <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;