import React, { Component } from 'react'
import './Project.css'

class Project extends Component{
    render(){
        const {image, title, description, tech = []} = this.props;

        const icons = tech.map(r => <img src={r} alt='project'/>);

        return(
            <div className='project'>
                <div className='match-parent image-container'>
                    <div style={{'background': `url(${image})`, 
                                'backgroundSize': 'cover', 
                                'background-position-x': 'center',
                                'background-position-y': 'top'}} 
                        className='match-parent project-image transition-default'>    
                        </div>
                    <div className='match-parent overlay-container'>
                        <div className='overlay transition-default description-container'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>       
                        <div className='overlay transition-default icon-container'>
                            {icons}
                        </div>        
                    </div>              
                </div>
            </div>            
        );
    }
}

export default Project;