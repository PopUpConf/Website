import React from 'react';
import '../styles/main.less';

import PageLink from '../components/common/PageLink';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
});
