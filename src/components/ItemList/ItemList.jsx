import React from 'react';
import Item from '../Item/Item';
import estilos from '../Item/Item.module.css';

const ItemList = ({ items }) => {
    return (
        <div className={estilos.containerCard}>
            {items.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
    );
};

export default ItemList;

// const numeros = [1,2,3,4]
// numeros.map( (numero) => numero * 2 ) ->> devuelve un array ocn la misma cantidad de  posiciones[2,4,6,8]

//cart = [{id: 1, nombre: 'Producto1'}, {id: 2, nombre: 'Producto2'}]
// cart.map( (producto) => {
//      return (
//          <div>
//             <h2>{producto.nombre}</h2>;
//             <h2>{producto.id}</h2>
//           </div>
//      )
//})
