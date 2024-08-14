import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavButton.css'; // Verifica que la ruta sea correcta

const NavButton = ({ to, children }) => {
  return (
    <Link to={to} className="nav-button">
      {children}
    </Link>
  );
};

export default NavButton;
