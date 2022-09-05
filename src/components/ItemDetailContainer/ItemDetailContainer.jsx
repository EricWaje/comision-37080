import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { idProd } = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const prod = products.find(
                    (prod) => prod.id === Number(idProd)
                );
                setTimeout(() => {
                    res(prod);
                }, 500);
            });

        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idProd]);

    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
