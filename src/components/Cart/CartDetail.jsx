import React from 'react';

const CartDetail = ({ prod, deleteOne }) => {
    return (
        <div
            style={{
                border: '1px solid black',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '8px',
                margin: '8px',
            }}
        >
            <h3>{prod.title}</h3>
            <h3>Cantidad: {prod.cantidad}</h3>
            <h3>Precio${prod.price}.-</h3>
            <button onClick={() => deleteOne(prod.id)}>Delete</button>
        </div>
    );
};

export default CartDetail;
