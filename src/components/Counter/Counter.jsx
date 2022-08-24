import React, { useState } from 'react';

//use
const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Count: {count} </p>
            <button /* disabled={count === 0} */>Agregar al carrito</button>
        </div>
    );
};

export default Counter;
