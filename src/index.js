import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import 'font-awesome/css/font-awesome.min.css'; // CSS from FontAwesome
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

import Card from './components/card';
let counter = 0;
setInterval(() => {
    let num1 = Math.floor(counter / 1);
    let num2 = Math.floor(counter / 10);
    let num3 = Math.floor(counter / 100);
    let num4 = Math.floor(counter / 1000);

    counter++;
    ReactDOM.render(<Card name={"Contador"} num1={num1} num2={num2} num3={num3} num4={num4} />, document.querySelector("#root"));

}, 1000);