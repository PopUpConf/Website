import React, { Component } from 'react';
import jsonp from 'jsonp';

export default class SubscribeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
    };
  }

  submitForm = () => {
    jsonp('http://popupconf.us16.list-manage.com/subscribe/post-json?u=b00bcf357c93f18c04036ae18&id=f45dc9178b&EMAIL=ben%40hawker.me', { param: 'c' }, (err, data) => {
      console.log(err, data);
    });
  }

  handleChange = (e) => {
    this.setState({ emailInput: e.target.value });
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-input input-lg" placeholder="Enter your email" onChange={this.handleChange} value={this.state.emailInput} />
        <button className="btn btn-primary btn-lg input-group-btn" onClick={this.submitForm}>Sign Up</button>
      </div>
    );
  }
}

