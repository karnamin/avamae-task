import React, { Component } from 'react'
import '../Styles/Navbar.css'
import logo from '../Resources/Logo.svg'

class Navbar extends Component {
    render() {
        return (
            <div id='navbar'>
                <ul id='nav'>
                    <div className='nav-left'>
                        <li><img src={logo} alt="logo"/></li>
                    </div>
                    <div className='nav-right'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Log In</a></li>
                    </div>
                    
                </ul>
            </div>
        )
    }
}

export default Navbar
