import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { products } from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import ClipLoader from 'react-spinners/ClipLoader';
// eslint-disable-next-line
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const itemCollection = collection(db, 'productos');

        const referencia = categoryName
            ? query(itemCollection, where('category', '==', categoryName))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [categoryName]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            {isLoading ? (
                <>
                    <ClipLoader color="black" size={150} />
                </>
            ) : (
                <>
                    <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
                    <ItemList items={items} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;

// const getProducts = () =>
//     new Promise((res, rej) => {
//         const prodFiltrados = products.filter(
//             (prod) => prod.category === categoryName
//         );
//         setTimeout(() => {
//             res(categoryName ? prodFiltrados : products);
//         }, 300);
//     });

// getProducts()
//     .then((data) => {
//         setItems(data);
//         setIsLoading(false);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// return () => {
//     setIsLoading(true);
// };

// Promesas:
// const p = new Promise ((res, rej)=>{
//  //res()
//  //rej()
// })

// p.then(()=>{
//     console.log('salio todo bien')
// })

// p.catch(()=>{
//     console.log()
// })

// if (categoryName) {
//     const getProducts = () =>
//         new Promise((res, rej) => {
//             const prodFiltrados = products.filter(
//                 (prod) => prod.category === categoryName
//             );
//             setTimeout(() => {
//                 res(prodFiltrados);
//             }, 500);
//         });

//     getProducts()
//         .then((data) => {
//             setItems(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// } else {
//     const getProducts = () =>
//         new Promise((res, rej) => {
//             setTimeout(() => {
//                 res(products);
//             }, 500);
//         });

//     getProducts()
//         .then((data) => {
//             setItems(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }
