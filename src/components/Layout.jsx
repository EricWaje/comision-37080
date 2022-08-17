import React from 'react';

const Layout = (props) => {
    //console.log(props.children);
    return <div style={{ border: '3px solid black' }}>{props.children}</div>;
};

export default Layout;
