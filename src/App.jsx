import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardNavbar from './components/DashboardNavbar';
import Home from './pages/Home';
import Actividades from './pages/Actividades';
import Entrenadores from './pages/Entrenadores';
import Carrito from './pages/Carrito';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import Trabaja from './pages/Trabaja';
import LoginModal from './pages/LoginModal';
import RegisterModal from './pages/RegisterModal';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

  const handleOpenRegister = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  // Create a component to determine which Navbar to display based on the current location
  const NavbarComponent = () => {
    const location = useLocation();
    return location.pathname.startsWith('/dashboard') ? (
      <DashboardNavbar />
    ) : (
      <Navbar onOpenLogin={handleOpenLogin} onOpenRegister={handleOpenRegister} />
    );
  };

  return (
    <Router>
      <NavbarComponent /> {/* Render the Navbar or DashboardNavbar based on the route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/trabaja" element={<Trabaja />} />
      </Routes>

      {isLoginOpen && <LoginModal onClose={handleCloseLogin} />}
      {isRegisterOpen && <RegisterModal onClose={handleCloseRegister} />}
    </Router>
  );
};

export default App;
