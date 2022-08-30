import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../../mock/products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                //realizo el find para encontrar un solo producto
                const unicoProducto = products.find((prod) => prod.id === 1);
                setTimeout(() => {
                    res(unicoProducto);
                }, 500);
            });
        getProduct()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
