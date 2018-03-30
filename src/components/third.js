import React from 'react';
import Monsters from '../monsters.jpg';

export default () => {
    const stoneBg = {
        background: '#ccc',
        borderRadius: '24px',
        boxShadow: `rgb(185, 185, 185) -6px -6px 0px,
            rgba(0, 0, 0, 0.5) -2px 5px 6px`,
        display: 'inline-block',
        margin: '35px 50px',
        padding: '12px 24px'
    }

    const stoneStyle = {
        color: 'transparent',
        backgroundColor: '#565656',
        font: 'bold 42px Arial',
        textShadow: '2px 2px 3px rgba(255, 255, 255, 0.5',
        WebkitBackgroundClip: 'text'
    }

    const regularStyle = {
        color: 'blue',
        font: 'bold 30px tahoma'
    }

    const monsters = {
        height: '200px',
        width: '200px'
    }

    return (
        <div>
            <div style={stoneBg}>
            <h1 style={stoneStyle}>It's written in stone.</h1>
            <h2 style={stoneStyle}>This is so dope yo</h2>
            <h3 style={regularStyle}>I'm just regular font</h3>
            </div>
            <div>
                <img style={monsters} src={Monsters}/>
            </div>
        </div>
    );
}

