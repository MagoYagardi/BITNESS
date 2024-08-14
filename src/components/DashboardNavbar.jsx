import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  const handleLogout = () => {
    console.log('Sesión cerrada');
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-2xl font-bold">Mi Dashboard</Link>
      <div className="flex space-x-4">
        <Link to="/dashboard/mi-perfil" className="hover:text-teal-400">Mi Perfil</Link>
        <Link to="/dashboard/actividades" className="hover:text-teal-400">Actividades</Link>
        <Link to="/dashboard/configuracion" className="hover:text-teal-400">Configuración</Link>
        <button onClick={handleLogout} className="hover:text-red-500">Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
