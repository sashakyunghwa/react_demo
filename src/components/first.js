import React from 'react';
import Puppies from '../../dist/puppies.jpg';

export default () => (
    <div>
        <div className="main-header">
            <h1>Welcome to Sasha's Awesome Page</h1>
            <h1>Everyday I'm shuffle-in-shuffle-in-shuffle-in!</h1>
            <img className="puppies" src={Puppies}/>
        </div>
        <div className="main-content">
            <h3>About Me</h3>
            <p>I'm from the OC and learning how to code at LearningFuze. It's awesome! We get to learn so many different things in 3 months.</p>
        </div>
        <div className="conclusion">
            <h4>I will become a GIRL BOSS WEB DEVELOPER!</h4>
        </div>
    </div>
)





