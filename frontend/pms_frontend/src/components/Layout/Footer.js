import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Product Management App</p>
      </div>
    </footer>
  );
};

export default Footer;