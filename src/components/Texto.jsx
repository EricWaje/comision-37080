import React, { useState, useEffect } from 'react';

const Texto = () => {
    const [nombre, setNombre] = useState('Eric');
    const [valorBolleano, setvalorBolleano] = useState(true);

    const cambiarNombre = () => {
        if (nombre === 'Eric') {
            setNombre('Exequiel');
        } else {
            setNombre('Eric');
        }
    };

    const cambiarValor = () => {
        setvalorBolleano(!valorBolleano);
    };

    //se ejecuta cada vez que exista un cambio de estado o cambio de prop o se dispare algún evento que modifique
    // alguna de esas dos variables.
    //useEffect sin segundo parámetro
    useEffect(() => {
        console.log(`Me ejecuto siempre`);
    });

    //useEffect con segundo parámetro [] se ejecuta una sola vez
    useEffect(() => {
        //tareas pesadas
        //pedidos a una base da datos
        console.log('Me ejecuto una sola vez');
    }, []);

    //useEffect con segundo parámetro [dependencia] se ejecuta una sola vez y cada vez que cambie la dependencia
    useEffect(() => {
        //tareas pesadas
        //pedidos a una base da datos
        console.log(
            `Me ejecuto una sola vez y cada vez que cambie valorBolleano}`
        );
    }, [valorBolleano]);

    //0 == "0" --> true
    //0 === "0" --> false

    return (
        <div>
            <p>Mi nombre es {nombre}</p>
            {valorBolleano ? (
                <h1>El valor es true</h1>
            ) : (
                <h1>El valor es False</h1>
            )}
            <button onClick={cambiarNombre}>Cambiar texto</button>
            <button onClick={cambiarValor}>Cambiar Valor</button>
        </div>
    );
};

export default Texto;
