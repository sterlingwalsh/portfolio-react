import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component{
    render(){
        return(
            <div className='nav center'>
                <a href='#cover'>Home</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact Me</a>
            </div>
        );
    }
}

export default Nav;