import React from 'react';
import ReactDOM from 'react-dom/client';

//export default
import App from './App';
//import {Otra} from './App' -> export nombrado

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// const foo = () => {

// }

// foo() === <Foo/>
