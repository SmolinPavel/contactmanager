import React, { createContext, Component } from 'react';

const Context = createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Johny Doe',
        email: 'johnydoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '333-333-3333'
      },
      {
        id: 3,
        name: 'Joe Black',
        email: 'joeblack@gmail.com',
        phone: '111-111-1111'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
