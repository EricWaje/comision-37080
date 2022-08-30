import React from 'react';

const EjemploApiCard = ({ item }) => {
    return (
        <div
            key={item.id}
            style={{
                border: '1px solid black',
                borderRadius: '10px',
                margin: '10px',
            }}
        >
            <img src={item.image} width="200px" alt={item.title} />
        </div>
    );
};

export default EjemploApiCard;
