import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.less';

export default class extends Component {

  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
