import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Form from '../Form/Form';

const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
    }

    if (cart.length === 0) {
        return (
            <h1>
                Aún no tenés productos, podés ir al <Link to="/">Home</Link>{' '}
                para buscar algún producto
            </h1>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                /* backgroundColor: cart.length === 0 ? 'red' : 'blue', */
            }}
        >
            {cart.map((prod) => (
                <div
                    key={prod.id}
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
            ))}

            <button onClick={clearCart}>Clear Cart</button>
            <h4>Total: ${total}</h4>
            <Form
                cart={cart}
                total={total}
                clearCart={clearCart}
                handleId={handleId}
            />
        </div>
    );
};

export default Cart;
