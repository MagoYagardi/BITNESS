import React from 'react';
import '../styles/MenuIcon.css'; // Verifica que esta ruta sea correcta

const MenuIcon = ({ onClick }) => {
  return (
    <button className="menu-icon" onClick={onClick}>
      <i className="fas fa-bars"></i> {/* Aquí puedes poner el ícono que prefieras */}
    </button>
  );
};

export default MenuIcon;
