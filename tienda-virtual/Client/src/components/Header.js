import React from 'react';
import './styles/Header.css'

const Header = () => (
    <header>
        <div className="logo">SK NAILS</div>
        <input type="text" placeholder="Buscar..." />
        <div className="cart">Carrito</div>
    </header>
);

export default Header;
