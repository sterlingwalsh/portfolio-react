import React, { Component } from 'react'
import './Nav.css'
import Navitem from './Navitem'

class Nav extends Component{
    render(){
        return(
            <nav className='nav'>
                <Navitem text="Home" anchor="#home" icon='home'/>
                <Navitem text="About" anchor="#name" icon='perm_identity'/>
                <Navitem text="Projects" anchor="#projects" icon='apps'/>
                <Navitem text="Contact Me" anchor="#contact" icon='question_answer'/>
            </nav>
        );
    }
}

export default Nav;