import { Link } from 'react-router-dom';
import './styles/GenteralHeader.css';

const GenteralHeader = () => {
  return (
    <header className='nav__header'>
        <h1 className='nav__title'><Link to="/">Hotels<span>App</span></Link></h1>
        <nav className='contenedor__links'>
            <ul className='nav__links'>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default GenteralHeader