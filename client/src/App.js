import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from './components/main/main'; // Main Parent Component
import Guest from './components/guest/guest'; // Main Parent Component
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/admin" component={Main}/>
          </Switch>
          <Route exact path="/" component={Guest}/>
        </Router>
      </div>
    );
  }
}

export default App;
