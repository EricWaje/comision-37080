import React from 'react';
import Button from '../Button/Button';
import estilos from './main.module.css';
import logoReact from '../../img/logo512.png';

const Main = ({ test, saludo, saludar }) => {
    const otraFuncion = (param) => {
        console.log(param);
    };

    return (
        <main className={estilos.main}>
            <section>
                <h2 onClick={() => saludar('otro saludo')}>
                    Bienvenidos! {test}
                </h2>
                <p onClick={otraFuncion()}>{saludo}</p>
                <Button value="Logout" variant="secondary" />
                {/* img desde PUBLIC */}
                <img src="logo192.png" alt="" />
                {/* img desde SRC */}
                <img src={logoReact} alt="" />
                {/* img externa */}
                <img
                    src="https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra1C_r0cz4b.jpg"
                    alt=""
                />
            </section>
        </main>
    );
};

export default Main;
