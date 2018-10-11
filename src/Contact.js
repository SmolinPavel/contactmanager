import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './context';

class Contact extends Component {
  state = {
    opened: false
  };

  handleClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { id, name, email, phone } = this.props;

    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="card card-body mb-3">
            <h4>
              {name}{' '}
              <i
                className="fas fa-sort-down"
                onClick={this.handleClick}
                style={{ cursor: 'pointer' }}
              />
              <i
                className="fas fa-times"
                onClick={() =>
                  dispatch({ type: 'DELETE_CONTACT', payload: id })
                }
                style={{ cursor: 'pointer', float: 'right', color: 'red' }}
              />
            </h4>
            {this.state.opened && (
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            )}
          </div>
        )}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
