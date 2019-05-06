import React, { Component } from 'react'
import './Project.css'

import gitIcon from '../../images/github-logo.png'

class Project extends Component{
    render(){
        const {image, title, description, github, site, tech = []} = this.props;

        const icons = tech.map(r => <img src={r} alt='project' className='tech-icon'/>);

        return(
            <div className='project'>
                <div className='match-parent image-container'>
                    <div style={{'backgroundImage': `url(${image})`}} 
                        className='match-parent project-image transition-default'>    
                    </div>
                    <div className='match-parent overlay transition-default'>
                        <h1>{title}</h1>
                        <div className='center-text description-wrapper'><p>{description}</p></div>
                        <div className='icon-container'>
                            {icons}
                            <div className='spacer'></div>
                            <a href={github} target='_blank' rel='noopener noreferrer' className='tech-icon'><img src={gitIcon} alt='github'/></a>
                            <a href={site} target='_blank' rel='noopener noreferrer' className='tech-icon'><i className='material-icons'>desktop_windows</i></a>
                        </div>        
                    </div>              
                </div>
            </div>            
        );
    }
}

export default Project;