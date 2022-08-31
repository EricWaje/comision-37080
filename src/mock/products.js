//si utilizan imagenes desde src, primero las importan y luego las utilizan abajo. Cuando vemoa firebase esta manera no va a funcionar, por eso recomiendo utilziar las img desde una nube o desde public.
//import prod1 from '../img/logo512.png';

export const products = [
    {
        id: 1,
        title: 'Remera blanca',
        price: 200,
        stock: 10,
        category: 'remeras',
        //img desde internet:
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera2_pe94nf.jpg',
        //img desde public:
        //img: 'logo192.png',
        //img desde src:
        //img: prod1,
    },
    {
        id: 2,
        title: 'Camisa azul',
        price: 300,
        stock: 10,
        category: 'camisas',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/camisa4_ehruek.jpg',
    },
    {
        id: 3,
        title: 'Gorra negra',
        price: 20,
        stock: 10,
        category: 'gorras',
        img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra4C_nyvjj6.jpg',
    },
];
