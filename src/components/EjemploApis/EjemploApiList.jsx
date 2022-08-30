import React from 'react';
import EjemploApiCard from './EjemploApiCard';

const EjemploApiList = (props) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {props.items.map((item) => {
                return <EjemploApiCard item={item} key={item.id} />;
            })}
        </div>
    );
};

export default EjemploApiList;
