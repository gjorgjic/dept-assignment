import React from 'react'

export default function ContactForm() {
    return (
        <div className="contact-form">
            <h2>Question? We are here to help!</h2>
            <form action="#">
                <div className="row">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Sen</button>
            </form>
        </div>
    )
}
