import React, { Component } from 'react';

class ContactUs extends Component {
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
            addressLineTwo: '',
            city: '',
            county: '',
            postcode: '',
            country: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadioCheck = this.handleRadioCheck.bind(this);
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleRadioCheck(evt) {
        this.setState({ addressRadio: evt.target.checked });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        alert(`submitted ${this.state.fullName}`);
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
                <div>
                    <h1>Contact Us</h1>
                    <p>
                        Proin eget lacus scelerisque, accumsan purus vel, aliquam erat. Aenean enim massa, ullamcorper ut elementum ac, imperdiet at urna. Donec nec diam sit amet neque tincidunt convallis vel eu nisl.
                    </p>
                    <form action="" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="fullName">Full name</label>
                            <input type="text" name="fullName" id="fullName" value={this.state.fullName} onChange={this.handleChange} />
                            <label htmlFor="email">Email address</label>
                            <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="phNumber">Phone number 01 <span>- optional</span></label>
                            <input type="tel" name="phNumber" id="phNumber" value={this.state.phNumber} onChange={this.handleChange} />
                        </div>
                        {this.state.addSecondPhNum ? (
                            <div>
                                <label htmlFor="phNumberTwo">Phone number 02 <span>- optional</span></label>
                                <input type="tel" name="phNumberTwo" id="phNumberTwo" value={this.state.phNumberTwo} onChange={this.handleChange} />
                            </div>
                        ) : null}
                        <button type="button" onClick={() => this.setState({addSecondPhNum: true})}>
                            Add new phone number
                        </button>
                        <label htmlFor="message">Message <span>Maximum text length is 500 characters</span></label>
                        <input type="text" size="50" maxLength="500" />
                        <label htmlFor="addressRadio">Add address details</label>
                        <input type="checkbox" name="addressRadio" checked={this.state.addressRadio} onChange={this.handleRadioCheck} />
                        {this.state.addressRadio ? (
                            <div>
                                <div>
                                    <label htmlFor="addressLineOne">Addess line 1</label>
                                    <input type="text" name="addressLineOne" id="addressLineOne" value={this.state.addressLineOne} onChange={this.handleChange} />
                                    <label htmlFor="addressLineTwo">Address line 2 <span>- optional</span></label>
                                    <input type="text" name="addressLineTwo" id="addressLineTwo" value={this.state.addressLineTwo} onChange={this.handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="city">City/Town</label>
                                    <input type="text" name="city" id="city" value={this.state.city} onChange={this.handleChange} />
                                    <label htmlFor="county">State/County</label>
                                    <input type="text" name="county" id="county" value={this.state.county} onChange={this.handleChange} />
                                    <label htmlFor="postcode">Postcode</label>
                                    <input type="text" name="postcode" id="postcode" value={this.state.postcode} onChange={this.handleChange} />
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" id="country" value={this.state.country} onChange={this.handleChange} />
                                </div>
                            </div>
                        ): null}
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs
