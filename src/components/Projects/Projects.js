import React, { Component } from 'react'
import './Projects.css'
import Project from './Project'

class Projects extends Component{
    render(){
        const projects = [];
        for(let i = 0; i < 5; i++){
            projects.push(<Project image={`https://robohash.org/${i}`} key={i}/>);
        }
        return(
            <div>
                {projects}
            </div>
        );
    }
}

export default Projects;