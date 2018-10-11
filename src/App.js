import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="Johny Doe"
            email="johnydoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Karen Smith"
            email="karen@gmail.com"
            phone="333-333-3333"
          />
        </div>
      </div>
    );
  }
}

export default App;
