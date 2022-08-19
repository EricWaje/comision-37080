import React from 'react';
import { CartWidget } from './CartWidget';
import estilos from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={estilos.nav}>
            <h1>After componentes 37080</h1>
            <ul>
                <li>
                    <a href="https://google.com">Productos</a>
                </li>
                <li>
                    <a href="https://google.com">Nosotros</a>
                </li>
                <li>
                    <a href="https://google.com">Contacto</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
