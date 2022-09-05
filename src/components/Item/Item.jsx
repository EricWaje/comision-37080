import React from 'react';
import estilos from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className={estilos.card}>
            <img src={item.img} alt="" />
            <div className={estilos.info}>
                <h2>{item.title}</h2>
                <h4>${item.price}.-</h4>
                <h5>#{item.category}</h5>
                <Link
                    to={`/detail/${item.id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <button>Ver detalles</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;
