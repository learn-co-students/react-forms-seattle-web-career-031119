// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleFirstNameChange(event)} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleLastNameChange(event)} />
      </form>
    )
  }
}
