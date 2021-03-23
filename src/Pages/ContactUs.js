import React, { Component } from 'react'

import Form from './Form'

import '../Styles/ContactUs.css'
import imgContact from '../Resources/Img_Contact.png'

class ContactUs extends Component {
    render() {
        return (
            <div className='ContactUs'>
                <div className='col marginColLeft'>
                    <Form />
                </div>
                <div className='col col-img'>
                    <img src={imgContact} alt="img-contact"/>
                </div>
            </div>
        )
    }
}

export default ContactUs
