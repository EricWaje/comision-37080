import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item, cantidadItem);
    };

    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <div className="info">
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Reiciendis ratione aliquam ducimus debitis quibusdam? Nulla
                    molestiae voluptates, ex sapiente, non porro omnis provident
                    a hic facere, ab deleniti commodi aut!
                </p>
                <h3>${item.price}.-</h3>
                {cantidad === 0 ? (
                    <Counter stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;

// const foo = (argumento) => {

// }
