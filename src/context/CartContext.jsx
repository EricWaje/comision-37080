import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

//componente -> estado, efect, tener funciones que modifiquen mi estado

//crear componente

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            //lo encuentro y le sumo la cantidad
            //alert('Ya está en el carrito');
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // corroborar si el producto ya está en el carrito (isInCart)
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (item, cantidad) => {
        const carritoActualizado = cart.map((prod) => {
            if (prod.id === item.id) {
                const productoActualizado = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return productoActualizado;
            } else {
                return prod;
            }
        });
        setCart(carritoActualizado);
    };

    console.log(cart);

    const eliminarProd = (id) => {
        console.log(`eliminando producto ${id}`);
        //setCart(cart.filter((prod) => prod.id !== id));
        const carritoFiltrado = cart.filter((prod) => prod.id !== id);
        setCart(carritoFiltrado);
    };
    //eliminar un solo producto pasandole el id

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, clearCart, eliminarProd }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

// const isInCart2 = (id) => {
//     const prodEncontrado = cart.find((prod) => prod.id === id);
//     if (prodEncontrado !== undefined) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const sumarCantidad2 = (item, cantidad) => {
//     const carritoActualizado = cart.map((prod) =>
//         prod.id === item.id
//             ? { ...prod, cantidad: prod.cantidad + cantidad }
//             : prod
//     );
//     setCart(carritoActualizado);
// };
