import React, { Component } from 'react'
import './ContactForm.css'

class ContactForm extends Component{
    render(){
        return(
            <form class='contact-form'>
                <input class='form-text' type='text' name='name' placeholder='Name' required/>
                <input class='form-text' type='text' name='company' placeholder='Company (Optional)'/>
                <input class='form-text' type='email' name='email' placeholder='Email' required/>
                <textarea class='form-text' name='message' rows='4' placeholder='Additional questions or comments (Optional)'></textarea>
                <input class='form-button' type='submit' name='submit'/>
            </form>
        );
    }
}

export default ContactForm;