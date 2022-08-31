import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';

const ItemDetailContainer = () => {
    //estado del componente

    //const parametro = useParams();
    //console.log('parametro :', parametro);
    const { idProd } = useParams();

    //const idProdNumerico = Number(idProd);

    //useEffect con la lógica de la promesa

    //const unicoProd = products.find((prod)=> prod.id === 3)

    return (
        <div style={{ backgroundColor: 'red', minHeight: '70vh' }}>
            ItemDetailContainer
            <ItemDetail />
        </div>
    );
};

export default ItemDetailContainer;
