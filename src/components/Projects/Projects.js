import React, { Component } from 'react'
import './Projects.css'
import Project from './Project'

import roboImage from "../../images/robofriends.png"
import facefind from "../../images/facefind.png"
import matchbots from "../../images/Matchbots.png"

import htmlIcon from "../../images/HTML5_Badge_512.png"
import cssIcon from "../../images/CSS3-Mark-Shape-Cut.png"
import jsIcon from "../../images/javascript-shield-logo.png"
import reactIcon from "../../images/react-hexagon.png"
import expressIcon from "../../images/expressjslogo.png"
import nodeIcon from "../../images/nodejs.png"

class Projects extends Component{
    render(){
        let i = 0;
        return(
            <div id='projects' className='project-grid'>
                <Project 
                    image={roboImage} 
                    title={'RoboFriends'}
                    description={'A simple page showing off the power of component based react development.'}
                    github={'https://github.com/sterlingwalsh/robofriends'}
                    site={'https://sterlingwalsh.github.io/robofriends/'}
                    tech={[htmlIcon, cssIcon, jsIcon, reactIcon]}
                    key={i++}/>
                <Project 
                    image={facefind}
                    title={'FaceFind'}
                    description={'Full stack. Includes user authentication and activity tracking'}
                    github={'https://github.com/sterlingwalsh/SmartBrain'}
                    site={'https://facefind.herokuapp.com/'}
                    tech={[htmlIcon, cssIcon, jsIcon, reactIcon, expressIcon, nodeIcon]}
                    key={i++}/>
                <Project 
                    image={matchbots} 
                    title={'MatchBots'}
                    description={'Classic match game created with vanilla techs as part of a community challenge'}
                    github={'https://github.com/sterlingwalsh/robofind'}
                    site={'https://sterlingwalsh.github.io/robofind/'}
                    tech={[htmlIcon, cssIcon, jsIcon]}
                    key={i++}/>
            </div>
        );
    }
}

export default Projects;