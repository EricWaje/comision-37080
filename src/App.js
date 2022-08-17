//Fragments
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
//import Layout from './components/Layout';

const App = () => {
    return (
        <>
            <Header />
            <Main
                test="Comision 37080"
                fecha={17}
                alumno={{ nombre: 'Tomas', curso: 'React' }}
                valor={false}
            />
            <Footer />
        </>
    );
};

export default App;

// const foo = (a,b) =>{
//    return a + b
// }

// foo('texto',2)

//foo(3,4)

// const Main = () =>{

// }

// <Main key=value /> --> Header

// <Main/> --> Footer
