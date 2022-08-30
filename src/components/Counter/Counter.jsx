import React, { useState } from 'react';

//use
const Counter = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    };

    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Count: {count} </p>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;

const foo = (param) => {
    //param = 40
};

foo(40);
