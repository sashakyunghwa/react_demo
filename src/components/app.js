import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import First from './first';
import Second from './second';
import Third from './third';

const App = () => (
    <div>
        {/* <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div> */}
        <First/> 
        <Second/>
        <Third/>
    </div>
);

export default App;
