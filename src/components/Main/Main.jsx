import React from 'react';
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import estilos from './main.module.css';

const Main = () => {
    return (
        <main className={estilos.main}>
            <ItemListContainer saludo="Bienvenidos" />
            {/* <ItemDetailContainer /> */}
        </main>
    );
};

export default Main;
