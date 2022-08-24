import React, { useState, useEffect } from 'react';
import { products } from '../../mock/products';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 3000);
        });

        getProducts
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                //console.log(error);
            })
            .finally(() => {
                //console.log('Finally');
            });
    }, []);

    return (
        <div>
            <h2>{saludo}</h2>
            {items.map((item) => {
                return (
                    //la key luego pasa al componente Item --> <Item props={props} key={key}/>
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <h5>${item.price}.-</h5>
                        <img src={item.img} alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemListContainer;
