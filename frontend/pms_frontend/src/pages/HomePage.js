import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home-page">
      <div className="hero-section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Product Management System</h1>
        <p style={{ marginBottom: '2rem' }}>
          A comprehensive solution for managing your product inventory
        </p>
        {user ? (
          <Link to="/products" className="btn btn-add">
            View Products
          </Link>
        ) : (
          <div>
            <Link to="/login" className="btn" style={{ marginRight: '1rem' }}>
              Login
            </Link>
            <Link to="/register" className="btn btn-add">
              Register
            </Link>
          </div>
        )}
      </div>

      <div className="features-section" style={{ marginTop: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Features</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          <div className="feature-card" style={{ flex: '1 1 300px', maxWidth: '400px', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Product Management</h3>
            <p>Create, read, update, and delete products with ease.</p>
          </div>
          <div className="feature-card" style={{ flex: '1 1 300px', maxWidth: '400px', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>Filtering & Search</h3>
            <p>Filter products by category, price range, or rating.</p>
          </div>
          <div className="feature-card" style={{ flex: '1 1 300px', maxWidth: '400px', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <h3>User Authentication</h3>
            <p>Secure user authentication with JWT tokens.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;