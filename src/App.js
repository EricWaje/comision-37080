import Navbar from './components/Nav/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Layout from './components/Layout';

const App = () => {
    const saludo = 'Bienvenidos';

    return (
        <>
            <Navbar />
            <ItemListContainer saludo={saludo} />
        </>
    );
};

export default App;
