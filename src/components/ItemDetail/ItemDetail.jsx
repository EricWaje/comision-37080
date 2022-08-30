import React from 'react';
import Counter from '../Counter/Counter';

const ItemDetail = ({ item }) => {
    const onAdd = (param) => {
        console.log(param);
    };
    return (
        <div style={{ display: 'flex' }}>
            <img src={item.img} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <h3>$ {item.price}</h3>
                <p>talles:</p>
                <ul>
                    {item.talles?.map((talle) => {
                        return (
                            <li key={talle.id}>
                                {talle.nombre} ${talle.precio}
                            </li>
                        );
                    })}
                </ul>
                <Counter stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
