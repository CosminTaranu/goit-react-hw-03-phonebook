import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim()
    };

    this.props.addContact(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <h4>Name</h4>
            <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="Enter a contact name"
          style={{ padding: '5px', marginRight: '10px', fontSize: '16px', width: '300px' }}
        />
        <h4>Number</h4>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter a contact number"
          style={{ padding: '5px', marginRight: '10px', fontSize: '16px', width: '300px' }}
        />
       </div>
        
        <button type="submit" style={{ padding: '5px 10px', fontSize: '16px' }}>Add contact</button>
      </form>
    );
  }
}

export default Form;
