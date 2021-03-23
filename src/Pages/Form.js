import React, { Component } from 'react'
import axios from 'axios'

import '../Styles/Form.css'
import submitLogo from '../Resources/Icon_Submit.svg'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            phNumber: '',
            addSecondPhNum: false,
            phNumberTwo: '',
            message: '',
            addressRadio: false,
            addressLineOne: '',
            addressLineTwo: '',
            city: '',
            county: '',
            postcode: '',
            country: '',
            errors: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRadioCheck = this.handleRadioCheck.bind(this);
        //this.createJSON = this.createJSON(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleRadioCheck(evt) {
        this.setState({ addressRadio: evt.target.checked });
    }

    // createJSON() {
        
        
    //     return data;
    // }

    handleSubmit(evt) {
        evt.preventDefault();
        //const data = JSON.stringify(this.state);
    
        //const data = this.createJSON();
        let phNumbers = [this.state.phNumber];

        if(this.state.addSecondPhNum) {
            phNumbers = [...phNumbers,this.state.phNumberTwo];
        }

        let data = {
            FullName: this.state.fullName,
            EmailAddress: this.state.email,
            PhoneNumbers: phNumbers,
            Message: this.state.message,
            bIncludeAddressDetails: this.state.addressRadio,
        };

        if(this.state.addressRadio) {
            let AddressDetails = {
                AddressLine1: this.state.addressLineOne,
                AddressLine2: this.state.addressLineTwo,
                CityTown: this.state.city,
                StateCounty: this.state.county,
                Postcode: this.state.postcode,
                Country: this.state.country
            };
            data = {...data, AddressDetails}
        }
        
        const dataJSON = JSON.stringify(data);

        const url = 'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit';

        axios({
            method: 'POST',
            url: url,
            data: dataJSON,
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
            console.log(res);
            this.setState({errors: res.data.Errors})
            console.log(`response` + this.state.errors);
        })
        .catch((err) => {
            console.log(err);
        });
        
        console.log(dataJSON);

        this.setState({
            fullName: '',
            email: '',
            phNumber: '',
            addSecondPhNum: false,
            phNumberTwo: '',
            message: '',
            addressRadio: false,
            addressLineOne: '',
            addressLineTwo: '',
            city: '',
            county: '',
            postcode: '',
            country: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <p>
                    Proin eget lacus scelerisque, accumsan purus vel, aliquam erat. Aenean enim massa, ullam ut elementum ac, imperdiet at urna. Donec nec diam sit amet neque tincidunt convallis vel eu nisl.
                </p>
                <form onSubmit={this.handleSubmit} className='form'>
                    <div className='form-oneline'>
                        <div className='form-grow'>
                            <label htmlFor="fullName">Full name</label>
                            <input type="text" name="fullName" id="fullName" required value={this.state.fullName} onChange={this.handleChange} />
                        </div>
                        <div className='form-grow'>
                            <label htmlFor="email">Email address</label>
                            <input type="text" name="email" id="email" required value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='form-whole-line'>
                        <label htmlFor="phNumber">Phone number 01 <span>- optional</span></label>
                        <input type="tel" name="phNumber" id="phNumber" value={this.state.phNumber} onChange={this.handleChange} />
                    </div>
                    {this.state.addSecondPhNum ? (
                        <div className='form-whole-line'>
                            <label htmlFor="phNumberTwo">Phone number 02 <span>- optional</span></label>
                            <input type="tel" name="phNumberTwo" id="phNumberTwo" value={this.state.phNumberTwo} onChange={this.handleChange} />
                        </div>
                    ) : null}
                    <button className='add-phone-btn' type="button" onClick={() => this.setState({addSecondPhNum: true})}>
                        Add new phone number
                    </button>
                    <label htmlFor="message">Message <span>Maximum text length is 500 characters</span></label>
                    <input type="text" size="50" maxLength="500" name="message" id="message" required value={this.state.message} onChange={this.handleChange} />
                    <label htmlFor="addressRadio">Add address details</label>
                    <input type="checkbox" name="addressRadio" checked={this.state.addressRadio} onChange={this.handleRadioCheck} />
                    {this.state.addressRadio ? (
                        <div>
                            <div className='form-oneline'>
                                <div className='form-grow'>
                                    <label htmlFor="addressLineOne">Addess line 1</label>
                                    <input type="text" name="addressLineOne" id="addressLineOne" required value={this.state.addressLineOne} onChange={this.handleChange} />
                                </div>
                                <div className='form-grow'>
                                    <label htmlFor="addressLineTwo">Address line 2 <span>- optional</span></label>
                                    <input type="text" name="addressLineTwo" id="addressLineTwo" value={this.state.addressLineTwo} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className='form-oneline'>
                                <div className='form-grow'>
                                    <label htmlFor="city">City/Town</label>
                                    <input type="text" name="city" id="city" required value={this.state.city} onChange={this.handleChange} />
                                </div>
                                <div className='form-grow'>
                                    <label htmlFor="county">State/County</label>
                                    <input type="text" name="county" id="county" required value={this.state.county} onChange={this.handleChange} />
                                </div>
                                <div className='form-grow'>
                                    <label htmlFor="postcode">Postcode</label>
                                    <input type="text" name="postcode" id="postcode" required value={this.state.postcode} onChange={this.handleChange} />
                                </div>
                                <div className='form-grow'>
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" id="country" required value={this.state.country} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                    ): null}
                    <div>
                    <button className='submit-btn'>
                        <img className='submit-logo' src={submitLogo} alt="submit-logo"/>
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
