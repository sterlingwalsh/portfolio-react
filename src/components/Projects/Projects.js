import React, { Component } from 'react'
import './Projects.css'
import Project from './Project'

import roboImage from "../../images/robofriends.png"

import htmlIcon from "../../images/HTML5_Badge_512.png"
import cssIcon from "../../images/CSS3-Mark-Shape-Cut.png"
import jsIcon from "../../images/javascript-shield-logo.png"
import reactIcon from "../../images/react-hexagon.png"

class Projects extends Component{
    render(){
        let i = 0;
        return(
            <div id='projects' className='project-grid'>
                <Project 
                    image={roboImage} 
                    title={'RoboFriends'}
                    description={'A simple page showing off the power of component based react development.'}
                    tech={[htmlIcon, cssIcon, jsIcon, reactIcon]}
                    key={i++}/>
                <Project 
                    image={roboImage} key={i++}/>
                <Project 
                    image={roboImage} key={i++}/>
                <Project 
                    image={roboImage} key={i++}/>
                <Project 
                    image={roboImage} key={i++}/>
            </div>
        );
    }
}

export default Projects;