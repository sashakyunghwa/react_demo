import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Articles from './articles';
import Nav from './nav.js';

export default () => (
    <div className="container">
        <Nav/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/articles' component={Articles}/>
    </div>
);
