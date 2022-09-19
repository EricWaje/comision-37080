import React, { useState } from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const Navbar = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(db, 'categorias');

        getDocs(collectionCat).then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categorias);
        });
    }, []);
    return (
        <nav className={props.isFooter ? estilos.nav : estilos.footer}>
            <Link to="/">37080</Link>
            <ul>
                {props.isFooter ? (
                    <>
                        {categories.map((cat) => (
                            <NavLink key={cat.id} to={`/category/${cat.route}`}>
                                {cat.name}
                            </NavLink>
                        ))}
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
