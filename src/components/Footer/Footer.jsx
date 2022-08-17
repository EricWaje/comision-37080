import Navbar from '../Nav/Navbar';
import estilos from './footer.module.css';

const Footer = () => {
    return (
        <footer className={estilos.footer}>
            <Navbar isFooter={false} />
        </footer>
    );
};

export default Footer;
