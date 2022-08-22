import React, { useState } from 'react';

//use
const Counter = () => {
    // const estado = useState(0);
    // const miVariableDeEstado = estado[0]
    // const miFuncionDeEstado = estado[1];
    const [count, setCount] = useState(0);

    let tope = 10;

    const sumar = () => {
        //if / else
        // if (count < tope) {
        //     setCount(count + 1);
        // } else {
        //     alert('Máximo stock');
        // }

        //ternario
        //count < tope ? setCount(count + 1) : alert('Máximo stock');

        //&&
        count < tope && setCount(count + 1);
    };

    const restar = () => {
        setCount(count - 1);
    };

    //count = count + 1 ⛔️
    //count++ ⛔️
    //count += 1 ⛔️

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
