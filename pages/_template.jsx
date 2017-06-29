import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { config } from 'config';

import Favicon from '!file-loader?name=favicon.png?v=2!../assets/PopUpConf_Favicon.png';

import '../styles/main.less';

export default class extends Component {

  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate={`${config.siteTitle} - %s`}
          defaultTitle={config.siteTitle}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              href: Favicon,
            },
          ]}
        />
        {this.props.children}
      </div>
    );
  }
}
