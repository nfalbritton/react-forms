import React, { Component } from 'react';
import FormContainer from './FormContainer';
import AddressList from '../components/AddressList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses:[]
    }
    this.trackAddress = this.trackAddress.bind(this);
  }

  trackAddress(submission) {
    this.setState({ addresses: this.state.addresses.concat(submission) })
  }

  render() {
    return (
      <div className="row">
        <div className="medium-6 medium-offset-3 small-12 columns">
          <h1 className="text-center">Shipping Address</h1>
            <FormContainer trackAddress={this.trackAddress} />
            <AddressList addresses={this.state.addresses} />
        </div>
      </div>
    );
  }
}

export default App;
