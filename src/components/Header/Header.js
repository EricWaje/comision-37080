import Navbar from '../Nav/Navbar';
import estilos from './header.module.css';

const Header = () => {
    return (
        <header className={estilos.contenedorMain}>
            <Navbar />
        </header>
    );
};

export default Header;
