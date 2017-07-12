import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import classnames from 'classnames';

export default class Factoid extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    content: PropTypes.node,
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, icon, top, left, right, bottom } = this.props;
    return (
      <div className={classnames('factoid')} style={{ top, left, right, bottom }}>
        <SVGInline className="factoid-icon" svg={icon} />
        <div className="factoid-content">
          <p className="factoid-text">{ content }</p>
        </div>
      </div>
    );
  }
}

