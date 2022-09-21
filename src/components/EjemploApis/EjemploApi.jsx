import React, { useEffect, useState } from 'react';
import EjemploApiList from './EjemploApiList';

//After: axios, async/await, desafio, petición post

const EjemploApi = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') //GET
            .then((res) => res.json())
            .then((res) => {
                setItems(res);
                //setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <h1>Cargando productos...</h1>
            ) : (
                <EjemploApiList items={items} />
            )}
        </div>
    );
};

export default EjemploApi;

//1xx: Información

//2xx: información correcta
// -200: Ok
// -201: Created

//3xx: redirección
// -302: Found
// -304: Not modified

//4xx: cliente
// -400: Bad request
// -401: Unauthorized
// -403: Forbidden

//5xx: servidor
// -500: Internal server error

// fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         user: 'Eric',
//         email: 'ericw@gmail.com',
//         edad: 27
//     })
// })
