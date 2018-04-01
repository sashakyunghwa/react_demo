import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';  

export default () => (
    <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active selected">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/about" className="nav-link" activeClassName="active selected">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact to="/articles" className="nav-link" activeClassName="active selected">Articles</NavLink>
        </li>
    </ul>
);