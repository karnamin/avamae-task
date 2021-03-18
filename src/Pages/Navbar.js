import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import '../Styles/Navbar.css';
import logo from '../Resources/Logo.svg';

import Homepage from './Homepage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div id='navbar'>
                    <ul id='nav'>
                        <div className='nav-left'>
                            <li><img src={logo} alt="logo"/></li>
                        </div>
                        <div className='nav-right'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about-us'>About Us</Link></li>
                            <li><Link to='/contact-us'>Contact Us</Link></li>
                            <li><a href="#">Log In</a></li>
                        </div>
                        
                    </ul>
                </div>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/about-us' component={AboutUs} />
                    <Route exact path='/contact-us' component={ContactUs} />
                </Switch>
            </Router>
        )
    }
}

export default Navbar
