import React, { Component } from 'react'
import './ContactForm.css'

class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            submitSuccess: false,
            form: {
                formName: '',
                formEmail: '',
                formCompany: '',
                formMessage: ''
            }
        }
    }

    submit = (state) => (action) =>{
        action.preventDefault();
        this.setState({submitSuccess: true});
        console.log(action);
        fetch('https://www.enformed.io/2e5565yg', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({...this.state.form})
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(res.status === 200){
                this.setState({submitSuccess: true});
            }
        })
    }

    onInputChange = (event) => {
        // console.log(event.target.value);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const form = Object.assign({}, this.state.form, {[name]:value});
        this.setState({form}, () => console.log(this.state));
    }

    render(){
        return(
            !this.state.submitSuccess ? 
            <form className='contact-form' onSubmit={this.submit(this.state)}>
                <input onChange={this.onInputChange} className='form-text' type='text' name='formName' placeholder='Name' required/>
                <input onChange={this.onInputChange} className='form-text' type='text' name='formCompany' placeholder='Company (Optional)'/>
                <input onChange={this.onInputChange} className='form-text' type='email' name='formEmail' placeholder='Email' required/>
                <textarea onChange={this.onInputChange} className='form-text' id='form-message' name='formMessage' rows='4' placeholder='Additional questions or comments (Optional)'></textarea>
                <input className='form-button' type='submit' name='submit'/>
            </form>
            :
            <div className='thank-message'><p>Thank You!</p><p>I will be in touch.</p></div>
            
        );
    }
}

export default ContactForm;