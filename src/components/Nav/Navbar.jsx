import React from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={props.isFooter ? estilos.nav : estilos.footer}>
            <Link to="/">37080</Link>
            <ul>
                {props.isFooter ? (
                    <>
                        <NavLink to="/category/remeras">Remeras</NavLink>

                        <NavLink to="/category/camisas">Camisas</NavLink>

                        <NavLink to="/category/gorras">Gorras</NavLink>
                    </>
                ) : (
                    <a href="https://google.com">GOOGLE</a>
                )}
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
