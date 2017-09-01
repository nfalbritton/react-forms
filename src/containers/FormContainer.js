import React, { Component } from 'react';
import Select from '../components/Select';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
        user: {
          firstName:' ',
          lastName:' ',
          address:' ',
          city:' ',
          state:' ',
          zipcode:' ',
          phone:' ',
          email:' ',
          stateOptions: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS'
            ,'MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI'
            ,'WY'],
          stateSelected:' '
        }
      }

    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStateSelection = this.handleStateSelection.bind(this);
    this.validateInputChange = this.validateInputChange.bind(this);
    this.validateStateSelection = this.validateStateSelection(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      firstName:' ',
      lastName:' ',
      address:' ',
      city:' ',
      state:' ',
      zipcode:' ',
       phone:' ',
      email:' ',
      stateSelected:' '
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateInputChange(this.state.user.firstName, 'firstName') &&
    this.validateInputChange(this.state.user.lastName, 'lastName') &&
    this.validateInputChange(this.state.user.address, 'address') &&
    this.validateInputChange(this.state.user.city, 'city') &&
    this.validateStateSelection(thi.state.user.stateSelected) &&
    this.validateInputChange(this.state.user.zipcode, 'zipcode') &&
    this.validateInputChange(this.state.user.phone, 'phone') &&
    this.validateInputChange(this.state.user.email, 'email'))
    {
      let formPayload = {
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
        address: this.state.user.address,
        city: this.state.user.city,
        state: this.state.user.stateSelected,
        zipcode: this.state.user.zipcode,
        phone: this.state.user.phone,
        email: this.state.user.email
      };
      console.log(this.props.trackAddress(formPayload));
      this.handleClearForm(event);
    }
  }

  handleInputChange(event) {
    this.validateInputChange(event.target.value)
    this.setState({ user: event.target.value})
  }

  handleStateSelection(event) {
    this.validateStateSelection(event.target.value)
    this.setState({ stateSelected: event.target.value})
  }

  validateInputChange(field) {
    if (field === ' '){
      let newError = {user: 'field cannot be left blank'}
      this.setState({ errors: Object.assign(this.state.errors, newError)})
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.user
      this.setState({ errors: errorState})
      return true
    }
  }

  validateStateSelection(selection) {
    if (selection === ' ') {
      let newError = {stateSelected: 'You must select a state'}
      this.setState({ errors: Object.assign(this.state.errors, newError )})
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.stateSelected
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if(Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
      return (
        <form className="callout" onSubmit={this.handleFormSubmit}>
          {errorDiv}
          <TextField
              content={this.state.user.firstName}
              label='First Name'
              name='firstName'
              handlerFunction={this.handleInputChange}
            />
            <TextField
              content={this.state.user.lastName}
              label='Last Name'
              name='lastName'
              handlerFunction={this.handleInputChange}
            />
            <TextField
              content={this.state.user.address}
              label='Address'
              name='address'
              handlerFunction={this.handleInputChange}
            />
            <TextField
              content={this.state.user.city}
              label='City'
              name='city'
              handlerFunction={this.handleInputChange}
            />
            <Select
              handlerFunction={this.handleInputChange}
              name='stateSelected'
              label='State'
              options={this.state.user.stateOptions}
              selectedOption={this.state.user.stateSelected}
            />
            <TextField
              content={this.state.user.zipcode}
              label='Zip Code'
              name='zipcode'
              handlerFunction={this.handleInputChange}
            />
            <TextField
              content={this.state.user.phone}
              label='Phone Number'
              name='phone'
              handlerFunction={this.handleInputChange}
            />
            <TextField
              content={this.state.user.email}
              label='E-mail'
              name='email'
              handlerFunction={this.handleInputChange}
            />
            <div className="button-group">
              <button className="button" onClick={this.handleClearForm}>Clear Form</button>
              <input className="button" type="submit" value="Submit"/>
            </div>
        </form>
      )
    }
  }

export default FormContainer;
