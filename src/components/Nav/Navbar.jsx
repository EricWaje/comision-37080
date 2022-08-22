import React from 'react';
import Button from '../Button/Button';
import estilos from './navbar.module.css';

const Navbar = (props) => {
    //console.log(props);
    //const condicion = true;
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
                <Button value="Sign In" variant="primary" />
                <span className="material-icons">shopping_cart</span>
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
