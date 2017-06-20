import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import Helmet from 'react-helmet';

import Logo from '!raw-loader!../assets/PopUpConf_Logo.svg';

import { config } from 'config';
import SubscribeForm from '../components/common/SubscribeForm.js';

export default class IndexPage extends Component {
  render() {
    return (
      <div className="home">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="hero">
          <h1 className="brand">
            <SVGInline svg={Logo} /><br />
          </h1>
          <h2>
            September 17<sup>th</sup>, 2017
          </h2>
          <div className="cta">
            <SubscribeForm />
          </div>
        </div>
      </div>
    );
  }
}

