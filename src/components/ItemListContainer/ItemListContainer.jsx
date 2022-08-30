import React, { useState, useEffect } from 'react';
import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 3000);
            });

        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;

// Promesas:
// const p = new Promise ((res, rej)=>{
//  //res()
//  //rej()
// })

// p.then(()=>{
//     console.log('salio todo bien')
// })

// p.catch(()=>{
//     console.log()
// })
