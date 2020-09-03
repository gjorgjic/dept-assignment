import React, { useState } from 'react'
import { StyledButtonB } from '../../assets/globalStyles';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailValidationError, setEmailValidationError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [successNameClass, setsSuccessNameClass] = useState('');
    const [successEmailClass, setSuccessEmailClass] = useState('');
    const [successMessageClass, setSuccessMessageClass] = useState('');

    const handleChangeName = event => {
        const { value } = event.target;
        if (value === '') {
            setNameError(true);
            setsSuccessNameClass('');
        } else {
            setsSuccessNameClass('success');
            setNameError(false)
        };
        setName(value);
    }
    const handleChangeEmail = event => {
        const { value } = event.target;
        if(validateEmail(value) !== true) {
            setEmailValidationError(true);
            setSuccessEmailClass('success');
        } else {
            setSuccessEmailClass('');
        }
        if (value === '') {
            setEmailError(true);
            setSuccessEmailClass('');
        } else {
            setEmailError(false);
        }
        setEmail(value);
    }
    const handleChangeMessage = event => {
        const { value } = event.target;
        if (value === '') {
            setMessageError(true);
            setSuccessMessageClass('');
        } else {
            setMessageError(false);
            setSuccessMessageClass('success');
        }
        setMessage(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name === '') setNameError(true);
        if(email === '') setEmailError(true);
        if(message === '') setMessageError(true);
        if(nameError === true || emailError === true || messageError === true) console.log('invalid form data');
        console.log(`${nameError}, ${emailError}, ${messageError}`)
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()), 'regex test')
        if(String(email) !== '') {}
        return re.test(String(email).toLowerCase());
    }

    
    const requiredField = <div className="error">This is a required field</div>
    

    return (
        <div className="contact-form">
            <h2>Question? We are here to help!</h2>
            <form action="#" onSubmit={handleSubmit}>
                <div className="row">
                    <div className={`field field-name ${successNameClass}`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} name="name" onChange={handleChangeName} />
                        {nameError && requiredField}
                    </div>
                    <div className={`field field-email ${successEmailClass}`}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} name="email" onChange={handleChangeEmail} />
                        {emailError && requiredField}
                        {emailValidationError && (
                            <div className="error">Email must be a valid email</div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className={`field field-message ${successMessageClass}`}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleChangeMessage}></textarea>
                        {messageError && requiredField}
                    </div>
                </div>
                <StyledButtonB type="submit">Sen</StyledButtonB>
            </form>
        </div>
    )
}
