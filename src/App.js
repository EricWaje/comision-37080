import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Counter from './components/Counter/Counter';
import Texto from './components/Texto';

const App = () => {
    const saludo = 'Bienvenidos';

    const saludar = (param) => {
        console.log(param);
    };

    return (
        <>
            <Header />
            <Main test="Comision 37080" saludo={saludo} saludar={saludar} />
            <Counter />
            <Texto />
            <Footer />
        </>
    );
};

export default App;
