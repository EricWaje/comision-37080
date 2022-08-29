import React from 'react';
import EjemploApi from '../EjemploApis/EjemploApi';
//import ItemListContainer from '../ItemListContainer/ItemListContainer';
import estilos from './main.module.css';

const Main = () => {
    return (
        <main className={estilos.main}>
            {/* <ItemListContainer saludo="Bienvenidos" /> */}
            <EjemploApi />
        </main>
    );
};

export default Main;
