import React, { Component } from 'react'
import './About.css'

class About extends Component{
    render(){
        return(
            <div id='about' className='about bkg-light'>
                <div className='spacer'></div>
                <div className='about-text'>
                    <p>For the last 8 years, I've been working for an R&D company assisting with a variety of projects, many of which were funded bt research grants from various US government departments. </p>
                    <p>My role involved many from novel material testing to managing the a testing system for remote use by research partners overseas. Basically, my job is to work with and be a problem solver. My favorite projects, though, were coding. My first major software project was to use Java to develop a desktop app for a sensor system that was developed for the Army Research Laboratory. </p>
                    <p>My goal is to turn my focus toward using code for problem solving and developing sleak and responsive website on both the frontend and the backend.</p>
                </div>
                {/* <div className='about-portrait'>

                </div> */}
            </div>
        );
    }
}

export default About;