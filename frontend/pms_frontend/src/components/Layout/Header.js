import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            Product Management
          </Link>
          <div className="nav-links">
            {user ? (
              <>
                <Link to="/products" className="nav-link">
                  Products
                </Link>
                <span className="nav-link">
                  Welcome, {user.email}
                </span>
                <button onClick={handleLogout} className="nav-link" style={{ background: 'none', border: 'none' }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;