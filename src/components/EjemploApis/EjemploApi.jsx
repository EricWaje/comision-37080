import React, { useEffect, useState } from 'react';
import EjemploApiList from './EjemploApiList';

//After: axios, async/await, desafio, petición post

const EjemploApi = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const traerProductos = async () => {
        // const { data } = await axios('https://fakestoreapi.com/products');
        // console.log(data);
        try {
            const datos = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic',
                }),
            });
            const info = await datos.json();
            console.log('post', info);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        traerProductos();
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
//     body: JSON.stringify({
//         title: 'test product',
//         price: 13.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.cc',
//         category: 'electronic',
//     }),
// })
//     .then((res) => res.json())
//     .then((json) => console.log(json));

// fetch('https://fakestoreapi.com/products') //GET
//     .then((datos) => datos.json())
//     .then((res) => {
//         setItems(res);
//         //setIsLoading(false);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         setIsLoading(false);
//     });
