
import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          onChange={event => this.handleChange(event)}
          defaultValue={this.state.firstName} />
        <input
          type="text"
          name="lastName"
          onChange={event => this.handleChange(event)}
          defaultValue={this.state.lastName} />
      </form>
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

}

export default Form;
