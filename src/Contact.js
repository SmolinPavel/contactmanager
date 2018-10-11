import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    opened: false
  };

  handleClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { name, email, phone } = this.props;

    return (
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
            onClick={this.handleClick}
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
