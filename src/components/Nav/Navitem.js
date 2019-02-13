import React, { Component } from 'react'

class Navitem extends Component{
    render(){
        const {text, anchor, icon} = this.props;
        console.log(this.props);
        return(
            <a href={anchor}>
                <div className='menu-item-container'>
                    <div className='marker'>- </div>
                    <div className='menu-item-text' >{text}</div>
                    <div className='icon'><i className='material-icons'>{icon}</i></div>
                    <div className='marker'> -</div>
                </div>
            </a>
        );
    }
}

export default Navitem;