import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
//import Counter from './components/Counter/Counter';

const App = () => {
    // const onAdd = (param) => {
    //     console.log(param);
    // };

    return (
        <>
            <Header />
            <Main />
            {/* <Counter stock={10} onAdd={onAdd} /> */}
            <Footer />
        </>
    );
};

export default App;
