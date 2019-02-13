import React, { Component } from 'react'
import './Cover.css'

class Cover extends Component{
    render(){
        return(
            <div id='home' className='cover'>
                <div className='welcome'>
                    <div>
                        Full stack developer ready to bring your project to the next level
                    </div>
                </div>
                <div className='name-container'>
                    <div id='name' className='name'>
                        <div className='name-text'>
                            Sterling Walsh
                            <div className='underline'><hr></hr></div>
                        </div>
                    </div>
                    <div className='spacer'></div>
                </div>
            </div>
        );
    }
}

export default Cover;