import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext';

// import { collection, addDoc } from 'firebase/firestore';
// import { db } from './firebaseConfig';
// import { products } from './mock/products';

// const ref = collection(db, 'productos');

// products.map((producto) => addDoc(ref, producto));

const App = () => {
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

// const App2 = () => {
//     return (
//         <BrowserRouter>
//             <Navbar />
//             <Routes>
//                 <Route
//                    path="/"
//                    element={<ItemListContainer saludo="Bienvenidos" />}
//                />
//                <Route path="/detail" element={<ItemDetailContainer />} />
//                <Route path="/cart" element={<Cart />} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default App2;

// const onAdd = (param) => {
//     console.log(param);
// };

/* <Counter stock={10} onAdd={onAdd} /> */
