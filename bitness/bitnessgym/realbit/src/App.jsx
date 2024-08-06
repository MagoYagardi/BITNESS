import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Verifica que el nombre del archivo y la ruta sean correctos
import Actividades from './pages/Actividades';
import Entrenadores from './pages/Entrenadores';
import Carrito from './pages/Carrito';
import Registrate from './pages/Registrate';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import Trabaja from './pages/Trabaja';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/trabaja" element={<Trabaja />} />
      </Routes>
    </Router>
  );
};

export default App;