import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import MenuIcon from './MenuIcon'; // Asegúrate de que esta importación sea correcta
import NavButton from './NavButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <NavButton to="/actividades">Actividades</NavButton>
        <NavButton to="/entrenadores">Entrenadores</NavButton>
        <NavButton to="/carrito">
          <i className="fas fa-shopping-cart"></i>
        </NavButton>
      </div>
      <div className="navbar-right">
        <NavButton to="/registrate">¡Regístrate ya!</NavButton>
        <NavButton to="/login">Log In</NavButton>
        <MenuIcon onClick={handleMenuToggle} />
      </div>
      {menuOpen && (
        <div className="menu">
          <NavButton to="/about">About Us</NavButton>
          <NavButton to="/faq">FAQ</NavButton>
          <NavButton to="/trabaja">Trabaja con Nosotros</NavButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
