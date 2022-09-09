import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
//import Form from '../Form/Form';

const Cart = () => {
    const { cart, clearCart, eliminarProd } = useContext(CartContext);

    console.log(cart);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            {cart.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.title}</h2>
                    <button onClick={() => eliminarProd(prod.id)}>
                        Eliminar Producto
                    </button>
                </div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
            {/* <Form /> */}
        </div>
    );
};

export default Cart;
