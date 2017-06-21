import React, { Component } from 'react';
import classnames from 'classnames';
import jsonp from 'jsonp';
import { isEmail } from 'validator';

import { config } from 'config';

export default class SubscribeForm extends Component {

  static getInitialState = () => ({
    inputEmail: '',
    inputError: false,
    submitLoading: false,
    submitError: false,
    message: '',
  })

  constructor(props) {
    super(props);
    this.state = this.constructor.getInitialState();
  }

  handleSubmit = (e) => {
    const { inputEmail } = this.state;
    const { mailchimpHost, mailchimpUserId, mailchimpListId } = config;

    if (isEmail(inputEmail)) {
      this.setState({ submitLoading: true });

      const requestUrl = `https://${mailchimpHost}/subscribe/post-json?u=${mailchimpUserId}&id=${mailchimpListId}&EMAIL=${inputEmail}`;

      jsonp(requestUrl, { param: 'c' }, (err, data) => {
        this.setState({ message: data.msg, submitLoading: false, submitError: err || data.result !== 'success' });
      });
    } else {
      this.setState({ inputError: true });
    }


    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ inputEmail: e.target.value });
  }

  handleClear = () => {
    this.setState(this.constructor.getInitialState());
  }

  render() {
    const { inputEmail, inputError, message, submitLoading, submitError } = this.state;

    const inputClasses = [
      { loading: submitLoading },
      { disabled: submitLoading },
    ];

    if (!message) {
      return (
        <form className={classnames('form-group', { 'has-error': inputError })} onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" className={classnames('form-input', 'input-lg', inputClasses)} placeholder="Enter your email" onChange={this.handleChange} value={inputEmail} />
            <button type="submit" className={classnames('btn', 'btn-primary', 'btn-lg', 'input-group-btn', inputClasses)}>Sign Up</button>
          </div>
          { inputError ? <p className="form-input-hint">Uh oh! That's not a real email address.</p> : null }
        </form>
      );
    }
    return (
      <div className={classnames('toast', { 'toast-error': submitError })}>
        <button className="btn btn-clear float-right" onClick={this.handleClear} />
        {message}
      </div>
    );
  }
}

