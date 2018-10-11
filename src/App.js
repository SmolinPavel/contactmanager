import React, { Component } from 'react';

import Header from './Header';
import Contacts from './Contacts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
          {/* <Contact
            name="Johny Doe"
            email="johnydoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Karen Smith"
            email="karen@gmail.com"
            phone="333-333-3333"
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
