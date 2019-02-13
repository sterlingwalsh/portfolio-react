import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js'
import Cover from './components/Cover/Cover.js'
import About from './components/About/About.js'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'
import Footer from './components/Footer/Footer.js'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Cover />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
