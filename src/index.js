import React from 'react';
import ReactDOM from 'react-dom/client';

//export default
import App from './App';
//import {Otra} from './App' -> export nombrado

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// const foo = () => {

// }

// foo() === <Foo/>
