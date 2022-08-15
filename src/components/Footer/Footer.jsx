import Navbar from '../Nav/Navbar';
import estilos from './footer.module.css';

const loQueQuiera = {
    parrafo: {
        color: 'red',
    },
    contenedor: {
        color: 'green',
    },
};

// {styles}
// styles

const Footer = () => {
    return (
        <footer className={estilos.contenedorMain}>
            <h5
                style={{
                    backgroundColor: 'beige',
                    fontSize: '20px',
                    width: '150px',
                    border: '1px solid yellow',
                }}
            >
                Eric Wajnrajch
            </h5>
            <p style={loQueQuiera.parrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita sunt nostrum dolor esse soluta repellat harum quam eius
                delectus facilis quasi, fugiat voluptates minus, maiores
                architecto doloremque ratione nisi ex.
            </p>
            <p style={loQueQuiera.contenedor}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita sunt nostrum dolor esse soluta repellat harum quam eius
                delectus facilis quasi, fugiat voluptates minus, maiores
                architecto doloremque ratione nisi ex.
            </p>
            <Navbar />
        </footer>
    );
};

export default Footer;
