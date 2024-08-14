import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import MenuIcon from './MenuIcon';
import NavButton from './NavButton';

const Navbar = ({ onOpenLogin, onOpenRegister }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-2.5 bg-purple-900 text-white relative">
      <div className="flex items-center pl-[200px]">
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="absolute left-1 top-full transform -translate-y-[60%] h-[100px] z-15" 
          />
        </Link>
        <NavButton to="/actividades">Actividades</NavButton>
        <NavButton to="/entrenadores">Entrenadores</NavButton>
        <NavButton to="/carrito">
          <i className="fas fa-shopping-cart"></i>
        </NavButton>
      </div>
      <div className="flex items-center">
        <button 
          onClick={onOpenRegister} 
          className="text-white bg-transparent border-none py-2.5 px-3.75 cursor-pointer hover:bg-white/10"
        >
          ¡Regístrate ya!
        </button>
        <button 
          onClick={onOpenLogin} 
          className="text-white bg-transparent border-none py-2.5 px-3.75 cursor-pointer hover:bg-white/10"
        >
          Log In
        </button>
        <MenuIcon onClick={handleMenuToggle} />
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-purple-900">
          <NavButton to="/about">About Us</NavButton>
          <NavButton to="/faq">FAQ</NavButton>
          <NavButton to="/trabaja">Trabaja con Nosotros</NavButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
