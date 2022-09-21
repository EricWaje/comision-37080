import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';

const App = () => {
    console.log(process.env);

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;
