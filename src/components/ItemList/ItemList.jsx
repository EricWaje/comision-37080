import React from 'react';
import Item from '../Item/Item';
import estilos from '../Item/Item.module.css';

const ItemList = ({ items }) => {
    return (
        <div className={estilos.containerCard}>
            {items.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
    );
};

export default ItemList;
