import React, { useState } from 'react';

//use
const Counter = ({ stock, onAdd, initial }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        setCount(count - 1);
    };

    const agregarAlCarrito = () => {
        onAdd(count);
    };

    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Count: {count} </p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;

//foo(10);
