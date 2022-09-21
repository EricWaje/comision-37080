import React from 'react';

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="material-icons">shopping_cart</span>
            <span>0</span>
        </div>
    );
};

export default CartWidget;
