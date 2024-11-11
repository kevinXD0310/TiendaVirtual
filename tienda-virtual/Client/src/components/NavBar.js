import React, { useState } from 'react';
import './styles/NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return (
    <nav>
        <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
        </div>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li>Inicio</li>
        <li>Catálogos</li>
        <li>Más Vendidos</li>
        <li>Ofertas</li>
        </ul>
    </nav>
    );
};

export default NavBar;
