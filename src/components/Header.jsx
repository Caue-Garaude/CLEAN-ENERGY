import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-primary text-white p-3">
    <nav className="container d-flex justify-content-between">
      <h1>Clean Energy</h1>
      <ul className="nav">
        <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
        <li className="nav-item"><Link to="/energy-types" className="nav-link text-white">Tipos de Energia</Link></li>
        <li className="nav-item"><Link to="/benefits" className="nav-link text-white">Benefícios</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contato</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;