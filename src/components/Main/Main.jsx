import React from 'react';
import estilos from './main.module.css';

const Main = ({ test, fecha, alumno }) => {
    //console.log(props); // {}
    //console.log(props);
    //console.log(props.alumno.nombre);
    //const comision = props.test;
    //const { test, fecha } = props;

    return (
        <main className={estilos.main}>
            <section>
                <h2>Bienvenidos! {test}</h2>
                <p>Hoy es {fecha} de Agosto</p>
                <h3>{alumno.nombre}</h3>
                {/* <h3>{props.test}</h3> */}
            </section>
        </main>
    );
};

export default Main;

// `string ${variable}`
