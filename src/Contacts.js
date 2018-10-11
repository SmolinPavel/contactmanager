import React, { Component } from 'react';

import { Consumer } from './context';
import Contact from './Contact';

class Contacts extends Component {
  handleDelete = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {({ contacts }) => (
          <>
            {contacts.map(contact => (
              <Contact
                key={contact.id}
                {...contact}
                onDeleteClick={this.handleDelete}
              />
            ))}
          </>
        )}
      </Consumer>
    );
  }
}

export default Contacts;
