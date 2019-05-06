import React, { Component } from 'react'
import './Contact.css'

import ContactForm from './ContactForm'

class Contact extends Component{
    render(){
        return(
            <div id='contact' className='contact'>
                <div className='spacer'></div>  
                <div className='thanks'>
                    If you have made it this far, you must have seen something you liked, so take a second and leave your contact information. I would love to discuss how we can work together to build amazing things.
                </div>                
                <div className='spacer'></div>
                <div className='contact-form-container' >
                    <ContactForm />
                </div>
                <div className='spacer'></div>
            </div>
        );
    }
}

export default Contact;