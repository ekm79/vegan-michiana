import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import App from '../App';
import Home from './Home';
import About from './About/About';

const Root = () => {
    return (
        <div>
            <Route exact path='/' component={NavBar}/>
        <Route path="/" component={App}/>
        <Route path="/about" component={About} />
        </div>
    )
}

export default Root;