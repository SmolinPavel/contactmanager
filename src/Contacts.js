import React, { Component } from 'react';

import Contact from './Contact';

class Contacts extends Component {
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

  handleDelete = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            {...contact}
            onDeleteClick={this.handleDelete}
          />
        ))}
      </>
    );
  }
}

export default Contacts;
