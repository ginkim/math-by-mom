import React, { Component } from 'react';
import './App.css';
import './components/MenuButton';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Addition from './components/Addition'
import Subtraction from './components/Subtraction'
import Multiplication from './components/Multiplication'
import Division from './components/Division'
import Home from './components/Home'




class App extends Component {

  
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Let's do math!</h1>                          
                <Link to="/addition">Addition</Link> {' | '}            
                <Link to="/subtraction">Subtraction</Link> {' | '}               
                <Link to="/multiplication">Multiplication</Link> {' | '}               
                <Link to="/division">Division</Link> {' | '}               
                <Link to="/">Home</Link>                
            </header>

            <Route exact path="/" component={Home} />
            <Route path="/addition" component={Addition} />
            <Route path="/subtraction" component={Subtraction} />
            <Route path="/multiplication" component={Multiplication} />
            <Route path="/division" component={Division} />

            
          </div>
        </Router>
    );
  }
}

export default App;
