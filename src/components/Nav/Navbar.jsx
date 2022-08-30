import React from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';

const Navbar = (props) => {
    if (props.isFooter) {
        return (
            <nav className={estilos.nav}>
                <h1>37080</h1>
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
    } else {
        return (
            <nav className={estilos.nav}>
                <h1>37080</h1>
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
                    <li>
                        <a href="https://google.com">Facebook</a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Navbar;
