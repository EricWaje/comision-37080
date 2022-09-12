import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
//import Form from '../Form/Form';

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    /* if (cart.length === 0) {
        return <h1>Carrito está vacío</h1>;
    } */

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                /* backgroundColor: cart.length === 0 ? 'red' : 'blue', */
            }}
        >
            {/* <Form /> */}
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
            {/* {true && <h1>Se cumplió la condición</h1>} */}
            {/* {false && <h1>No se cumplió la condición</h1>} */}
            {/*             {
                <h2>{true ? 'Es verdadero' : 'Es falso'}</h2>
            } */}
            {/* {
                condicion
                ? <h2>Verdadero</h2>
                : condicion ? '' : ''
            } */}
            <button onClick={clearCart}>Clear Cart</button>
            <h4>Total: ${total}</h4>
        </div>
    );
};

export default Cart;
