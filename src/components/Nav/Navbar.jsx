import React from 'react';
import estilos from './navbar.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

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
                <span className="material-icons">shopping_cart</span>
                <AiOutlineShoppingCart size={30} color="red" />
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
