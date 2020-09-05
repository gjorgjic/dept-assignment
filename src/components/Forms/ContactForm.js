import React, { useState } from 'react'
import { StyledButtonB } from '../../assets/globalStyles';
import '../../assets/css/ContactForm.scss';

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
            setsSuccessNameClass('error');
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
            setSuccessEmailClass('error');
        } else {
            setEmailValidationError(false);
            setSuccessEmailClass('success');
        }
        if (value === '') {
            setEmailError(true);
            setSuccessEmailClass('error');
        } else {
            setEmailError(false);
        }
        setEmail(value);
    }
    const handleChangeMessage = event => {
        const { value } = event.target;
        if (value === '') {
            setMessageError(true);
            setSuccessMessageClass('error');
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
        

        if(name === '' || email === '' || message === '') {
            // handle invalid data logic
            console.log('invalid form data')
            
            setsSuccessNameClass('error');
            setSuccessEmailClass('error');
            setSuccessMessageClass('error');
        };
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(String(email) !== '') {}
        return re.test(String(email).toLowerCase());
    }

    
    const RequiredField = props => <div className="error">This is a required field</div>
    

    return (
        <div className="contact-form">
            <form action="#" onSubmit={handleSubmit}>
                <h2 className="title">Question? <br />We are here to help!</h2>
                <div className="fields">
                    <div className="row">
                        <div className={`field field-name ${successNameClass}`}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} name="name" onChange={handleChangeName} />
                            {nameError && <RequiredField />}
                        </div>
                        <div className={`field field-email ${successEmailClass}`}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} name="email" onChange={handleChangeEmail} />
                            {emailError && <RequiredField />}
                            {emailValidationError && (
                                <div className="error">Email must be a valid email</div>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className={`field field-message ${successMessageClass}`}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleChangeMessage}></textarea>
                            {messageError && <RequiredField />}
                            <StyledButtonB className="btn" type="submit">Sen</StyledButtonB>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
