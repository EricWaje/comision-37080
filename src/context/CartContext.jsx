import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            //lo encuentro y le sumo la cantidad
            totalQuantitySingleProduct(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // corroborar si el producto ya está en el carrito (isInCart)
    // eslint-disable-next-line
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    //sumar cantidad del mismo producto
    // eslint-disable-next-line
    const totalQuantitySingleProduct = (item, cantidad) => {
        const updateProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const productUpdated = {
                    ...prod,
                    cantidad: cantidad,
                };

                return productUpdated;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    //calcular total de unidades para el cart widget
    const totalQuantity = () => {};

    //calcular total precio del carrito
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };

    /* const totalPrice2 = () => {
        let acumulador = 0;
        for (let i = 0; i < cart.length; i++) {
            acumulador += cart[i].cantidad;
        }
        return acumulador;
    }; */

    //eliminar un solo producto pasandole el id
    const deleteOne = (id) => {
        //const copia = cart ⛔️
        //const copia = [...cart] ✅

        const filteredProducts = cart.filter((prod) => prod.id !== id);
        setCart(filteredProducts);
    };

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
        //optional chaining
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                deleteOne,
                totalPrice,
                totalQuantity,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
