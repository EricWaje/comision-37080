import React from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    if (props.isFooter) {
        return (
            <nav className={estilos.nav}>
                <Link to="/">37080</Link>
                <ul>
                    <NavLink to="/category/remeras">Remeras</NavLink>

                    <Link to="/category/camisas">Camisas</Link>

                    <Link to="/category/gorras">Gorras</Link>
                </ul>
                <Link to="/cart">
                    <CartWidget />
                </Link>
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
