import Navbar from '../Nav/Navbar';
import estilos from './header.module.css';

const Header = () => {
    return (
        <header className={estilos.header}>
            <Navbar isFooter={true} />
        </header>
    );
};

export default Header;
