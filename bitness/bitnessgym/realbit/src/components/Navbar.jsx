
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import MenuIcon from './MenuIcon';
import NavButton from './NavButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home"> {/* Enlaza el logo a la página de inicio */}
          <img src={logo} alt="Logo" className="logo" />
        </Link>
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
